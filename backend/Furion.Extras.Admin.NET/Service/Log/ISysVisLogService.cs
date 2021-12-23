using Microsoft.AspNetCore.Mvc;

namespace Furion.Extras.Admin.NET.Service
{
    public interface ISysVisLogService
    {
        Task ClearVisLog();

        Task<PageResult<VisLogOutput>> QueryVisLogPageList([FromQuery] VisLogPageInput input);
    }
}