using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using ApplicationCore.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http2.HPack;
using StatusCodes = Microsoft.AspNetCore.Http.StatusCodes;

namespace Web.Controllers
{
    [Route("api/customers")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _repo;
        private readonly IMapper _mapper;

        public CustomerController(ICustomerRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet] // GET: api/customers
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Get()
        {
            var customers = _repo.GetAllCustomers();
            var customersDto = _mapper.Map<IEnumerable<CustomerDto>>(customers);
            return Ok(customersDto);
        }

        [HttpGet("{id}")] // GET: api/customers/1
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            var customer = await _repo.GetCustomerById(id);
            if (!_repo.CustomerExists(id))
                return NotFound();

            var customerDto = _mapper.Map<CustomerDto>(customer);
            return Ok(customerDto);
        }

        [HttpPost] // POST: api/customers
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Post([FromBody] Object obj)
        {
            var jsonString = JsonConvert.SerializeObject(obj);

            var customer = JsonConvert.DeserializeObject<Customer>(jsonString);

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await _repo.CreateCustomerAsync(customer);
            return Ok();
        }
        
        [HttpPost("{id}")] // POST: api/customers/1
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Post([FromRoute] int id, [FromBody] Object order)
        {
            var jsonString = JsonConvert.SerializeObject(order);
            var deserializedOrder = JsonConvert.DeserializeObject<Order>(jsonString);

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await _repo.CreateAdditionalOrderAsync(id, deserializedOrder);
            return Ok();
        }

        [HttpPut("{id}")] // PUT: api/customers/1
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] Customer customer)
        {
            if (id != customer.CustomerId)
                return BadRequest();

            try
            {
                await _repo.UpdateCustomerAsync(customer);
            }
            catch (DbUpdateConcurrencyException e)
            {
                if (!_repo.CustomerExists(id))
                    return NotFound();

                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")] // DELETE: api/customers/1
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _repo.DeleteCustomerAsync(id);
            return Ok();
        }
    }
}