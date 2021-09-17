using Microsoft.EntityFrameworkCore;
using Server.Domain.Models;

namespace Server.Infrastructure
{
    public class ServerDbContext : DbContext
    {
        public ServerDbContext()
        {

        }

        public ServerDbContext(DbContextOptions<ServerDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(e =>
            {
                e.HasIndex(e => e.Email).IsUnique();
                e.HasKey(user => user.Id)
                    .HasName("PK_Users");
                e.Property(u => u.Id).ValueGeneratedOnAdd();
                e.HasData(new[]
                {
                    new User {
                        Id = 1 ,
                        Email = "Robert@test.com",
                        Name = "Robert",
                        Password = "88888888",
                        Surname = "Jack",
                        Role = Enums.UserRoleEnum.Admin
                    },
                    new User {
                        Id = 2 ,
                        Email = "James@admin.com",
                        Name = "James",
                        Password = "88888888",
                        Surname = "Thomas",
                        Role = Enums.UserRoleEnum.Manager
                    },
                    new User {
                        Id = 3 ,
                        Email = "Michel@admin.com",
                        Name = "Michel",
                        Password = "88888888",
                        Surname = "Young",
                        Role = Enums.UserRoleEnum.Worker
                    }
                });
            });        
        }

        public DbSet<User> Users { get; set; }
    }
}
