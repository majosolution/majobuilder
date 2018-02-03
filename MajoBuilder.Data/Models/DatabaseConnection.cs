using System;
using System.Collections.Generic;

namespace MajoBuilder.Data.Models
{
    public partial class DatabaseConnection
    {
        public Guid DatabaseConnectionId { get; set; }
        public string DatabaseConnectionName { get; set; }
        public string DatabaseConnectionString { get; set; }
    }
}
