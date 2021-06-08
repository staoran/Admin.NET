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
   AddMenuInput,
   ChangeAppMenuInput,
   DeleteMenuInput,
   QueryMenuInput,
   UpdateMenuInput,
   XnRestfulResultOfListOfAntDesignTreeNode,
   XnRestfulResultOfObject,
   } from '../models';

         /**
         * @summary 增加系统菜单
         * @param {AddMenuInput}[addMenuInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuAddPost(addMenuInput?: AddMenuInput, options?: RequestOptions) {
            const params = {  ...addMenuInput  }
            return defHttp.request<void>(
              {
                url: '/sysMenu/add',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 根据系统应用切换菜单
         * @param {ChangeAppMenuInput}[changeAppMenuInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuChangePost(changeAppMenuInput?: ChangeAppMenuInput, options?: RequestOptions) {
            const params = {  ...changeAppMenuInput  }
            return defHttp.request<XnRestfulResultOfListOfAntDesignTreeNode>(
              {
                url: '/sysMenu/change',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 删除系统菜单
         * @param {DeleteMenuInput}[deleteMenuInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuDeletePost(deleteMenuInput?: DeleteMenuInput, options?: RequestOptions) {
            const params = {  ...deleteMenuInput  }
            return defHttp.request<void>(
              {
                url: '/sysMenu/delete',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取系统菜单
         * @param {QueryMenuInput}[queryMenuInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuDetailPost(queryMenuInput?: QueryMenuInput, options?: RequestOptions) {
            const params = {  ...queryMenuInput  }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysMenu/detail',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 更新系统菜单
         * @param {UpdateMenuInput}[updateMenuInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuEditPost(updateMenuInput?: UpdateMenuInput, options?: RequestOptions) {
            const params = {  ...updateMenuInput  }
            return defHttp.request<void>(
              {
                url: '/sysMenu/edit',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 系统菜单列表（树表）
         * @param {string}[name] 名称
         * @param {string}[application] 应用分类（应用编码）
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuListGet(name?: string, application?: string, options?: RequestOptions) {
            const params = {  } as any
            if (name !== undefined) {
                params['Name'] = name;
            }
            if (application !== undefined) {
                params['Application'] = application;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysMenu/list',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取系统菜单树，用于给角色授权时选择
         * @param {string}[application] 应用分类（应用编码）
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuTreeForGrantGet(application?: string, options?: RequestOptions) {
            const params = {  } as any
            if (application !== undefined) {
                params['Application'] = application;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysMenu/treeForGrant',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取系统菜单树，用于新增、编辑时选择上级节点
         * @param {string}[application] 应用分类（应用编码）
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function sysMenuTreeGet(application?: string, options?: RequestOptions) {
            const params = {  } as any
            if (application !== undefined) {
                params['Application'] = application;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysMenu/tree',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              options
            )
         }
