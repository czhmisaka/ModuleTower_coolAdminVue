/*
 * @Date: 2023-05-25 13:30:40
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 18:08:27
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/config.ts
 */
import { ModuleConfig } from "/@/cool";
import { useDict } from "./index";
import { getModuleFromView } from "./utils/util";

export default (): ModuleConfig => {
	return {
		order: 1000,
		onLoad({ hasToken }) {
			const { dict } = useDict();
			hasToken(() => {
				dict.refresh();
			});
		}
	};
};
