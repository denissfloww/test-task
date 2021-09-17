using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace server.Infrastructure
{
    public class ServerDbContext : DbContext
    {
        public ServerDbContext(DbContextOptions<ServerDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(e =>
            {
                e.HasKey(user => user.Id)
                    .HasName("PK_Users");
                e.Property(u => u.Id).ValueGeneratedOnAdd();
                e.HasData(new[]
                {
                    new User {Id = 1 ,Email = "ff", MiddleName = "ff", Name = "ff", Password = "222", Surname = "ttt"}
                });
            });
        }

        public DbSet<User> Users { get; set; }
    }
}
