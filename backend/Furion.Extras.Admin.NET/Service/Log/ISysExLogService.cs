using Microsoft.AspNetCore.Mvc;

namespace Furion.Extras.Admin.NET.Service
{
    public interface ISysExLogService
    {
        Task ClearExLog();

        Task<PageResult<ExLogOutput>> QueryExLogPageList([FromQuery] ExLogPageInput input);
    }
}