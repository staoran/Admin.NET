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
 * RESTful风格---XIAONUO返回格式
 * @export
 * @interface XnRestfulResultOfString
 */
export interface XnRestfulResultOfString {
    /**
     * 执行成功
     * @type {boolean}
     * @memberof XnRestfulResultOfString
     */
    success?: boolean;
    /**
     * 状态码
     * @type {number}
     * @memberof XnRestfulResultOfString
     */
    code?: number | null;
    /**
     * 错误信息
     * @type {any}
     * @memberof XnRestfulResultOfString
     */
    message?: any | null;
    /**
     * 数据
     * @type {string}
     * @memberof XnRestfulResultOfString
     */
    data?: string | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof XnRestfulResultOfString
     */
    extras?: any | null;
    /**
     * 时间戳
     * @type {number}
     * @memberof XnRestfulResultOfString
     */
    timestamp?: number;
}


