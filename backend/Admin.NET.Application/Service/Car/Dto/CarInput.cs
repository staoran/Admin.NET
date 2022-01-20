using Furion.Extras.Admin.NET;
using Furion.Extras.Admin.NET.Service;
using System.ComponentModel.DataAnnotations;

namespace Admin.NET.Application
{
    /// <summary>
    /// 车辆信息输入参数
    /// </summary>
    public class CarInput : PageInputBase
    {
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string CarName { get; set; }

        /// <summary>
        /// 号码
        /// </summary>
        public virtual string CarNo { get; set; }
    }

    public class AddCarInput : CarInput
    {
    }

    public class DeleteCarInput : BaseId
    {
    }

    public class UpdateCarInput : CarInput
    {
        /// <summary>
        /// Id主键
        /// </summary>
        [Required(ErrorMessage = "Id主键不能为空")]
        public long Id { get; set; }
    }

    public class QueryeCarInput : BaseId
    {
    }
}