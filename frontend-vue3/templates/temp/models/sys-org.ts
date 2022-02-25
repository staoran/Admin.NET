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
import { OrgTypeEnum } from './org-type-enum';
import { SysRole } from './sys-role';
import { SysRoleDataScope } from './sys-role-data-scope';
import { SysUser } from './sys-user';
import { SysUserDataScope } from './sys-user-data-scope';

/**
 * 组织机构表
 * @export
 * @interface SysOrg
 */
export interface SysOrg {
    /**
     * 主键Id
     * @type {number}
     * @memberof SysOrg
     */
    id?: number;
    /**
     * 创建时间
     * @type {string}
     * @memberof SysOrg
     */
    createdTime?: string | null;
    /**
     * 更新时间
     * @type {string}
     * @memberof SysOrg
     */
    updatedTime?: string | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysOrg
     */
    createdUserId?: number | null;
    /**
     * 创建者名称
     * @type {string}
     * @memberof SysOrg
     */
    createdUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysOrg
     */
    updatedUserId?: number | null;
    /**
     * 修改者名称
     * @type {string}
     * @memberof SysOrg
     */
    updatedUserName?: string | null;
    /**
     * 租户id
     * @type {number}
     * @memberof SysOrg
     */
    tenantId?: number | null;
    /**
     * 父Id
     * @type {number}
     * @memberof SysOrg
     */
    pid?: number;
    /**
     * 父Ids
     * @type {string}
     * @memberof SysOrg
     */
    pids?: string | null;
    /**
     * 名称
     * @type {string}
     * @memberof SysOrg
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysOrg
     */
    code: string;
    /**
     * 联系人
     * @type {string}
     * @memberof SysOrg
     */
    contacts?: string | null;
    /**
     * 电话
     * @type {string}
     * @memberof SysOrg
     */
    tel?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof SysOrg
     */
    sort?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysOrg
     */
    remark?: string | null;
    /**
     * 
     * @type {CommonStatus}
     * @memberof SysOrg
     */
    status?: CommonStatus;
    /**
     * 
     * @type {OrgTypeEnum}
     * @memberof SysOrg
     */
    orgType?: OrgTypeEnum;
    /**
     * 多对多（用户）
     * @type {Array<SysUser>}
     * @memberof SysOrg
     */
    sysUsers?: Array<SysUser> | null;
    /**
     * 多对多中间表（用户数据范围）
     * @type {Array<SysUserDataScope>}
     * @memberof SysOrg
     */
    sysUserDataScopes?: Array<SysUserDataScope> | null;
    /**
     * 多对多（角色）
     * @type {Array<SysRole>}
     * @memberof SysOrg
     */
    sysRoles?: Array<SysRole> | null;
    /**
     * 多对多中间表（角色数据范围）
     * @type {Array<SysRoleDataScope>}
     * @memberof SysOrg
     */
    sysRoleDataScopes?: Array<SysRoleDataScope> | null;
}

