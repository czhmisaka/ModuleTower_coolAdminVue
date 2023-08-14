/*
 * @Date: 2022-08-16 13:01:09
 * @LastEditors: CZH
 * @LastEditTime: 2023-07-06 19:39:27
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/utils/Env.ts
 */

// 判断运行环境
function isClient(clientName: string) {
	return window.navigator.userAgent.toLowerCase().indexOf(clientName.toLowerCase()) > -1;
}

export function isMobile() {
	return window.screen.availWidth < 768;
}

export function isIphone() {
	return isClient("iPhone");
}

export function isAndroid() {
	return isClient("Android");
}

export function isWeixin() {
	return isClient("MicroMessenger");
}

export function isWorkWeixin() {
	return isClient("wxwork");
}

// 设备环境对象
export interface DeviceEnv {
	Device: string;
	WebScreenSize: { width: number; height: number };
}

/**
 * @name: getDeviceEnv
 * @description: 获取设备环境对象
 * @authors: CZH
 * @Date: 2022-08-16 13:08:20
 * @param {*} Env
 */
export const getDeviceEnv = (): DeviceEnv => {
	let env = {
		Device: "",
		WebScreenSize: { width: 0, height: 0 }
	} as DeviceEnv;
	return env;
};
