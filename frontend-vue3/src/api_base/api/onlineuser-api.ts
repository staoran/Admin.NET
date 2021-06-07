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
   XnRestfulResultOfObject,
   } from '../models';

         /**
         * @summary获取在线用户信息
         */
         export function sysOnlineUserListGet(mode: ErrorMessageMode = 'message') {
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysOnlineUser/list',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              {
                errorMessageMode: mode,
              })
         }
