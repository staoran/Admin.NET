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
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import { assertParamExists } from '../common';
import {
   XnRestfulResultOfListOfString,
   XnRestfulResultOfString,
   } from '../models';

         /**
         * @summary获取缓存
         * @param {string}[cacheKey]
         */
         export function sysCacheDetailGet(cacheKey?: string, mode: ErrorMessageMode = 'message') {
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
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary获取所有缓存关键字
         */
         export function sysCacheKeyListGet(mode: ErrorMessageMode = 'message') {
            return defHttp.request<XnRestfulResultOfListOfString>(
              {
                url: '/sysCache/keyList',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary删除指定关键字缓存
         * @param {string}[key]
         */
         export function sysCacheRemoveGet(key?: string, mode: ErrorMessageMode = 'message') {
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
              {
                errorMessageMode: mode,
              })
         }