using Microsoft.Practices.Unity;
using System.Web.Http;
using LearningOriented.Server.Config;
using LearningOriented.Server.Data;
using LearningOriented.Server.Models;
using LearningOriented.Server.Services;
using LearningOriented.Server.Services.Contracts;
using Unity.WebApi;

namespace LearningOriented.Server.StartUp
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = GetContainer();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }

        public static UnityContainer GetContainer()
        {
            var container = new UnityContainer();

            container.RegisterType<IRepository<Book>, LearningOriented.Server.Data.EFRepository<Book>>();
            container.RegisterType<IUserRepository, LearningOriented.Server.Data.UserRepository>();

            container.RegisterType<LearningOriented.Server.Data.BookContext>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<IEncryptionService, EncryptionService>();

            return container;
        }

    }
}