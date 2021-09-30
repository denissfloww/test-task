using System.ComponentModel;

namespace Server.Enums
{
    public enum UserRoleEnum
    {
        [Description("Администратор")]
        Admin,

        [Description("Менеджер")]
        Manager,

        [Description("Сотрудник")]
        Worker
    }
}
