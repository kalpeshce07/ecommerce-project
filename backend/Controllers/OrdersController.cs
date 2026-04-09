using ECommerceProject.Data;
using ECommerceProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
namespace ECommerceProject.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;
        public OrdersController(AppDbContext context) {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> CreateOrder(Order order)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            order.UserId = userId;
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return Ok(order);
        }
        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var Orders =await _context.Orders.Include(O => O.OrderItems)
                .Where(O=>O.UserId==userId)
                  .OrderByDescending(O => O.Id)
                  .ToListAsync();
            return Ok(Orders);
        }
        
    }
}
