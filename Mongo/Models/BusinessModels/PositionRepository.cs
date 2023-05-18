﻿using Mongo.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mongo.Models.BusinessModels
{
    public interface PositionRepository : IGenericRepository<Position,string>
    {
        List<Position> pagination(int page, int size, out long totalPage);
        List<Position> searchPagination(string name, int page, int size, out long totalPage);
    }
}
