using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Domain.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(long id);
        Task Add(T entity);
        Task Delete(long id);
        Task Update(T entity);
    }
}
