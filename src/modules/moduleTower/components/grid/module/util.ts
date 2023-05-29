/*
 * @Date: 2022-04-30 14:30:48
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-29 00:10:35
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/grid/module/util.ts
 */

import { gridCellTemplate, gridSizeMaker } from "./dataTemplate";
import * as Icons from "@element-plus/icons-vue";
import { h, createApp, Component } from "vue";

/**
 * @name: gridPositionByXY
 * @description: 计算并返回grid布局参数
 * @authors: CZH
 * @Date: 2022-04-29 16:11:19
 * @param {*} x
 * @param {*} y
 * @param {*} width
 * @param {*} height
 */
export function gridPositionByXY(
	x: number | gridInfoDefaultOutput,
	y: number,
	width: number,
	height: number,
	options: { [key: string]: any } = {}
) {
	if (typeof x === "number")
		return {
			gridArea: `${x} / ${y} / ${x + width} / ${y + height}`,
			...options
		};
	else {
		return {
			gridArea: `${x.x} / ${x.y} / ${x.x + x.width} / ${x.y + x.height}`,
			zIndex: 99999,
			...options
		};
	}
}

export interface gridInfoDefaultOutput {
	x: number;
	y: number;
	width: number;
	height: number;
}

/**
 * @name: outPutPositionAndGridSize
 * @description:  快速获取 x , y , width , height
 * @authors: CZH
 * @Date: 2022-05-04 20:59:29
 * @param {gridCellTemplate} gridCell
 */
export const outPutPositionAndGridSize = (gridCell: gridCellTemplate) => {
	let output: gridInfoDefaultOutput = {
		x: gridCell.gridInfo.default.position.x,
		y: gridCell.gridInfo.default.position.y,
		width: 1,
		height: 1
	};
	if (gridCell.gridInfo.default.size) {
		output.width = gridCell.gridInfo.default.size.width;
		output.height = gridCell.gridInfo.default.size.height;
	} else {
		output = {
			...gridSizeMaker(2, 2),
			...output
		};
	}
	return output;
};

// 设置gridCell布局定位参数
export const setPosition = function (x: number, y: number): any {
	this.gridInfo.default.position.x = x;
	this.gridInfo.default.position.y = y;
	return this;
};

// 设置gridCell布局大小参数
export const setSize = function (width: number, height: number): any {
	this.gridInfo.default.size.width = width;
	this.gridInfo.default.size.height = height;
	return this;
};

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

/**
 * @name: deepClone
 * @description:深度克隆
 * @authors: CZH
 * @Date: 2022-05-07 18:47:21
 * @param {any} initalObj
 */
export const deepClone = (initalObj: any): any => {
	function clone(searchObj: any): any {
		let back = {} as any;
		for (let item in searchObj) {
			if (searchObj[item] && typeof searchObj[item] === "object")
				back[item] = clone(searchObj[item]);
			else back[item] = searchObj[item];
		}
		return back;
	}
	let finalObj: any = clone(initalObj);
	return finalObj;
};

// 卡片操作工具包
export const cardUtil = {
	setPosition,
	setSize
} as {
	[key: string]: any;
};
