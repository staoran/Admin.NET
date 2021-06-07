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


import { OrgTypeEnum } from './org-type-enum';

/**
 * 
 * @export
 * @interface UpdateOrgInput
 */
export interface UpdateOrgInput {
    /**
     * 
     * @type {OrgTypeEnum}
     * @memberof UpdateOrgInput
     */
    orgType: OrgTypeEnum;
    /**
     * 机构Id
     * @type {string}
     * @memberof UpdateOrgInput
     */
    id: string;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateOrgInput
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateOrgInput
     */
    code: string;
    /**
     * 父Id
     * @type {string}
     * @memberof UpdateOrgInput
     */
    pid?: string | null;
    /**
     * 父Ids
     * @type {string}
     * @memberof UpdateOrgInput
     */
    pids?: string | null;
    /**
     * 电话
     * @type {string}
     * @memberof UpdateOrgInput
     */
    tel?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateOrgInput
     */
    sort?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateOrgInput
     */
    remark?: string | null;
    /**
     * 状态（字典 0正常 1停用 2删除）
     * @type {number}
     * @memberof UpdateOrgInput
     */
    status?: number;
}


