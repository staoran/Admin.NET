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
 * @interface AddCodeGenInput
 */
export interface AddCodeGenInput {
    /**
     * 数据库表名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableName: string;
    /**
     * 业务名（业务代码包名称）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    busName: string;
    /**
     * 命名空间
     * @type {string}
     * @memberof AddCodeGenInput
     */
    nameSpace: string;
    /**
     * 作者姓名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    authorName: string;
    /**
     * 生成方式
     * @type {string}
     * @memberof AddCodeGenInput
     */
    generateType: string;
    /**
     * 菜单应用分类（应用编码）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    menuApplication: string;
    /**
     * 菜单父级
     * @type {number}
     * @memberof AddCodeGenInput
     */
    menuPid: number;
    /**
     * 类名
     * @type {string}
     * @memberof AddCodeGenInput
     */
    className?: string | null;
    /**
     * 是否移除表前缀
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tablePrefix?: string | null;
    /**
     * 功能名（数据库表名称）
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableComment?: string | null;
}

