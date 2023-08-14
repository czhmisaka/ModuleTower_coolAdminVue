/*
 * @Date: 2022-05-06 09:09:06
 * @LastEditors: CZH
 * @LastEditTime: 2023-06-19 18:09:22
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/grid/module/gridCard/module/componentLists.ts
 */
import { defineAsyncComponent } from "vue";
import {
	cardComponentMaker,
	inputType,
	gridSizeMaker,
	CardComponentTemplate
} from "./../../dataTemplate";

export const componentLists: { [key: string]: CardComponentTemplate } = {
	iframe: cardComponentMaker(
		defineAsyncComponent(
			// () => import("/$/moduleTower/components/basicComponents/cell/info/iframe.vue")
			() => import("/$/moduleTower/components/cell/info/iframe.vue")
		),
		{
			url: {
				label: "网页链接",
				type: inputType.text
			}
		},
		{},
		{
			label: "Iframe",
			labelNameCN: "网页",
			key: "iframe",
			description: "网页",
			gridInfo: {
				small: gridSizeMaker(6, 4),
				middle: gridSizeMaker(9, 6),
				large: gridSizeMaker(12, 8)
			}
		}
	)
};
