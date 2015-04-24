namespace LearningOriented.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<LearningOriented.Server.Data.BookContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(LearningOriented.Server.Data.BookContext context)
        {
            UserConfiguration.Seed(context);
            RoleConfiguration.Seed(context);
            AccountConfiguration.Seed(context);
            ProfileConfiguration.Seed(context);
            BookConfiguration.Seed(context);
            CollectionConfiguration.Seed(context);
            FavoriteListConfiguration.Seed(context);
        }
    }
}
