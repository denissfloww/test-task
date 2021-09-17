using Server.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Domain.Repositories;

namespace Server.Domain.Services
{
    public class UserService: IUserService
    {
        private readonly IRepository<User> _repository;
        public UserService(IRepository<User> repository)
        {
            _repository = repository;
        }

        public Task<IEnumerable<User>> GetAllUsers()
        {
            return _repository.GetAll();
        }

        public Task<User> GetUserById(long id)
        {
            return _repository.GetById(id);
        }

        public void InsertUser(User user)
        {
            _repository.Add(user);
        }

        public void DeleteUser(long id)
        {
            _repository.Delete(id);
        }

        public void UpdateUser(User user)
        {
            _repository.Update(user);
        }

        public IList<User> GetUserByName(string email)
        {
            var users = _repository.GetAll()
                .Result.Where(u => u.Email.Contains(email)).ToList();

            return users;
        }

        public void GetUserByEmail(string email)
        {

        }

        
    }
}
