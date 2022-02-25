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


import { Condition } from './condition';
import { LoginType } from './login-type';
import { YesOrNot } from './yes-or-not';

/**
 * 访问日志参数
 * @export
 * @interface VisLogPageInput
 */
export interface VisLogPageInput {
    /**
     * 搜索值
     * @type {string}
     * @memberof VisLogPageInput
     */
    searchValue?: string | null;
    /**
     * 当前页码
     * @type {number}
     * @memberof VisLogPageInput
     */
    pageNo?: number;
    /**
     * 页码容量
     * @type {number}
     * @memberof VisLogPageInput
     */
    pageSize?: number;
    /**
     * 搜索开始时间
     * @type {string}
     * @memberof VisLogPageInput
     */
    searchBeginTime?: string | null;
    /**
     * 搜索结束时间
     * @type {string}
     * @memberof VisLogPageInput
     */
    searchEndTime?: string | null;
    /**
     * 排序字段
     * @type {string}
     * @memberof VisLogPageInput
     */
    sortField?: string | null;
    /**
     * 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
     * @type {string}
     * @memberof VisLogPageInput
     */
    sortOrder?: string | null;
    /**
     * 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
     * @type {string}
     * @memberof VisLogPageInput
     */
    descStr?: string | null;
    /**
     * 复杂查询条件
     * @type {Array<Condition>}
     * @memberof VisLogPageInput
     */
    searchParameters?: Array<Condition> | null;
    /**
     * 名称
     * @type {string}
     * @memberof VisLogPageInput
     */
    name?: string | null;
    /**
     * 
     * @type {YesOrNot}
     * @memberof VisLogPageInput
     */
    success?: YesOrNot;
    /**
     * 
     * @type {LoginType}
     * @memberof VisLogPageInput
     */
    visType?: LoginType;
}

