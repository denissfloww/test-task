using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Domain.Models;
using Server.Domain.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Dto;

namespace Server.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;

        public UserController(ILogger<UserController> logger,
            IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet, Route("/users")]
        public Task<IEnumerable<User>> GetAllUsers()
        {
            try
            {
                return _userService.GetAllUsers();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpGet("{id}")]
        public Task<User> GetUserById(long id)
        {
            try
            {
                return _userService.GetUserById(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpPost, Route("/user")]
        public void AddUser(User user)
        {
            try
            {
                _userService.InsertUser(user);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw new Exception(e.Message);
            }
        }

        [HttpDelete, Route("{id}")]
        public void DeleteUser(long id)
        {
            try
            {
                _userService.DeleteUser(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpPut, Route("/user")]
        public void UpdateUser(User user)
        {
            try
            {
                _userService.UpdateUser(user);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpPut, Route("/user/{userId}/password")]
        public void UpdateUserPassword(long userId, ChangePasswordDto passwordDto)
        {
            try
            {
                _userService.UpdateUserPassword(userId, passwordDto.Password);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}