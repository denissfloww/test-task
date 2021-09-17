using Server.Domain.Models;
using Server.Infrastructure;

namespace Server.Domain.Repositories
{
    public class UserRepository: Repository<User, ServerDbContext>
    {
        public UserRepository(ServerDbContext context): base(context)
        {

        }
    }
}
