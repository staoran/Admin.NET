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
   Condition,
   DeleteOrgInput,
   OrgAddInput,
   OrgTypeEnum,
   UpdateOrgInput,
   XnRestfulResultOfListOfOrgOutput,
   XnRestfulResultOfObject,
   XnRestfulResultOfSysOrg,
   } from '../models';

         /**
         * @summary 增加组织机构
         * @param {OrgAddInput}[orgAddInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysOrgAddPost(orgAddInput?: OrgAddInput, options?: RequestOptions) {
            const params = {  ...orgAddInput  }
            return defHttp.request<void>(
              {
                url: '/sysOrg/add',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 删除组织机构
         * @param {DeleteOrgInput}[deleteOrgInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysOrgDeletePost(deleteOrgInput?: DeleteOrgInput, options?: RequestOptions) {
            const params = {  ...deleteOrgInput  }
            return defHttp.request<void>(
              {
                url: '/sysOrg/delete',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取组织机构信息
         * @param {string}id 机构Id
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysOrgDetailGet(id: string, options?: RequestOptions) {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sysOrgDetailGet', 'id', id)
            const params = {  } as any
            if (id !== undefined) {
                params['Id'] = id;
            }
            return defHttp.request<XnRestfulResultOfSysOrg>(
              {
                url: '/sysOrg/detail',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 更新组织机构
         * @param {UpdateOrgInput}[updateOrgInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysOrgEditPost(updateOrgInput?: UpdateOrgInput, options?: RequestOptions) {
            const params = {  ...updateOrgInput  }
            return defHttp.request<void>(
              {
                url: '/sysOrg/edit',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取组织机构列表
         * @param {string}[pid] 父Id
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysOrgListGet(pid?: string, options?: RequestOptions) {
            const params = {  } as any
            if (pid !== undefined) {
                params['Pid'] = pid;
            }
            return defHttp.request<XnRestfulResultOfListOfOrgOutput>(
              {
                url: '/sysOrg/list',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 分页查询组织机构
         * @param {OrgTypeEnum}orgType 机构类型-品牌_1、总店(加盟/直营)_2、直营店_3、加盟店_4
         * @param {string}[id] 
         * @param {string}[pid] 父Id
         * @param {string}[name] 名称
         * @param {string}[searchValue] 搜索值
         * @param {number}[pageNo] 当前页码
         * @param {number}[pageSize] 页码容量
         * @param {string}[searchBeginTime] 搜索开始时间
         * @param {string}[searchEndTime] 搜索结束时间
         * @param {string}[sortField] 排序字段
         * @param {string}[sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string}[descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {Array<Condition>}[searchParameters] 复杂查询条件
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysOrgPageGet(orgType: OrgTypeEnum, id?: string, pid?: string, name?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, searchParameters?: Array<Condition>, options?: RequestOptions) {
            // verify required parameter 'orgType' is not null or undefined
            assertParamExists('sysOrgPageGet', 'orgType', orgType)
            const params = {  } as any
            if (orgType !== undefined) {
                params['OrgType'] = orgType;
            }
            if (id !== undefined) {
                params['Id'] = id;
            }
            if (pid !== undefined) {
                params['Pid'] = pid;
            }
            if (name !== undefined) {
                params['Name'] = name;
            }
            if (searchValue !== undefined) {
                params['SearchValue'] = searchValue;
            }
            if (pageNo !== undefined) {
                params['PageNo'] = pageNo;
            }
            if (pageSize !== undefined) {
                params['PageSize'] = pageSize;
            }
            if (searchBeginTime !== undefined) {
                params['SearchBeginTime'] = searchBeginTime;
            }
            if (searchEndTime !== undefined) {
                params['SearchEndTime'] = searchEndTime;
            }
            if (sortField !== undefined) {
                params['SortField'] = sortField;
            }
            if (sortOrder !== undefined) {
                params['SortOrder'] = sortOrder;
            }
            if (descStr !== undefined) {
                params['DescStr'] = descStr;
            }
            if (searchParameters) {
                params['SearchParameters'] = searchParameters;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysOrg/page',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取组织机构树
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysOrgTreeGet(options?: RequestOptions) {
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysOrg/tree',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }
