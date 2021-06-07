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
         * @summary通过实体字段类型获取相关集合（目前仅支持枚举类型）
         * @param {string}entityName实体名称
         * @param {string}fieldName字段名称
         */
         export function sysEnumDataListByFiledGet(entityName: string, fieldName: string, mode: ErrorMessageMode = 'message') {
            // verify required parameter 'entityName' is not null or undefined
            assertParamExists('sysEnumDataListByFiledGet', 'entityName', entityName)
            const params = {  } as any
            // verify required parameter 'fieldName' is not null or undefined
            assertParamExists('sysEnumDataListByFiledGet', 'fieldName', fieldName)
            if (entityName !== undefined) {
                params['EntityName'] = entityName;
            }
            if (fieldName !== undefined) {
                params['FieldName'] = fieldName;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysEnumData/listByFiled',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary通过枚举类型获取枚举值集合
         * @param {string}enumName枚举类型名称
         */
         export function sysEnumDataListGet(enumName: string, mode: ErrorMessageMode = 'message') {
            // verify required parameter 'enumName' is not null or undefined
            assertParamExists('sysEnumDataListGet', 'enumName', enumName)
            const params = {  } as any
            if (enumName !== undefined) {
                params['EnumName'] = enumName;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysEnumData/list',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }
