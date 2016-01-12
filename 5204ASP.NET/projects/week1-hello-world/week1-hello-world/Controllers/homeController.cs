using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace week1_hello_world.Controllers
{
    public class homeController : Controller
    {
        // GET: home
        public ActionResult Index()
        {
            ViewBag.message = DateTime.Now.ToString();
            //ViewData["message"] = DateTime.Now.ToString();

            ViewBag.Countries = new List<string>()
            {
                "Canada",
                "China",
                "USA",
                "India"
            };

            return View();
        }
    }
}