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
import { SysEmp } from './sys-emp';
import { SysEmpPos } from './sys-emp-pos';

/**
 * 职位表
 * @export
 * @interface SysPos
 */
export interface SysPos {
    /**
     * 主键Id
     * @type {number}
     * @memberof SysPos
     */
    id?: number;
    /**
     * 创建时间
     * @type {string}
     * @memberof SysPos
     */
    createdTime?: string | null;
    /**
     * 更新时间
     * @type {string}
     * @memberof SysPos
     */
    updatedTime?: string | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysPos
     */
    createdUserId?: number | null;
    /**
     * 创建者名称
     * @type {string}
     * @memberof SysPos
     */
    createdUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysPos
     */
    updatedUserId?: number | null;
    /**
     * 修改者名称
     * @type {string}
     * @memberof SysPos
     */
    updatedUserName?: string | null;
    /**
     * 租户id
     * @type {number}
     * @memberof SysPos
     */
    tenantId?: number | null;
    /**
     * 名称
     * @type {string}
     * @memberof SysPos
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof SysPos
     */
    code: string;
    /**
     * 排序
     * @type {number}
     * @memberof SysPos
     */
    sort?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysPos
     */
    remark?: string | null;
    /**
     * 
     * @type {CommonStatus}
     * @memberof SysPos
     */
    status?: CommonStatus;
    /**
     * 多对多（员工）
     * @type {Array<SysEmp>}
     * @memberof SysPos
     */
    sysEmps?: Array<SysEmp> | null;
    /**
     * 多对多中间表（员工职位）
     * @type {Array<SysEmpPos>}
     * @memberof SysPos
     */
    sysEmpPos?: Array<SysEmpPos> | null;
}


