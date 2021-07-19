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

/**
 * 字典类型参数
 * @export
 * @interface DictTypePageInput
 */
export interface DictTypePageInput {
    /**
     * 搜索值
     * @type {string}
     * @memberof DictTypePageInput
     */
    searchValue?: string | null;
    /**
     * 当前页码
     * @type {number}
     * @memberof DictTypePageInput
     */
    pageNo?: number;
    /**
     * 页码容量
     * @type {number}
     * @memberof DictTypePageInput
     */
    pageSize?: number;
    /**
     * 搜索开始时间
     * @type {string}
     * @memberof DictTypePageInput
     */
    searchBeginTime?: string | null;
    /**
     * 搜索结束时间
     * @type {string}
     * @memberof DictTypePageInput
     */
    searchEndTime?: string | null;
    /**
     * 排序字段
     * @type {string}
     * @memberof DictTypePageInput
     */
    sortField?: string | null;
    /**
     * 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
     * @type {string}
     * @memberof DictTypePageInput
     */
    sortOrder?: string | null;
    /**
     * 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
     * @type {string}
     * @memberof DictTypePageInput
     */
    descStr?: string | null;
    /**
     * 复杂查询条件
     * @type {Array<Condition>}
     * @memberof DictTypePageInput
     */
    searchParameters?: Array<Condition> | null;
    /**
     * 名称
     * @type {string}
     * @memberof DictTypePageInput
     */
    name?: string | null;
    /**
     * 编码
     * @type {string}
     * @memberof DictTypePageInput
     */
    code?: string | null;
}


