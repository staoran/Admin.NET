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
 * 代码生成详细配置参数
 * @export
 * @interface CodeGenConfig
 */
export interface CodeGenConfig {
    /**
     * 主键Id
     * @type {number}
     * @memberof CodeGenConfig
     */
    id?: number;
    /**
     * 代码生成主表ID
     * @type {number}
     * @memberof CodeGenConfig
     */
    codeGenId?: number;
    /**
     * 数据库字段名
     * @type {string}
     * @memberof CodeGenConfig
     */
    columnName?: string | null;
    /**
     * 数据库字段名(首字母小写)
     * @type {string}
     * @memberof CodeGenConfig
     */
    lowerColumnName?: string | null;
    /**
     * 字段描述
     * @type {string}
     * @memberof CodeGenConfig
     */
    columnComment?: string | null;
    /**
     * .NET类型
     * @type {string}
     * @memberof CodeGenConfig
     */
    netType?: string | null;
    /**
     * 作用类型（字典）
     * @type {string}
     * @memberof CodeGenConfig
     */
    effectType?: string | null;
    /**
     * 外键实体名称
     * @type {string}
     * @memberof CodeGenConfig
     */
    fkEntityName?: string | null;
    /**
     * 外键实体名称(首字母小写)
     * @type {string}
     * @memberof CodeGenConfig
     */
    lowerFkEntityName?: string | null;
    /**
     * 外键显示字段
     * @type {string}
     * @memberof CodeGenConfig
     */
    fkColumnName?: string | null;
    /**
     * 外键显示字段(首字母小写)
     * @type {string}
     * @memberof CodeGenConfig
     */
    lowerFkColumnName?: string | null;
    /**
     * 外键显示字段.NET类型
     * @type {string}
     * @memberof CodeGenConfig
     */
    fkColumnNetType?: string | null;
    /**
     * 字典code
     * @type {string}
     * @memberof CodeGenConfig
     */
    dictTypeCode?: string | null;
    /**
     * 列表是否缩进（字典）
     * @type {string}
     * @memberof CodeGenConfig
     */
    whetherRetract?: string | null;
    /**
     * 是否必填（字典）
     * @type {string}
     * @memberof CodeGenConfig
     */
    whetherRequired?: string | null;
    /**
     * 是否是查询条件
     * @type {string}
     * @memberof CodeGenConfig
     */
    queryWhether?: string | null;
    /**
     * 查询方式
     * @type {string}
     * @memberof CodeGenConfig
     */
    queryType?: string | null;
    /**
     * 列表显示
     * @type {string}
     * @memberof CodeGenConfig
     */
    whetherTable?: string | null;
    /**
     * 列表排序显示
     * @type {string}
     * @memberof CodeGenConfig
     */
    whetherOrderBy?: string | null;
    /**
     * 增改
     * @type {string}
     * @memberof CodeGenConfig
     */
    whetherAddUpdate?: string | null;
    /**
     * 主外键
     * @type {string}
     * @memberof CodeGenConfig
     */
    columnKey?: string | null;
    /**
     * 数据库中类型（物理类型）
     * @type {string}
     * @memberof CodeGenConfig
     */
    dataType?: string | null;
    /**
     * 是否是通用字段
     * @type {string}
     * @memberof CodeGenConfig
     */
    whetherCommon?: string | null;
}


