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
   AddUserInput,
   ChangePasswordUserInput,
   CommonStatus,
   Condition,
   DeleteUserInput,
   EmpExtOrgPosOutput,
   QueryUserInput,
   UpdateUserBaseInfoInput,
   UpdateUserInput,
   UpdateUserRoleDataInput,
   UpdateUserStatusInput,
   UploadAvatarInput,
   UserPageInput,
   XnRestfulResultOfIActionResult,
   XnRestfulResultOfObject,
   } from '../models';

         /**
         * @summary 增加用户
         * @param {AddUserInput}[addUserInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserAddPost(addUserInput?: AddUserInput, options?: RequestOptions) {
            const params = {  ...addUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/add',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 修改用户状态
         * @param {UpdateUserStatusInput}[updateUserStatusInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserChangeStatusPost(updateUserStatusInput?: UpdateUserStatusInput, options?: RequestOptions) {
            const params = {  ...updateUserStatusInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/changeStatus',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 删除用户
         * @param {DeleteUserInput}[deleteUserInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserDeletePost(deleteUserInput?: DeleteUserInput, options?: RequestOptions) {
            const params = {  ...deleteUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/delete',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 查看用户
         * @param {number}[id]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserDetailGet(id?: number, options?: RequestOptions) {
            const params = {  } as any
            if (id !== undefined) {
                params['id'] = id;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysUser/detail',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 更新用户
         * @param {UpdateUserInput}[updateUserInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserEditPost(updateUserInput?: UpdateUserInput, options?: RequestOptions) {
            const params = {  ...updateUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/edit',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 用户导出
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserExportGet(options?: RequestOptions) {
            return defHttp.request<XnRestfulResultOfIActionResult>(
              {
                url: '/sysUser/export',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }

         /**
         * @summary 授权用户数据范围
         * @param {UpdateUserRoleDataInput}[updateUserRoleDataInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserGrantDataPost(updateUserRoleDataInput?: UpdateUserRoleDataInput, options?: RequestOptions) {
            const params = {  ...updateUserRoleDataInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/grantData',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 授权用户角色
         * @param {UpdateUserRoleDataInput}[updateUserRoleDataInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserGrantRolePost(updateUserRoleDataInput?: UpdateUserRoleDataInput, options?: RequestOptions) {
            const params = {  ...updateUserRoleDataInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/grantRole',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

        /**
         * @summary 用户导入
         * @param {UploadFileParams} params 文件信息
         * @param {(progressEvent: ProgressEvent) => void} onUploadProgress 上传进度
         */
         export function sysUserImportPost(params: UploadFileParams, onUploadProgress: (progressEvent: ProgressEvent) => void) {
           return defHttp.uploadFile<void>(
             {
               url: '/sysUser/import',
               onUploadProgress
             },
             params
           )
         }

         /**
         * @summary 获取用户拥有数据
         * @param {number}id 主键Id
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserOwnDataGet(id: number, options?: RequestOptions) {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sysUserOwnDataGet', 'id', id)
            const params = {  } as any
            if (id !== undefined) {
                params['Id'] = id;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysUser/ownData',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取用户拥有角色
         * @param {number}id 主键Id
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserOwnRoleGet(id: number, options?: RequestOptions) {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sysUserOwnRoleGet', 'id', id)
            const params = {  } as any
            if (id !== undefined) {
                params['Id'] = id;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysUser/ownRole',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 分页查询用户
         * @param {UserPageInput}[userPageInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserPage3Post(userPageInput?: UserPageInput, options?: RequestOptions) {
            const params = {  ...userPageInput  }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysUser/page@3',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 分页查询用户
         * @param {string}[account] 账号
         * @param {string}[password] 密码
         * @param {string}[nickName] 昵称
         * @param {string}[name] 姓名
         * @param {string}[avatar] 头像
         * @param {string}[birthday] 生日
         * @param {number}[sex] 性别-男_1、女_2
         * @param {string}[email] 邮箱
         * @param {string}[phone] 手机
         * @param {string}[tel] 电话
         * @param {CommonStatus}[status] 状态-正常_0、停用_1、删除_2
         * @param {string}[sysEmpParamId] 员工Id
         * @param {string}[sysEmpParamJobNum] 工号
         * @param {string}[sysEmpParamOrgId] 机构Id
         * @param {string}[sysEmpParamOrgName] 机构名称
         * @param {Array<EmpExtOrgPosOutput>}[sysEmpParamExtIds] 附属机构
         * @param {Array<number>}[sysEmpParamPosIdList] 职位集合
         * @param {CommonStatus}[searchStatus] 搜索状态（字典 0正常 1停用 2删除）
         * @param {Array<number>}[grantMenuIdList]
         * @param {Array<number>}[grantRoleIdList]
         * @param {Array<number>}[grantOrgIdList]
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
         export function sysUserPageGet(account?: string, password?: string, nickName?: string, name?: string, avatar?: string, birthday?: string, sex?: number, email?: string, phone?: string, tel?: string, status?: CommonStatus, sysEmpParamId?: string, sysEmpParamJobNum?: string, sysEmpParamOrgId?: string, sysEmpParamOrgName?: string, sysEmpParamExtIds?: Array<EmpExtOrgPosOutput>, sysEmpParamPosIdList?: Array<number>, searchStatus?: CommonStatus, grantMenuIdList?: Array<number>, grantRoleIdList?: Array<number>, grantOrgIdList?: Array<number>, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, searchParameters?: Array<Condition>, options?: RequestOptions) {
            const params = {  } as any
            if (account !== undefined) {
                params['Account'] = account;
            }
            if (password !== undefined) {
                params['Password'] = password;
            }
            if (nickName !== undefined) {
                params['NickName'] = nickName;
            }
            if (name !== undefined) {
                params['Name'] = name;
            }
            if (avatar !== undefined) {
                params['Avatar'] = avatar;
            }
            if (birthday !== undefined) {
                params['Birthday'] = (birthday as any instanceof Date) ?
                    (birthday as any).toISOString() :
                    birthday;
            }
            if (sex !== undefined) {
                params['Sex'] = sex;
            }
            if (email !== undefined) {
                params['Email'] = email;
            }
            if (phone !== undefined) {
                params['Phone'] = phone;
            }
            if (tel !== undefined) {
                params['Tel'] = tel;
            }
            if (status !== undefined) {
                params['Status'] = status;
            }
            if (sysEmpParamId !== undefined) {
                params['SysEmpParam.Id'] = sysEmpParamId;
            }
            if (sysEmpParamJobNum !== undefined) {
                params['SysEmpParam.JobNum'] = sysEmpParamJobNum;
            }
            if (sysEmpParamOrgId !== undefined) {
                params['SysEmpParam.OrgId'] = sysEmpParamOrgId;
            }
            if (sysEmpParamOrgName !== undefined) {
                params['SysEmpParam.OrgName'] = sysEmpParamOrgName;
            }
            if (sysEmpParamExtIds) {
                params['SysEmpParam.ExtIds'] = sysEmpParamExtIds;
            }
            if (sysEmpParamPosIdList) {
                params['SysEmpParam.PosIdList'] = sysEmpParamPosIdList;
            }
            if (searchStatus !== undefined) {
                params['SearchStatus'] = searchStatus;
            }
            if (grantMenuIdList) {
                params['GrantMenuIdList'] = grantMenuIdList;
            }
            if (grantRoleIdList) {
                params['GrantRoleIdList'] = grantRoleIdList;
            }
            if (grantOrgIdList) {
                params['GrantOrgIdList'] = grantOrgIdList;
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
                url: '/sysUser/page',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 重置用户密码
         * @param {QueryUserInput}[queryUserInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserResetPwdPost(queryUserInput?: QueryUserInput, options?: RequestOptions) {
            const params = {  ...queryUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/resetPwd',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取用户选择器
         * @param {string}[name]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserSelectorGet(name?: string, options?: RequestOptions) {
            const params = {  } as any
            if (name !== undefined) {
                params['Name'] = name;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysUser/selector',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 修改用户头像
         * @param {UploadAvatarInput}[uploadAvatarInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserUpdateAvatarPost(uploadAvatarInput?: UploadAvatarInput, options?: RequestOptions) {
            const params = {  ...uploadAvatarInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/updateAvatar',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 更新用户信息
         * @param {UpdateUserBaseInfoInput}[updateUserBaseInfoInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserUpdateInfoPost(updateUserBaseInfoInput?: UpdateUserBaseInfoInput, options?: RequestOptions) {
            const params = {  ...updateUserBaseInfoInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/updateInfo',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 修改用户密码
         * @param {ChangePasswordUserInput}[changePasswordUserInput]
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysUserUpdatePwdPost(changePasswordUserInput?: ChangePasswordUserInput, options?: RequestOptions) {
            const params = {  ...changePasswordUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/updatePwd',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }
