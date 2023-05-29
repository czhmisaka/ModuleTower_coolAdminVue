/*
 * @Date: 2022-08-15 23:37:57
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-29 00:11:20
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/modules/userManage/PageConfigData/index.ts
 */

import { gridCellTemplate } from "../../../components/grid/module/dataTemplate";
import { deepClone } from "../../../components/grid/module/cardApi/deepClone";
import { stringAnyObj } from "../types";
import { btnCellTemplate } from "../types";

// 对象字符串判空
export function isValidKey(
	key: string | number | symbol,
	object: object
): key is keyof typeof object {
	return key in object;
}

const base = {
	gridColNum: 12,
	cusStyle: {
		wholeScreen: true,
		maxRows: 8,
		margin: 6
	}
};
import { desktopDataTemplate } from "../types";
const pageConfig = {} as { [key: string]: desktopDataTemplate };

let Page = {} as {
	[key: string]: desktopDataTemplate;
};

Object.keys(pageConfig).map((key: string) => {
	if (isValidKey(key, pageConfig))
		Page[String(key).toUpperCase()] = pageConfig[key] as desktopDataTemplate;
});

export const PageConfig = { ...Page };
