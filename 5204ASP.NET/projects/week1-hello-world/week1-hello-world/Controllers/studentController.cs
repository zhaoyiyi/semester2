using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using week1_hello_world.Models;

namespace week1_hello_world.Controllers
{
    public class studentController : Controller
    {
        // GET: student
        public ActionResult Index()
        {
            Student stu = new Student(1,"Bob","student@gamil.com","123-123-1234");
            return View(stu);
        }
    }
}