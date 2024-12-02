using Microsoft.AspNetCore.Mvc;

namespace AngularApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = new List<object>
            {
                new { Id = 1, Name = "Product A", Price = 10.50 },
                new { Id = 2, Name = "Product B", Price = 20.00 }
            };
            return Ok(products);
        }
    }
}
