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


import { SysOrg } from './sys-org';
import { SysRole } from './sys-role';

/**
 * 角色数据范围表
 * @export
 * @interface SysRoleDataScope
 */
export interface SysRoleDataScope {
    /**
     * 角色Id
     * @type {number}
     * @memberof SysRoleDataScope
     */
    sysRoleId?: number;
    /**
     * 
     * @type {SysRole}
     * @memberof SysRoleDataScope
     */
    sysRole?: SysRole;
    /**
     * 机构Id
     * @type {number}
     * @memberof SysRoleDataScope
     */
    sysOrgId?: number;
    /**
     * 
     * @type {SysOrg}
     * @memberof SysRoleDataScope
     */
    sysOrg?: SysOrg;
}

