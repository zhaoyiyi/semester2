using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using week2.Models;

namespace week2.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            Employee employee = new Employee();
            employee = employee.getEmployee();
            /*
            employee.EmployeeId = 1;
            employee.City = "Toronto";
            employee.EmployeeName = "Employee1";
            employee.Gender = "male";
            */
            return View(employee);
        }
    }
}