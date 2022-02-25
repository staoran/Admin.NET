using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Furion.Extras.Admin.NET.Service
{
    public interface ISysOpLogService
    {
        Task ClearOpLog();

        Task<PageResult<OpLogOutput>> QueryOpLogPageList([FromQuery] OpLogPageInput input);
    }
}