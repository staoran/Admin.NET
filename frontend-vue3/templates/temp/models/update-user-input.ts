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


import { EmpOutput2 } from './emp-output2';

/**
 * 
 * @export
 * @interface UpdateUserInput
 */
export interface UpdateUserInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof UpdateUserInput
     */
    id: number;
    /**
     * 账号
     * @type {string}
     * @memberof UpdateUserInput
     */
    account: string;
    /**
     * 昵称
     * @type {string}
     * @memberof UpdateUserInput
     */
    nickName: string;
    /**
     * 姓名
     * @type {string}
     * @memberof UpdateUserInput
     */
    name: string;
    /**
     * 生日
     * @type {string}
     * @memberof UpdateUserInput
     */
    birthday?: string | null;
    /**
     * 性别-男_1、女_2
     * @type {number}
     * @memberof UpdateUserInput
     */
    sex?: number;
    /**
     * 邮箱
     * @type {string}
     * @memberof UpdateUserInput
     */
    email: string;
    /**
     * 手机
     * @type {string}
     * @memberof UpdateUserInput
     */
    phone: string;
    /**
     * 电话
     * @type {string}
     * @memberof UpdateUserInput
     */
    tel?: string | null;
    /**
     * 
     * @type {EmpOutput2}
     * @memberof UpdateUserInput
     */
    sysEmpParam?: EmpOutput2;
}


