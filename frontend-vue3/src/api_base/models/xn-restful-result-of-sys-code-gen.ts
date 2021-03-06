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


import { SysCodeGen } from './sys-code-gen';

/**
 * RESTful风格---XIAONUO返回格式
 * @export
 * @interface XnRestfulResultOfSysCodeGen
 */
export interface XnRestfulResultOfSysCodeGen {
    /**
     * 执行成功
     * @type {boolean}
     * @memberof XnRestfulResultOfSysCodeGen
     */
    success?: boolean;
    /**
     * 状态码
     * @type {number}
     * @memberof XnRestfulResultOfSysCodeGen
     */
    code?: number | null;
    /**
     * 错误信息
     * @type {any}
     * @memberof XnRestfulResultOfSysCodeGen
     */
    message?: any | null;
    /**
     * 
     * @type {SysCodeGen}
     * @memberof XnRestfulResultOfSysCodeGen
     */
    data?: SysCodeGen;
    /**
     * 附加数据
     * @type {any}
     * @memberof XnRestfulResultOfSysCodeGen
     */
    extras?: any | null;
    /**
     * 时间戳
     * @type {number}
     * @memberof XnRestfulResultOfSysCodeGen
     */
    timestamp?: number;
}


