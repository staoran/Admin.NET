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



/**
 * 职位参数
 * @export
 * @interface PosInput
 */
export interface PosInput {
    /**
     * 名称
     * @type {string}
     * @memberof PosInput
     */
    name?: string | null;
    /**
     * 编码
     * @type {string}
     * @memberof PosInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof PosInput
     */
    sort?: number;
    /**
     * 备注
     * @type {string}
     * @memberof PosInput
     */
    remark?: string | null;
    /**
     * 状态（字典 0正常 1停用 2删除）
     * @type {number}
     * @memberof PosInput
     */
    status?: number;
    /**
     * 当前页码
     * @type {number}
     * @memberof PosInput
     */
    pageNo?: number;
    /**
     * 页码容量
     * @type {number}
     * @memberof PosInput
     */
    pageSize?: number;
}

