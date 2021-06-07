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
   XnRestfulResultOfIActionResult,
   XnRestfulResultOfObject,
   } from '../models';

         /**
         * @summary增加用户
         * @param {AddUserInput}[addUserInput]
         */
         export function sysUserAddPost(addUserInput?: AddUserInput, mode: ErrorMessageMode = 'message') {
            const params = {  addUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/add',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary修改用户状态
         * @param {UpdateUserStatusInput}[updateUserStatusInput]
         */
         export function sysUserChangeStatusPost(updateUserStatusInput?: UpdateUserStatusInput, mode: ErrorMessageMode = 'message') {
            const params = {  updateUserStatusInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/changeStatus',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary删除用户
         * @param {DeleteUserInput}[deleteUserInput]
         */
         export function sysUserDeletePost(deleteUserInput?: DeleteUserInput, mode: ErrorMessageMode = 'message') {
            const params = {  deleteUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/delete',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary查看用户
         * @param {number}[id]
         */
         export function sysUserDetailGet(id?: number, mode: ErrorMessageMode = 'message') {
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
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary更新用户
         * @param {UpdateUserInput}[updateUserInput]
         */
         export function sysUserEditPost(updateUserInput?: UpdateUserInput, mode: ErrorMessageMode = 'message') {
            const params = {  updateUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/edit',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary用户导出
         */
         export function sysUserExportGet(mode: ErrorMessageMode = 'message') {
            return defHttp.request<XnRestfulResultOfIActionResult>(
              {
                url: '/sysUser/export',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary授权用户数据范围
         * @param {UpdateUserRoleDataInput}[updateUserRoleDataInput]
         */
         export function sysUserGrantDataPost(updateUserRoleDataInput?: UpdateUserRoleDataInput, mode: ErrorMessageMode = 'message') {
            const params = {  updateUserRoleDataInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/grantData',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary授权用户角色
         * @param {UpdateUserRoleDataInput}[updateUserRoleDataInput]
         */
         export function sysUserGrantRolePost(updateUserRoleDataInput?: UpdateUserRoleDataInput, mode: ErrorMessageMode = 'message') {
            const params = {  updateUserRoleDataInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/grantRole',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary用户导入
         * @param {any}[file]
         */
         export function sysUserImportPost(file?: any, mode: ErrorMessageMode = 'message') {
            const params = {  file  }
            return defHttp.request<void>(
              {
                url: '/sysUser/import',
                method: 'POST',
                headers: {'Content-Type': 'multipart/form-data'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary获取用户拥有数据
         * @param {number}id主键Id
         */
         export function sysUserOwnDataGet(id: number, mode: ErrorMessageMode = 'message') {
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
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary获取用户拥有角色
         * @param {number}id主键Id
         */
         export function sysUserOwnRoleGet(id: number, mode: ErrorMessageMode = 'message') {
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
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary分页查询用户
         * @param {string}[account]账号
         * @param {string}[password]密码
         * @param {string}[nickName]昵称
         * @param {string}[name]姓名
         * @param {string}[avatar]头像
         * @param {string}[birthday]生日
         * @param {number}[sex]性别-男_1、女_2
         * @param {string}[email]邮箱
         * @param {string}[phone]手机
         * @param {string}[tel]电话
         * @param {CommonStatus}[status]状态-正常_0、停用_1、删除_2
         * @param {string}[sysEmpParamId]员工Id
         * @param {string}[sysEmpParamJobNum]工号
         * @param {string}[sysEmpParamOrgId]机构Id
         * @param {string}[sysEmpParamOrgName]机构名称
         * @param {Array<EmpExtOrgPosOutput>}[sysEmpParamExtIds]附属机构
         * @param {Array<number>}[sysEmpParamPosIdList]职位集合
         * @param {CommonStatus}[searchStatus]搜索状态（字典 0正常 1停用 2删除）
         * @param {Array<number>}[grantMenuIdList]
         * @param {Array<number>}[grantRoleIdList]
         * @param {Array<number>}[grantOrgIdList]
         * @param {string}[searchValue]搜索值
         * @param {number}[pageNo]当前页码
         * @param {number}[pageSize]页码容量
         * @param {string}[searchBeginTime]搜索开始时间
         * @param {string}[searchEndTime]搜索结束时间
         * @param {string}[sortField]排序字段
         * @param {string}[sortOrder]排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string}[descStr]降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {Array<Condition>}[searchParameters]复杂查询条件
         */
         export function sysUserPageGet(account?: string, password?: string, nickName?: string, name?: string, avatar?: string, birthday?: string, sex?: number, email?: string, phone?: string, tel?: string, status?: CommonStatus, sysEmpParamId?: string, sysEmpParamJobNum?: string, sysEmpParamOrgId?: string, sysEmpParamOrgName?: string, sysEmpParamExtIds?: Array<EmpExtOrgPosOutput>, sysEmpParamPosIdList?: Array<number>, searchStatus?: CommonStatus, grantMenuIdList?: Array<number>, grantRoleIdList?: Array<number>, grantOrgIdList?: Array<number>, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, searchParameters?: Array<Condition>, mode: ErrorMessageMode = 'message') {
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
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary重置用户密码
         * @param {QueryUserInput}[queryUserInput]
         */
         export function sysUserResetPwdPost(queryUserInput?: QueryUserInput, mode: ErrorMessageMode = 'message') {
            const params = {  queryUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/resetPwd',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary获取用户选择器
         * @param {string}[name]
         */
         export function sysUserSelectorGet(name?: string, mode: ErrorMessageMode = 'message') {
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
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary修改用户头像
         * @param {UploadAvatarInput}[uploadAvatarInput]
         */
         export function sysUserUpdateAvatarPost(uploadAvatarInput?: UploadAvatarInput, mode: ErrorMessageMode = 'message') {
            const params = {  uploadAvatarInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/updateAvatar',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary更新用户信息
         * @param {UpdateUserBaseInfoInput}[updateUserBaseInfoInput]
         */
         export function sysUserUpdateInfoPost(updateUserBaseInfoInput?: UpdateUserBaseInfoInput, mode: ErrorMessageMode = 'message') {
            const params = {  updateUserBaseInfoInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/updateInfo',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary修改用户密码
         * @param {ChangePasswordUserInput}[changePasswordUserInput]
         */
         export function sysUserUpdatePwdPost(changePasswordUserInput?: ChangePasswordUserInput, mode: ErrorMessageMode = 'message') {
            const params = {  changePasswordUserInput  }
            return defHttp.request<void>(
              {
                url: '/sysUser/updatePwd',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }