using Admin.NET.Application.Entity;
using Furion.DatabaseAccessor;
using Furion.DatabaseAccessor.Extensions;
using Furion.DependencyInjection;
using Furion.DynamicApiController;
using Furion.Extras.Admin.NET;
using Furion.FriendlyException;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;

namespace Admin.NET.Application
{
    /// <summary>
    /// 车辆信息服务
    /// </summary>
    [ApiDescriptionSettings("自己的业务", Name = "Car", Order = 100)]
    public class CarService : ICarService, IDynamicApiController, ITransient
    {
        private readonly IRepository<Car, MasterDbContextLocator> _carRep;

        public CarService(
            IRepository<Car, MasterDbContextLocator> carRep
        )
        {
            _carRep = carRep;
        }

        /// <summary>
        /// 分页查询车辆信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpGet("/Car/page")]
        public async Task<PageResult<CarOutput>> Page([FromQuery] CarInput input)
        {
            var cars = await _carRep.DetachedEntities
                                     .Where(!string.IsNullOrEmpty(input.CarName), u => EF.Functions.Like(u.CarName, $"%{input.CarName.Trim()}%"))
                                     .Where(!string.IsNullOrEmpty(input.CarNo), u => u.CarNo == input.CarNo)
                                     .OrderBy(PageInputOrder.OrderBuilder<CarInput>(input))
                                     .ProjectToType<CarOutput>()
                                     .ToADPagedListAsync(input.PageNo, input.PageSize);

            return cars;
        }

        /// <summary>
        /// 增加车辆信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost("/Car/add")]
        public async Task Add(AddCarInput input)
        {
            var car = input.Adapt<Car>();
            await _carRep.InsertAsync(car);
        }

        /// <summary>
        /// 删除车辆信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost("/Car/delete")]
        public async Task Delete(DeleteCarInput input)
        {
            var car = await _carRep.FirstOrDefaultAsync(u => u.Id == input.Id);
            await _carRep.DeleteAsync(car);
        }

        /// <summary>
        /// 更新车辆信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost("/Car/edit")]
        public async Task Update(UpdateCarInput input)
        {
            var isExist = await _carRep.AnyAsync(u => u.Id == input.Id, false);
            if (!isExist) throw Oops.Oh(ErrorCode.D3000);

            var car = input.Adapt<Car>();
            await _carRep.UpdateAsync(car, ignoreNullValues: true);
        }

        /// <summary>
        /// 获取车辆信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpGet("/Car/detail")]
        public async Task<CarOutput> Get([FromQuery] QueryeCarInput input)
        {
            return (await _carRep.DetachedEntities.FirstOrDefaultAsync(u => u.Id == input.Id)).Adapt<CarOutput>();
        }

        /// <summary>
        /// 获取车辆信息列表
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpGet("/Car/list")]
        public async Task<List<CarOutput>> List([FromQuery] CarInput input)
        {
            return await _carRep.DetachedEntities.ProjectToType<CarOutput>().ToListAsync();
        }

    }
}
