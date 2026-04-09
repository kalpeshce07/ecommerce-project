using System.ComponentModel.DataAnnotations;

namespace ECommerceProject.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        public string CustomerName { get; set; }

        [Required]
        public string Address { get; set; }

        public decimal TotalAmount { get; set; }
        public int UserId {  get; set; }
        public User User { get; set; }

        public List<OrderItem> OrderItems { get; set; }
    }
}
