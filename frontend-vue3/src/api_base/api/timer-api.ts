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
   AddJobInput,
   Condition,
   DeleteJobInput,
   RequestTypeEnum,
   SpareTimeExecuteTypes,
   SpareTimeTypes,
   StopJobInput,
   UpdateJobInput,
   XnRestfulResultOfObject,
   } from '../models';

         /**
         * @summary增加任务
         * @param {AddJobInput}[addJobInput]
         */
         export function sysTimersAddPost(addJobInput?: AddJobInput, mode: ErrorMessageMode = 'message') {
            const params = {  addJobInput  }
            return defHttp.request<void>(
              {
                url: '/sysTimers/add',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary删除任务
         * @param {DeleteJobInput}[deleteJobInput]
         */
         export function sysTimersDeletePost(deleteJobInput?: DeleteJobInput, mode: ErrorMessageMode = 'message') {
            const params = {  deleteJobInput  }
            return defHttp.request<void>(
              {
                url: '/sysTimers/delete',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary查看任务
         * @param {number}id主键Id
         */
         export function sysTimersDetailGet(id: number, mode: ErrorMessageMode = 'message') {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('sysTimersDetailGet', 'id', id)
            const params = {  } as any
            if (id !== undefined) {
                params['Id'] = id;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysTimers/detail',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary修改任务
         * @param {UpdateJobInput}[updateJobInput]
         */
         export function sysTimersEditPost(updateJobInput?: UpdateJobInput, mode: ErrorMessageMode = 'message') {
            const params = {  updateJobInput  }
            return defHttp.request<void>(
              {
                url: '/sysTimers/edit',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary获取所有本地任务
         */
         export function sysTimersLocalJobListGet(mode: ErrorMessageMode = 'message') {
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/sysTimers/localJobList',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary分页获取任务列表
         * @param {string}[jobName]任务名称
         * @param {boolean}[doOnce]只执行一次
         * @param {boolean}[startNow]立即执行（默认等待启动）
         * @param {SpareTimeExecuteTypes}[executeType]执行类型(并行、列队)
         * @param {number}[interval]执行间隔时间（单位秒）
         * @param {string}[cron]Cron表达式
         * @param {SpareTimeTypes}[timerType]定时器类型
         * @param {string}[requestUrl]请求url
         * @param {string}[requestParameters]请求参数（Post，Put请求用）
         * @param {string}[headers]Headers(可以包含如：Authorization授权认证)  格式：{\&quot;Authorization\&quot;:\&quot;userpassword..\&quot;}
         * @param {RequestTypeEnum}[requestType]请求类型
         * @param {string}[remark]备注
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
         export function sysTimersPageGet(jobName?: string, doOnce?: boolean, startNow?: boolean, executeType?: SpareTimeExecuteTypes, interval?: number, cron?: string, timerType?: SpareTimeTypes, requestUrl?: string, requestParameters?: string, headers?: string, requestType?: RequestTypeEnum, remark?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, searchParameters?: Array<Condition>, mode: ErrorMessageMode = 'message') {
            const params = {  } as any
            if (jobName !== undefined) {
                params['JobName'] = jobName;
            }
            if (doOnce !== undefined) {
                params['DoOnce'] = doOnce;
            }
            if (startNow !== undefined) {
                params['StartNow'] = startNow;
            }
            if (executeType !== undefined) {
                params['ExecuteType'] = executeType;
            }
            if (interval !== undefined) {
                params['Interval'] = interval;
            }
            if (cron !== undefined) {
                params['Cron'] = cron;
            }
            if (timerType !== undefined) {
                params['TimerType'] = timerType;
            }
            if (requestUrl !== undefined) {
                params['RequestUrl'] = requestUrl;
            }
            if (requestParameters !== undefined) {
                params['RequestParameters'] = requestParameters;
            }
            if (headers !== undefined) {
                params['Headers'] = headers;
            }
            if (requestType !== undefined) {
                params['RequestType'] = requestType;
            }
            if (remark !== undefined) {
                params['Remark'] = remark;
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
                url: '/sysTimers/page',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary启动任务
         * @param {AddJobInput}[addJobInput]
         */
         export function sysTimersStartPost(addJobInput?: AddJobInput, mode: ErrorMessageMode = 'message') {
            const params = {  addJobInput  }
            return defHttp.request<void>(
              {
                url: '/sysTimers/start',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary停止任务
         * @param {StopJobInput}[stopJobInput]
         */
         export function sysTimersStopPost(stopJobInput?: StopJobInput, mode: ErrorMessageMode = 'message') {
            const params = {  stopJobInput  }
            return defHttp.request<void>(
              {
                url: '/sysTimers/stop',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }
