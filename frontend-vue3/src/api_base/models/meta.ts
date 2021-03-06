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
 * 路由元信息内部类
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     * 路由标题, 用于显示面包屑, 页面标题 *推荐设置
     * @type {string}
     * @memberof Meta
     */
    title?: string | null;
    /**
     * 图标
     * @type {string}
     * @memberof Meta
     */
    icon?: string | null;
    /**
     * 是否可见
     * @type {boolean}
     * @memberof Meta
     */
    show?: boolean;
    /**
     * 如需外部打开，增加：_blank
     * @type {string}
     * @memberof Meta
     */
    target?: string | null;
    /**
     * 内链打开http链接
     * @type {string}
     * @memberof Meta
     */
    link?: string | null;
}


