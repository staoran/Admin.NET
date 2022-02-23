﻿namespace Furion.Extras.Admin.NET
{
    /// <summary>
    /// 禁用操作日志
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method | AttributeTargets.Property)]
    public class DisableOpLogAttribute : Attribute
    {
    }
}