using System;
using ApplicationCore.Entities;

namespace ApplicationCore.Dtos
{
    public class OrderDto
    {
        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public string OrderType { get; set; }
        public string MovingFrom { get; set; }
        public string MovingTo { get; set; }
        public DateTime MovedDate { get; set; }
        public string Note { get; set; }
        public Customer Customer { get; set; }
    }
}