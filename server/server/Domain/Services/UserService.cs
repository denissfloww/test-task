using Server.Domain.Models;
using Server.Domain.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

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

        public void UpdateUserPassword(long userId, string password)
        {
            var user = _repository.GetById(userId).Result;
            user.Password = password;
            _repository.Update(user);
        }
    }
}
