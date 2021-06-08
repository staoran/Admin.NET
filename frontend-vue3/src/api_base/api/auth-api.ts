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

import { defHttp } from '/@/utils/http/axios';
import { RequestOptions, UploadFileParams } from '/@/utils/http/axios/types';
import { assertParamExists } from '../common';
import {
   ClickWordCaptchaInput,
   LoginInput,
   XnRestfulResultOfBoolean,
   XnRestfulResultOfLoginOutput,
   XnRestfulResultOfString,
   } from '../models';

         /**
         * @summary 校验验证码
         * @param {ClickWordCaptchaInput}[clickWordCaptchaInput] 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function captchaCheckPost(clickWordCaptchaInput?: ClickWordCaptchaInput, options?: RequestOptions) {
            const params = {  ...clickWordCaptchaInput  }
            return defHttp.request<void>(
              {
                url: '/captcha/check',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 获取验证码（默认点选模式）
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function captchaGetPost(options?: RequestOptions) {
            return defHttp.request<void>(
              {
                url: '/captcha/get',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }

         /**
         * @summary 获取验证码开关
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function getCaptchaOpenGet(options?: RequestOptions) {
            return defHttp.request<XnRestfulResultOfBoolean>(
              {
                url: '/getCaptchaOpen',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }

         /**
         * @summary 获取当前登录用户信息
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function getLoginUserGet(options?: RequestOptions) {
            return defHttp.request<XnRestfulResultOfLoginOutput>(
              {
                url: '/getLoginUser',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }

         /**
         * @summary 用户登录
         * @param {LoginInput}loginInput 
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function loginPost(loginInput: LoginInput, options?: RequestOptions) {
            // verify required parameter 'loginInput' is not null or undefined
            assertParamExists('loginPost', 'loginInput', loginInput)
            const params = {  ...loginInput  }
            return defHttp.request<XnRestfulResultOfString>(
              {
                url: '/login',
                method: 'POST',
                headers: {'Content-Type': 'application/json-patch+json'},
                params
              },
              options
            )
         }

         /**
         * @summary 退出
         * @param {RequestOptions}options 额外配置，用来设置错误提示方法，是否返回原始数据，是否返回原始响应头，参数是否拼接到url等等
         */
         export function logoutGet(options?: RequestOptions) {
            return defHttp.request<void>(
              {
                url: '/logout',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              options
            )
         }
