using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace week1_hello_world.Models
{
    public class Student
    {

        public int id;
        public string name;
        public string email;
        public string phone;

        public Student(int id, string name, string email, string phone)
        {
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
        }
    }
}