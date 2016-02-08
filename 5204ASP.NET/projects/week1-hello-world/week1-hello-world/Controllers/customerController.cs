using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using week1_hello_world.Models;

namespace week1_hello_world.Controllers
{
    public class customerController : Controller
    {
        // GET: customer
        public ActionResult Index()
        {
            Customer cust = new Customer();
            cust.Account = 123.45;
            cust.CustomerCode = 1;
            cust.CustomerName = "Customer 1";


            return View(cust);
        }
    }
}