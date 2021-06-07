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
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import { assertParamExists } from '../common';
import {
   XnRestfulResultOfObject,
   } from '../models';

         /**
         * @summary微信登录授权
         */
         export function oauthWechatGet(mode: ErrorMessageMode = 'message') {
            return defHttp.request<void>(
              {
                url: '/oauth/wechat',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary获取微信用户基本信息
         * @param {string}[token]
         * @param {string}[openId]
         */
         export function oauthWechatUserGet(token?: string, openId?: string, mode: ErrorMessageMode = 'message') {
            const params = {  } as any
            if (token !== undefined) {
                params['token'] = token;
            }
            if (openId !== undefined) {
                params['openId'] = openId;
            }
            return defHttp.request<XnRestfulResultOfObject>(
              {
                url: '/oauth/wechat/user',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }

         /**
         * @summary微信登录授权回调
         * @param {string}[code]
         * @param {string}[state]
         * @param {string}[errorDescription]
         */
         export function oauthWechatcallbackGet(code?: string, state?: string, errorDescription?: string, mode: ErrorMessageMode = 'message') {
            const params = {  } as any
            if (code !== undefined) {
                params['code'] = code;
            }
            if (state !== undefined) {
                params['state'] = state;
            }
            if (errorDescription !== undefined) {
                params['error_description'] = errorDescription;
            }
            return defHttp.request<void>(
              {
                url: '/oauth/wechatcallback',
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                params
              },
              {
                errorMessageMode: mode,
              })
         }
