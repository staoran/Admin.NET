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
   AddRoleInput,
   Condition,
   DeleteRoleInput,
   GrantRoleDataInput,
   GrantRoleMenuInput,
   RoleTypeEnum,
   UpdateRoleInput,
   XnRestfulResultOfListOfInt64,
   XnRestfulResultOfObject,
   XnRestfulResultOfSysRole,
   } from '../models';

         /**
         * @summary 增加角色
         * @param {AddRoleInput}[addRoleInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleAddPost(addRoleInput?: AddRoleInput, options?: RequestOptions) {
            const params = {  ...addRoleInput  }
            return defHttp.request<void>(
              {
                url: '/sysRole/add',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 删除角色
         * @param {DeleteRoleInput}[deleteRoleInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleDeletePost(deleteRoleInput?: DeleteRoleInput, options?: RequestOptions) {
            const params = {  ...deleteRoleInput  }
            return defHttp.request<void>(
              {
                url: '/sysRole/delete',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取角色
         * @param {number}id 主键Id
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleDetailGet(id: number, options?: RequestOptions) {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sysRoleDetailGet', 'id', id)
            const params = {  } as any
            if (id !== undefined) {
                params['Id'] = id;
            }
            return defHttp.request<XnRestfulResultOfSysRole>(
              {
                url: '/sysRole/detail',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 角色下拉（用于授权角色时选择）
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleDropDownGet(options?: RequestOptions) {
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysRole/dropDown',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }

         /**
         * @summary 更新角色
         * @param {UpdateRoleInput}[updateRoleInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleEditPost(updateRoleInput?: UpdateRoleInput, options?: RequestOptions) {
            const params = {  ...updateRoleInput  }
            return defHttp.request<void>(
              {
                url: '/sysRole/edit',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 授权角色数据范围
         * @param {GrantRoleDataInput}[grantRoleDataInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleGrantDataPost(grantRoleDataInput?: GrantRoleDataInput, options?: RequestOptions) {
            const params = {  ...grantRoleDataInput  }
            return defHttp.request<void>(
              {
                url: '/sysRole/grantData',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 授权角色菜单
         * @param {GrantRoleMenuInput}[grantRoleMenuInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleGrantMenuPost(grantRoleMenuInput?: GrantRoleMenuInput, options?: RequestOptions) {
            const params = {  ...grantRoleMenuInput  }
            return defHttp.request<void>(
              {
                url: '/sysRole/grantMenu',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取角色拥有数据Id集合
         * @param {number}id 主键Id
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleOwnDataGet(id: number, options?: RequestOptions) {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sysRoleOwnDataGet', 'id', id)
            const params = {  } as any
            if (id !== undefined) {
                params['Id'] = id;
            }
            return defHttp.request<XnRestfulResultOfListOfInt64>(
              {
                url: '/sysRole/ownData',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取角色拥有菜单Id集合
         * @param {number}id 主键Id
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysRoleOwnMenuGet(id: number, options?: RequestOptions) {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sysRoleOwnMenuGet', 'id', id)
            const params = {  } as any
            if (id !== undefined) {
                params['Id'] = id;
            }
            return defHttp.request<XnRestfulResultOfListOfInt64>(
              {
                url: '/sysRole/ownMenu',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 分页获取角色列表
         * @param {RoleTypeEnum}roleType 角色类型-集团角色_0、加盟商角色_1、门店角色_2
         * @param {string}[name] 名称
         * @param {string}[code] 编码
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
         export function sysRolePageGet(roleType: RoleTypeEnum, name?: string, code?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, searchParameters?: Array<Condition>, options?: RequestOptions) {
            // verify required parameter 'roleType' is not null or undefined
            assertParamExists('sysRolePageGet', 'roleType', roleType)
            const params = {  } as any
            if (roleType !== undefined) {
                params['RoleType'] = roleType;
            }
            if (name !== undefined) {
                params['Name'] = name;
            }
            if (code !== undefined) {
                params['Code'] = code;
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
                url: '/sysRole/page',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }