using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using LearningOriented.Server.OAuth2;
using LearningOriented.Server.Services.Contracts;
using Microsoft.Owin.Cors;
using Microsoft.Practices.Unity;
using Owin;

[assembly: OwinStartup(typeof(LearningOriented.Server.StartUp.OwinStartUp))]

namespace LearningOriented.Server.StartUp
{
    public class OwinStartUp
    {
        public void Configuration(IAppBuilder app)
        {
            var identityService = UnityConfig.GetContainer().Resolve<IIdentityService>();
            app.UseOAuthAuthorizationServer(new OAuthOptions(identityService));
            app.UseJwtBearerAuthentication(new JwtOptions());
            app.UseCors(CorsOptions.AllowAll);
        }
    }
}
