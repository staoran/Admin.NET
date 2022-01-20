namespace Admin.NET.Application
{
    /// <summary>
    /// 车辆信息输出参数
    /// </summary>
    public class CarDto
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string CarName { get; set; }

        /// <summary>
        /// 号码
        /// </summary>
        public string CarNo { get; set; }

        /// <summary>
        /// Id主键
        /// </summary>
        public long Id { get; set; }
    }
}