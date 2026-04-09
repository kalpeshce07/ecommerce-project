using ECommerceProject.Data;
using ECommerceProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Eventing.Reader;

namespace ECommerceProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ProductsController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            try
            {
                var Product = await _context.Products.FindAsync(id);

                if (Product == null)

                    return NotFound();
                else
                    return Ok(Product);


            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [Authorize(Roles ="Admin")]
        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)
        {
            try
            {
                _context.Products.Add(product);
                await _context.SaveChangesAsync();
                return Ok(product);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int Id)
        {
            try
            {
                var product = await _context.Products.FindAsync(Id);
                if (product == null)
                    return NotFound();
                else
                {
                    _context.Entry(product).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return Ok(product);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int Id)
        {
            try
            {
                var product =await _context.Products.FindAsync(Id);
                if(product == null) 
                    return NotFound();
                else
                {
                    _context.Products.Remove(product);
                    await _context.SaveChangesAsync();
                    return Ok();
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
