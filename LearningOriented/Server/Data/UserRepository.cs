using System.Linq;
using LearningOriented.Server.Models;

namespace LearningOriented.Server.Data
{
    public class UserRepository : EFRepository<User>, IUserRepository
    {
        public UserRepository(BookContext context)
            : base(context)
        {

        }

        public User GetByName(string name)
        {
            return this.DbSet.FirstOrDefault(x => x.Username == name);
        }
    }
}