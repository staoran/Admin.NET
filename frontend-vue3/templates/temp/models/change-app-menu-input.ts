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


import { MenuOpenType } from './menu-open-type';
import { MenuType } from './menu-type';
import { MenuWeight } from './menu-weight';

/**
 * 
 * @export
 * @interface ChangeAppMenuInput
 */
export interface ChangeAppMenuInput {
    /**
     * 应用编码
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    application: string;
    /**
     * 父Id
     * @type {number}
     * @memberof ChangeAppMenuInput
     */
    pid?: number;
    /**
     * 名称
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    name?: string | null;
    /**
     * 编码
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    code?: string | null;
    /**
     * 
     * @type {MenuType}
     * @memberof ChangeAppMenuInput
     */
    type?: MenuType;
    /**
     * 图标
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    icon?: string | null;
    /**
     * 路由地址
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    router?: string | null;
    /**
     * 组件地址
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    component?: string | null;
    /**
     * 权限标识
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    permission?: string | null;
    /**
     * 
     * @type {MenuOpenType}
     * @memberof ChangeAppMenuInput
     */
    openType?: MenuOpenType;
    /**
     * 是否可见（Y-是，N-否）
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    visible?: string | null;
    /**
     * 内链地址
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    link?: string | null;
    /**
     * 重定向地址
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    redirect?: string | null;
    /**
     * 
     * @type {MenuWeight}
     * @memberof ChangeAppMenuInput
     */
    weight?: MenuWeight;
    /**
     * 排序
     * @type {number}
     * @memberof ChangeAppMenuInput
     */
    sort?: number;
    /**
     * 备注
     * @type {string}
     * @memberof ChangeAppMenuInput
     */
    remark?: string | null;
}

