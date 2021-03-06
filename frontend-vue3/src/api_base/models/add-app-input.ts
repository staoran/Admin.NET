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


import { CommonStatus } from './common-status';

/**
 * 
 * @export
 * @interface AddAppInput
 */
export interface AddAppInput {
    /**
     * 名称
     * @type {string}
     * @memberof AddAppInput
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof AddAppInput
     */
    code: string;
    /**
     * 是否默认激活（Y-是，N-否）,只能有一个系统默认激活  用户登录后默认展示此系统菜单
     * @type {string}
     * @memberof AddAppInput
     */
    active?: string | null;
    /**
     * 
     * @type {CommonStatus}
     * @memberof AddAppInput
     */
    status?: CommonStatus;
    /**
     * 排序
     * @type {number}
     * @memberof AddAppInput
     */
    sort?: number;
}


