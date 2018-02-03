using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MajoBuilder.Data.Models
{
    public partial class MajoBuilderContext
    {
        public MajoBuilderContext(DbContextOptions<MajoBuilderContext> options) : base(options)
        { }
    }
}
