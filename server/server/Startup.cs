using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Server.Domain.Models;
using Server.Domain.Repositories;
using Server.Domain.Services;
using Server.Infrastructure;

namespace Server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        private readonly string _policyName = "CorsPolicy";

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy(_policyName, builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));

            services.AddControllers();
            services.AddMvc();

            ConfigureDbConnection(services);
            ConfigureInjection(services);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", 
                    new OpenApiInfo
                    {
                        Title = "server", Version = "v1"
                    });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "server v1"
                    ));
            }



            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(_policyName);

            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }

        public void ConfigureDbConnection(IServiceCollection services)
        {
            services.AddEntityFrameworkNpgsql().AddDbContext<ServerDbContext>(opt =>
                opt.UseNpgsql(Configuration.GetConnectionString("DbConnection")));
        }

        public void ConfigureInjection(IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IRepository<User>, UserRepository>();
            services.AddScoped<IUserService, UserService>();
        }
    }
}