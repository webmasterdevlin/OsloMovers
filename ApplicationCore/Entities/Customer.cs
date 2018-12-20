using System.Collections.Generic;

namespace ApplicationCore.Entities
{
    public class Customer
    {
        public Customer()
        {
            Orders = new HashSet<Order>();
        }

        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public ICollection<Order> Orders { get; set; }
        public bool IsDeleted { get; set; }
    }
}