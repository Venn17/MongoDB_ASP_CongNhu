﻿using Mongo.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mongo.Models.BusinessModels
{
    public interface DepartmentRepository : IGenericRepository<Department,string>
    {
        List<Department> pagination(int page, int size, out long totalPage);
        List<Department> searchPagination(string name, int page, int size, out long totalPage);
    }
}
