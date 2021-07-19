/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET通用权限管理平台
 * 前后端分离架构，开箱即用，紧随前沿技术。<br/><a href=\'https://gitee.com/zuohuaijun/Admin.NET/\'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { defHttp } from '/@/utils/http/axios';
import { RequestOptions, UploadFileParams } from '/@/utils/http/axios/types';
import { assertParamExists } from '../common';
import {
   XnRestfulResultOfListOfString,
   XnRestfulResultOfString,
   } from '../models';

         /**
         * @summary 获取缓存
         * @param {string}[cacheKey]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysCacheDetailGet(cacheKey?: string, options?: RequestOptions) {
            const params = {  } as any
            if (cacheKey !== undefined) {
                params['cacheKey'] = cacheKey;
            }
            return defHttp.request<XnRestfulResultOfString>(
              {
                url: '/sysCache/detail',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取所有缓存关键字
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysCacheKeyListGet(options?: RequestOptions) {
            return defHttp.request<XnRestfulResultOfListOfString>(
              {
                url: '/sysCache/keyList',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }

         /**
         * @summary 删除指定关键字缓存
         * @param {string}[key]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysCacheRemoveGet(key?: string, options?: RequestOptions) {
            const params = {  } as any
            if (key !== undefined) {
                params['key'] = key;
            }
            return defHttp.request<void>(
              {
                url: '/sysCache/remove',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }
