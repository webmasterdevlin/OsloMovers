using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using Infrastructure.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Web.Services
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _context;

        public OrderRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Order> GetAllOrders()
        {
            return _context.Orders;
        }

        public bool OrderExists(int id)
        {
            return _context.Orders.Any(c => c.OrderId == id);
        }

        public async Task<Order> GetOrderByIdAsync(int id)
        {
            return await _context.Orders
                .Where(o => o.OrderId == id)
                .Include(o => o.Customer)
                .ThenInclude(c => c.Orders)
                .FirstOrDefaultAsync();
        }

        public async Task<Order> CreateOrderAsync(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return order;
        }

        public async Task<Order> UpdateOrderAsync(Order order)
        {
            _context.Update(order);
            await _context.SaveChangesAsync();
            return order;
        }

        public async Task DeleteOrderAsync(int id)
        {
            _context.Remove(await _context.Orders.FindAsync(id));
            await _context.SaveChangesAsync();
        }
    }
}