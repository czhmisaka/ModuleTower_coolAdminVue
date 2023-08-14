/*
 * @Date: 2023-06-19 16:07:57
 * @LastEditors: CZH
 * @LastEditTime: 2023-06-19 16:15:47
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/utils/resource/icon.ts
 */

import { h, createApp, Component } from "vue";
import * as Icons from "@element-plus/icons-vue";

// 对象字符串判空
export function isValidKey(
	key: string | number | symbol,
	object: object
): key is keyof typeof object {
	return key in object;
}
// 获取Icon 对象
export function getIcon(name: string) {
	if (isValidKey(name, Icons)) {
		return Icons[name];
	} else {
		return h("p", {}, ["未找到这个图标"]);
	}
}
