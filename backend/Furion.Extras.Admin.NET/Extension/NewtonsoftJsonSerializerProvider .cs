﻿using Furion.DependencyInjection;
using Furion.JsonSerialization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Furion.Extras.Admin.NET.Extension
{
    /// <summary>
    /// 自定义序列化提供器Newtonsoft
    /// </summary>
    public class NewtonsoftJsonSerializerProvider : IJsonSerializerProvider, ISingleton
    {
        /// <summary>
        /// 序列化对象
        /// </summary>
        /// <param name="value"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        public string Serialize(object value, object jsonSerializerOptions = null)
        {
            return JsonConvert.SerializeObject(value, (jsonSerializerOptions ?? GetSerializerOptions()) as JsonSerializerSettings);
        }

        /// <summary>
        /// 反序列化字符串
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="json"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        public T Deserialize<T>(string json, object jsonSerializerOptions = null)
        {
            return JsonConvert.DeserializeObject<T>(json, (jsonSerializerOptions ?? GetSerializerOptions()) as JsonSerializerSettings);
        }

        /// <summary>
        /// 返回读取全局配置的 JSON 选项
        /// </summary>
        /// <returns></returns>
        public object GetSerializerOptions()
        {
            return App.GetOptions<MvcNewtonsoftJsonOptions>()?.SerializerSettings;
        }
    }
}