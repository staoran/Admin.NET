using Furion.Extras.Admin.NET;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Admin.NET.Application
{
    public interface ICarService
    {
        Task Add(AddCarInput input);
        Task Delete(DeleteCarInput input);
        Task<CarOutput> Get([FromQuery] QueryeCarInput input);
        Task<List<CarOutput>> List([FromQuery] CarInput input);
        Task<PageResult<CarOutput>> Page([FromQuery] CarInput input);
        Task Update(UpdateCarInput input);
    }
}