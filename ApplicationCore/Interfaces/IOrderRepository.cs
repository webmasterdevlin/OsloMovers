using System.Collections.Generic;
using System.Threading.Tasks;
using ApplicationCore.Entities;

namespace ApplicationCore.Interfaces
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetAllOrders();

        bool OrderExists(int id);

        Task<Order> GetOrderByIdAsync(int id);

        Task<Order> CreateOrderAsync(Order order);

        Task<Order> UpdateOrderAsync(Order order);

        Task DeleteOrderAsync(int id);
    }
}