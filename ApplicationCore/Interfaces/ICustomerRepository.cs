using System.Collections.Generic;
using System.Threading.Tasks;
using ApplicationCore.Entities;

namespace ApplicationCore.Interfaces
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAllCustomers();

        bool CustomerExists(int id);

        Task<Customer> GetCustomerById(int id);

        Task<Customer> CreateCustomerAsync(Customer customer);

        Task<Customer> CreateAdditionalOrderAsync(int id, Order order);

        Task<Customer> UpdateCustomerAsync(Customer customer);

        Task DeleteCustomerAsync(int id);
    }
}