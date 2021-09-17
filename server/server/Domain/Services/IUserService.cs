using Server.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Domain.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUserById(long id);
        void InsertUser(User user);
        void DeleteUser(long id);
        void UpdateUser(User user);
    }
}
