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


import { SysEmpPos } from './sys-emp-pos';
import { SysPos } from './sys-pos';

/**
 * 员工表
 * @export
 * @interface SysEmp
 */
export interface SysEmp {
    /**
     * 用户Id
     * @type {number}
     * @memberof SysEmp
     */
    id?: number;
    /**
     * 工号
     * @type {string}
     * @memberof SysEmp
     */
    jobNum?: string | null;
    /**
     * 机构Id
     * @type {number}
     * @memberof SysEmp
     */
    orgId?: number;
    /**
     * 机构名称
     * @type {string}
     * @memberof SysEmp
     */
    orgName?: string | null;
    /**
     * 多对多（职位）
     * @type {Array<SysPos>}
     * @memberof SysEmp
     */
    sysPos?: Array<SysPos> | null;
    /**
     * 多对多中间表（员工-职位）
     * @type {Array<SysEmpPos>}
     * @memberof SysEmp
     */
    sysEmpPos?: Array<SysEmpPos> | null;
}


