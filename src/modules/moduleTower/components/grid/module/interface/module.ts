import { CardComponentTemplate } from "../dataTemplate";
/*
 * @Date: 2022-11-01 14:48:06
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-29 00:08:09
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/grid/module/interface/module.ts
 */

export interface moduleOutputInfoTemplate {
	package: { [key: string]: any };
	moduleInfo: {
		name: string;
		[key: string]: any;
	};
	componentLists: { [key: string]: CardComponentTemplate };
	Api: any[];
}

export default {};
