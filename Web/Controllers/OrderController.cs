using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ApplicationCore.Dtos;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Web.Controllers
{
    [Route("api/orders")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _repo;
        private readonly IMapper _mapper;

        public OrderController(IOrderRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet] // GET: api/orders
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Get()
        {
            var orders = _repo.GetAllOrders();
            var ordersDto = _mapper.Map<IEnumerable<OrderDto>>(orders);
            return Ok(ordersDto);
        }

        [HttpGet("{id}")] // GET: api/orders/1
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            var order = await _repo.GetOrderByIdAsync( id);
            if (!_repo.OrderExists(id))
                return NotFound();

            var orderDto = _mapper.Map<OrderDto>(order);
            return Ok(orderDto);
        }

        [HttpPost] // POST: api/orders
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Post([FromBody] Object obj)
        {
            var jsonString = JsonConvert.SerializeObject(obj);

            var order = JsonConvert.DeserializeObject<Order>(jsonString);

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await _repo.CreateOrderAsync(order);
            return Ok();
        }

        [HttpPut("{id}")] // PUT: api/orders/1
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] Order order)
        {
            if (id != order.OrderId)          
                return BadRequest();       

            try
            {
                await _repo.UpdateOrderAsync(order);
            }
            catch (DbUpdateConcurrencyException e)
            {
                if (!_repo.OrderExists(id))                
                    return NotFound();
                
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")] // DELETE: api/orders/1
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _repo.DeleteOrderAsync(id);
            return Ok();
        }
    }
}