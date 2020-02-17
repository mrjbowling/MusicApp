using System.Threading.Tasks;
using MusicApp.API.Models;
using System.Collections.Generic;

namespace MusicApp.API.Data
{
    public interface IMusicRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}