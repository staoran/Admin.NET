import {
  AppApi,
  AuthApi,
  CacheApi,
  CodegenApi,
  CodegenconfigApi,
  ConfigApi,
  DictdataApi,
  EnumdataApi,
  ExlogApi,
  FileApi,
  MachineApi,
  MenuApi,
  NoticeApi,
  OauthApi,
  OnlineuserApi,
  OplogApi,
  OrgApi,
  PosApi,
  RoleApi,
  TenantApi,
  TimerApi,
  UserApi,
  VislogApi
} from '/@/api_base';
import { defHttp } from '/@/utils/http/axios';

const instance = defHttp.getAxios()

export const appApi = new AppApi(undefined, undefined, instance);
export const authApi = new AuthApi(undefined, undefined, instance);
export const cacheApi = new CacheApi(undefined, undefined, instance);
export const codegenApi = new CodegenApi(undefined, undefined, instance);
export const codegenconfigApi = new CodegenconfigApi(undefined, undefined, instance);
export const configApi = new ConfigApi(undefined, undefined, instance);
export const dictdataApi = new DictdataApi(undefined, undefined, instance);
export const enumdataApi = new EnumdataApi(undefined, undefined, instance);
export const exlogApi = new ExlogApi(undefined, undefined, instance);
export const fileApi = new FileApi(undefined, undefined, instance);
export const machineApi = new MachineApi(undefined, undefined, instance);
export const menuApi = new MenuApi(undefined, undefined, instance);
export const noticeApi = new NoticeApi(undefined, undefined, instance);
export const oauthApi = new OauthApi(undefined, undefined, instance);
export const onlineuserApi = new OnlineuserApi(undefined, undefined, instance);
export const oplogApi = new OplogApi(undefined, undefined, instance);
export const orgApi = new OrgApi(undefined, undefined, instance);
export const posApi = new PosApi(undefined, undefined, instance);
export const roleApi = new RoleApi(undefined, undefined, instance);
export const tenantApi = new TenantApi(undefined, undefined, instance);
export const timerApi = new TimerApi(undefined, undefined, instance);
export const userApi = new UserApi(undefined, undefined, instance);
export const vislogApi = new VislogApi(undefined, undefined, instance);
