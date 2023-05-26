/*
 * @Date: 2023-05-25 13:30:40
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-25 13:52:45
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/config.ts
 */
import { ModuleConfig } from "/@/cool";
import { useDict } from "./index";

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
