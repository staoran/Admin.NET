import type { UserInfo } from '/#/store';
import type { ErrorMessageMode } from '/@/utils/http/axios/types';

import { defineStore } from 'pinia';
import { store } from '/@/store';

import { RoleEnum } from '/@/enums/roleEnum';
import { PageEnum } from '/@/enums/pageEnum';
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum';

import { getAuthCache, setAuthCache } from '/@/utils/auth';

import { useI18n } from '/@/hooks/web/useI18n';
import { useMessage } from '/@/hooks/web/useMessage';
import router from '/@/router';
import { authApi } from '/@/api';
import { LoginInput } from "/@/api_base/models";

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
    // roleList
    roleList: [],
    // Whether the login expired
    sessionTimeout: false,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY) || {};
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info;
      setAuthCache(TOKEN_KEY, info);
    },
    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList;
      setAuthCache(ROLES_KEY, roleList);
    },
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
      setAuthCache(USER_INFO_KEY, info);
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
    resetState() {
      this.userInfo = null;
      this.token = '';
      this.roleList = [];
      this.sessionTimeout = false;
    },
    /**
     * @description: login
     */
    async login(
      params: LoginInput & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      }
    ): Promise<UserInfo | null> {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        // const data = await loginApi(loginParams, mode);
        // const { token } = data;

        const { data: { data }} = await authApi.loginPost(loginParams);

        // save token
        this.setToken("Bearer " + data);

        // get user info
        // const userInfo = await this.getUserInfoAction();
        const { data: {data: userInfo} } =  await authApi.getLoginUserGet();
        this.setUserInfo(userInfo);

        //const { roles } = userInfo.data;
        //const roleList = roles.map((item) => item.value) as RoleEnum[];
        //this.setRoleList(roleList);

        const sessionTimeout = this.sessionTimeout;
        sessionTimeout && this.setSessionTimeout(false);
        !sessionTimeout && goHome && (await router.replace(PageEnum.BASE_HOME));
        return userInfo;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    // async getUserInfoAction() {
    //   const userInfo =  await getUserInfo();
    //   const { roles } = userInfo;
    //   const roleList = roles.map((item) => item.value) as RoleEnum[];
    //   this.setUserInfo(userInfo);
    //   this.setRoleList(roleList);
    //   return userInfo;
    // },
    /**
     * @description: logout
     */
    logout(goLogin = false) {
      goLogin && router.push(PageEnum.BASE_LOGIN);
    },

    /**
     * @description: Confirm before logging out
     */
    confirmLoginOut() {
      const { createConfirm } = useMessage();
      const { t } = useI18n();
      createConfirm({
        iconType: 'warning',
        title: t('sys.app.logoutTip'),
        content: t('sys.app.logoutMessage'),
        onOk: async () => {
          await this.logout(true);
        },
      });
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store);
}
