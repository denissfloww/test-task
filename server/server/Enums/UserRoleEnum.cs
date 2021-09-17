using System.ComponentModel;

namespace Server.Enums
{
    public enum UserRoleEnum
    {
        [Description("Администратор")]
        Admin = 1,

        [Description("Менеджер")]
        Manager = 2,

        [Description("Сотрудник")]
        Worker = 3
    }
}
