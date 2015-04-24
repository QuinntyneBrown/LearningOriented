using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LearningOriented.Server.Models;

namespace LearningOriented.Server.Data
{
    public interface IUserRepository: IRepository<User>
    {
        User GetByName(string name);
    }
}
