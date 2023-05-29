/*
 * @Date: 2022-09-22 23:02:49
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-28 11:39:18
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/cell/info/DynamicIsland.ts
 */
import { gridCellTemplate } from "../../grid/module/dataTemplate";

// 信息状态
export enum infoType {
	message = "message",
	element = "element",
	icon = "icon",
	image = "image",
	sleep = "sleep"
}

export enum infoTypeActionListLengthLimit {
	messgae = "3",
	element = "1",
	icon = "2",
	imaeg = "1"
}

// 完整信息
export interface infoTemplate {
	type: infoType;
	message?: string;
	el?: gridCellTemplate;
	icon?: string | Function;
	time?: number;
	image?: string;
	options?: { [key: string]: any };
}
