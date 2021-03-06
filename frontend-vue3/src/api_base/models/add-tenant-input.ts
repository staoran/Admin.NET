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
 * 
 * @export
 * @interface AddTenantInput
 */
export interface AddTenantInput {
    /**
     * 公司名称
     * @type {string}
     * @memberof AddTenantInput
     */
    name: string;
    /**
     * 管理员名称
     * @type {string}
     * @memberof AddTenantInput
     */
    adminName: string;
    /**
     * 主机名称
     * @type {string}
     * @memberof AddTenantInput
     */
    host?: string | null;
    /**
     * 数据库连接
     * @type {string}
     * @memberof AddTenantInput
     */
    connection?: string | null;
    /**
     * 电子邮箱
     * @type {string}
     * @memberof AddTenantInput
     */
    email: string;
    /**
     * 电话号码
     * @type {string}
     * @memberof AddTenantInput
     */
    phone?: string | null;
    /**
     * 模式
     * @type {string}
     * @memberof AddTenantInput
     */
    schema?: string | null;
    /**
     * 备注
     * @type {string}
     * @memberof AddTenantInput
     */
    remark?: string | null;
    /**
     * 创建时间
     * @type {string}
     * @memberof AddTenantInput
     */
    createdTime?: string | null;
}


