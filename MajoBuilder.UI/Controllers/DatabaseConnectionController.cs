using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MajoBuilder.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace MajoBuilder.UI.Controllers
{
    [Route("api/[controller]")]
    public class DatabaseConnectionController : Controller
    {
        private readonly MajoBuilderContext _majoBuilderContext;
        public DatabaseConnectionController(MajoBuilderContext majoBuilderContext)
        {
            _majoBuilderContext = majoBuilderContext;
        }
        
        [HttpGet("[action]")]
        public IEnumerable<DatabaseConnection> GetDatabaseConnections()
        {
            return _majoBuilderContext.DatabaseConnection.ToList();
        }

        [HttpGet("[action]")]
        public DatabaseConnection GetDatabaseConnection(Guid databaseConnectionId)
        {
            return _majoBuilderContext.DatabaseConnection.FirstOrDefault(p => p.DatabaseConnectionId == databaseConnectionId);
        }
    }
}
