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
 * 系统应用参数
 * @export
 * @interface AppOutput
 */
export interface AppOutput {
    /**
     * 应用Id
     * @type {number}
     * @memberof AppOutput
     */
    id?: number;
    /**
     * 名称
     * @type {string}
     * @memberof AppOutput
     */
    name?: string | null;
    /**
     * 编码
     * @type {string}
     * @memberof AppOutput
     */
    code?: string | null;
    /**
     * 是否默认
     * @type {string}
     * @memberof AppOutput
     */
    active?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AppOutput
     */
    sort?: number;
}

