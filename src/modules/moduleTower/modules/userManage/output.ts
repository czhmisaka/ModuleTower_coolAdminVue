/*
 * @Date: 2022-10-26 11:24:08
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-29 00:13:14
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/modules/userManage/output.ts
 */
export const moduleInfo = {
	name: "userManage",
	title: "管理中心组件包",
	icon: "EL_Setting",
	info: "部门 人员 角色 权限管理",
	author: "czh"
};

import drawerForm from "./component/searchTable/drawerForm";
import licenseModuleApi from "./component/premission/licenseModuleApi";

export const output = {
	moduleApi: {
		...drawerForm.moduleApi,
		...licenseModuleApi.moduleApi
	},
	CardApiInjectComponent: {
		...drawerForm.component
	},
	routerChecker: {}
};

// 模组打包配置
export const modulePackConfig = {};
