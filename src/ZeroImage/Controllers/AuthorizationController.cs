using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;

namespace ZeroImage.Controllers
{
    [Route("api/authorization")]
    public class AuthorizationController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Json(new Test());
        }
    }

    public class Test
    {
        public string Name = "baba";
    }
}
