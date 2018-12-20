using System.Collections.Generic;
using ApplicationCore.Entities;

namespace ApplicationCore.Dtos
{
    public class CustomerDto
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}