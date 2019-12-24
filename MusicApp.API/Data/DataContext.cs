

using Microsoft.EntityFrameworkCore;
using MusicApp.API.Models;

namespace MusicApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base
        (options) {}
        
        public DbSet<Value> Values {get; set;}
        
    }
}