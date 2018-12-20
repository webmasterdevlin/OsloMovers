using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Web.Services
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ApplicationDbContext _context;

        public CustomerRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            return _context.Customers;
        }

        public bool CustomerExists(int id)
        {
            return _context.Customers.Any(c => c.CustomerId == id);
        }

        public async Task<Customer> GetCustomerById (int id)
        {
            return await _context.Customers
                .Where(c => c.CustomerId == id)
                .Include(c => c.Orders)
                .FirstOrDefaultAsync();
        }

        public async Task<Customer> CreateCustomerAsync(Customer customer)
        {
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();
            return customer;
        }

        public async Task<Customer> CreateAdditionalOrderAsync(int id, Order order)
        {
            var customerFromDb = await _context.Customers
                                                .Where(c => c.CustomerId == id)
                                                .Include(c => c.Orders)
                                                .FirstOrDefaultAsync();
            var newOrder = order;
            customerFromDb.Orders.Add(newOrder);
            await _context.SaveChangesAsync();
            return customerFromDb;
        }

        public async Task<Customer> UpdateCustomerAsync(Customer customer)
        {
            _context.Update(customer);
            await _context.SaveChangesAsync();
            return customer;
        }

        public async Task DeleteCustomerAsync(int id)
        {
            _context.Remove(await _context.Customers.FindAsync(id));
            await _context.SaveChangesAsync();
        }
    }
}
