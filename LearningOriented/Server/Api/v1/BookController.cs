using System.Web.Http;
using WebApi.OutputCache.V2;

namespace LearningOriented.Server.Api.v1
{
    public class BookController : ApiController
    {
        public BookController()
        {
            
        }

        [CacheOutput(ServerTimeSpan = 50)]
        public IHttpActionResult GetAll()
        {
            return Ok();
        }
    }
}
