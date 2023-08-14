/*
 * @Date: 2022-04-29 14:11:20
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 17:04:19
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/utils/util.ts
 */
import { CardComponentTemplate } from "../components/grid/module/dataTemplate";
import { stringAnyObj } from "../modules/userManage/types";
// const Layout = () => import("@/layout/index.vue");

// 函数执行时间计算
const timeChecker = class {
	name: string;
	startTime: number;
	constructor(name: string) {
		this.name = name;
		this.startTime = new Date().getTime();
	}
	getTime = (word: string | number = " ") => {
		console.log(this.name, word, new Date().getTime() - this.startTime + "ms");
	};
};

/**
 * @name: routerCellMaker
 * @description: 路由单元构建函数
 * @authors: CZH
 * @Date: 2022-04-29 14:49:39
 */
export const routerCellMaker = (
	path: string,
	name: string,
	component: any,
	options: {
		meta?: { [key: string]: any };
		router?: { [key: string]: any };
	} = {},
	children?: any[]
): any => {
	let routerCell: any = {
		path,
		name,
		component,
		children,
		meta: {
			title: name,
			icon: "bxs:package",
			...options["meta"],
			// 这里的false可能需要根据用户的登录身份修改
			showLink: false,

			// 这个属性用于标注这个路由的来源 ，只有超级管理员能保持一直可见
			moduleBackUpRouter: true
		},
		...options["router"]
	};
	return routerCell;
};

/**
 * @name: modulesCellTemplate
 * @description: 模块生成模板
 * @authors: CZH
 * @Date: 2022-11-07 16:05:19
 */
export interface modulesCellTemplate {
	name: string;
	path: string;
	routers: any[];
	pageMap: stringAnyObj;
	components: CardComponentTemplate[];
	output?: { [key: string]: any };
	children?: { [key: string]: any }[];
	baseInfo?: {
		info: string;
		output?: boolean;
		authorize?: string;
		fitScreenSize?: string;
		[key: string]: any;
	};
}

let moduleList = [] as modulesCellTemplate[];
let action = {} as stringAnyObj;

/**
 * @name: getModuleFromView_Import
 * @description: 用于导入module包的一个函数
 * @authors: CZH
 * @Date: 2023-05-29 09:25:51
 * @param {*} init
 */
export const getModuleFromView_Import = (init = false) => {
	const timec = new timeChecker("getModuleFromView");
	if (!init) {
		timec.getTime(1);
		return moduleList;
	}

	timec.getTime(2);
};

/**
 * @name: getModuleFromView
 * @description: 从@/modules文件夹中遍历并生成模块文件列表,基于模块单体页面构建，不参与主体页面构建流程，自带动画效果
 * @authors: CZH
 * @Date: 2022-10-23 21:51:34
 * @param {*} basePath
 */
export const getModuleFromView = async (init = false) => {
	const timec = new timeChecker("getModuleFromView");
	if (!init) {
		timec.getTime(1);
		return moduleList;
	}

	// 如果你找到了这里的 require.context 搜索出了问题，先看一下是不是出现了空文件夹，如有则删除。  -- czh 20221109
	// 感谢自己，表现形式可能为 undifined files -- czh 20230116
	// again ，可能需要做一个更好的提示信息 -- czh 20230209
	// fuck 迁移这种规模的代码都有点困难 -- czh 20230618
	// 好消息，现在我们改成了import(试图) -- czh 20230706
	moduleList = [] as modulesCellTemplate[];
	const importModule = import.meta.glob("../modules/**", {});
	const requireList = Object.keys(importModule) as string[];
	const requireModule = async (fileName: string): Promise<any> => {
		return await importModule[fileName]();
	};
	// 文档路径
	const pageConfigData = "PageConfigData/index.ts";
	const component = "component/index.ts";
	const mainPage = "Index.vue";
	const output = "output.ts";
	const router = "router/index.ts";

	/**
	 * @name: getModuleName
	 * @description: 获取模组名(文件夹名)
	 * @authors: CZH
	 * @Date: 2022-11-07 14:42:27‘
	 * @param {string} fileName
	 */
	function getModuleName(fileName: string): string {
		console.log(fileName.split("../modules/")[1].split("/")[0], "getModuleName");
		return fileName.split("../modules/")[1].split("/")[0];
	}

	/**
	 * @name: getDealName
	 * @description: 获取当前所需处理的对象名
	 * @authors: CZH
	 * @Date: 2022-11-07 14:53:40
	 * @param {string} fileName
	 */

	function getDealName(fileName: string, len: number = 4): string {
		return fileName.split("/").length < len
			? ""
			: fileName
					.split("/")
					.filter((x: any, i: number) => i >= len - 1)
					.join("/");
	}

	/**
	 * @name: getFileNameLength
	 * @description: 获取当前处理对象长度
	 * @authors: CZH
	 * @Date: 2022-11-07 14:54:12
	 * @param {string} fileName
	 */
	function getFileNameLength(fileName: string): number {
		return fileName.split("/").length;
	}
	/**
	 * @name: dealRequireList
	 * @description: 处理函数
	 * @authors: CZH
	 * @Date: 2022-11-07 14:54:37
	 * @param {function} checkFunc
	 * @param {function} dealFunc
	 */
	function dealRequireList(
		checkFunc: (dealName: string, len: number) => boolean,
		dealFunc: (fileName: string) => void
	) {
		requireList.map((fileName: string) => {
			if (checkFunc(getDealName(fileName), getFileNameLength(fileName))) {
				dealFunc(fileName);
			}
		});
	}

	// 处理获取到模块，构建基础的模块列表
	dealRequireList(
		(dealName, len) => {
			console.log(dealName, len);
			return dealName == mainPage && len == 4;
		},
		(fileName: string) => {
			const moduleName = getModuleName(fileName);
			moduleList.push({
				name: moduleName,
				path: `../modules/${moduleName}/`,
				routers: [
					routerCellMaker(
						`/${moduleName}`,
						moduleName,
						() => import(`../modules/${moduleName}/Index.vue`),
						{},
						[]
					)
				],
				pageMap: {},
				baseInfo: { info: "" },
				output: {},
				children: [],
				components: [] as CardComponentTemplate[]
			});
		}
	);

	// 处理outPut文件
	dealRequireList(
		(dealName, len) => dealName == output && len == 4,
		(fileName: string) => {
			const moduleName = getModuleName(fileName);
			moduleList.map(async (module: modulesCellTemplate) => {
				if (module.name == moduleName) {
					const output = (await importModule[fileName]()) as stringAnyObj;
					console.log(output, "output");
					if (output["output"]) module.output = output["output"];
					if (output["moduleInfo"]) {
						const moduleInfo = output["moduleInfo"];
						module.baseInfo = {
							...module.baseInfo,
							...moduleInfo
						};
						module.routers[0].meta = {
							...module.routers[0].meta,
							...moduleInfo
						};
					}
				}
				return module;
			});
		}
	);

	// 处理组件列表
	dealRequireList(
		(dealName, len) => dealName == component,
		(fileName: string) => {
			const moduleName = getModuleName(fileName);
			moduleList.map(async (module: modulesCellTemplate) => {
				if (module.name == moduleName) {
					module.components = await (await requireModule(fileName)).default();
				}
				return module;
			});
		}
	);

	// 添加默认路由方案 (output配置中可以关闭)
	dealRequireList(
		(dealName, len) => dealName == pageConfigData,
		(fileName: string) => {
			const moduleName = getModuleName(fileName);
			moduleList.map(async (module: modulesCellTemplate) => {
				if (module.name == moduleName) {
					const pageMap = (await requireModule(fileName))["PageConfig"];
					for (let x in pageMap) {
						module.pageMap[x] = pageMap[x];
					}
					Object.keys(pageMap).map((pageName: string) => {
						module.routers[0].children.push(
							routerCellMaker(
								`/${moduleName}/${pageName}`,
								pageMap[pageName]["name"]
									? moduleName + "_" + pageMap[pageName]["name"]
									: moduleName + "_" + pageName,
								() => import(`../modules/${moduleName}/Index.vue`),
								{
									meta: {
										originData: {
											...pageMap[pageName],
											desktopData: null
										},
										...pageMap[pageName]["cusStyle"],
										title:
											pageMap[pageName]["name"] || moduleName + "_" + pageName
									}
								}
							)
						);
					});
				}
				return module;
			});
		}
	);

	// 处理路由列表
	dealRequireList(
		(dealName, len) => dealName == router,
		(fileName: string) => {
			const moduleName = getModuleName(fileName);
			moduleList.map(async (module: modulesCellTemplate) => {
				if (module.name == moduleName) {
					module.routers = [
						...module.routers,
						...(await requireModule(fileName)).default
					];
				}
				return module;
			});
		}
	);

	// 获取所有的模块的路由记录
	moduleList["getAllPageRouter"] = async () => {
		let routes = [] as any;
		moduleList.map((x) => {
			x.routers.map((cell) => {
				if (cell.children && cell.children.length > 0) {
					cell.children.map((route: any) => {
						routes.push(route);
					});
				} else {
					routes.push(cell);
				}
			});
		});
		return routes;
	};

	// 获取所有模块包的组件
	moduleList["getAllComponents"] = () => {
		let back = {};
		moduleList.map((module: modulesCellTemplate) => {
			back = {
				...back,
				...module.components
			};
		});
		return back;
	};

	// 获取所有模块包的 插入式能力组件
	moduleList["getAllPluginComponent"] = () => {
		let back = {};
		moduleList.map((module: any) => {
			if (module.output.CardApiInjectComponent) {
				for (let componentName in module.output.CardApiInjectComponent) {
					back[`${module.name}_${componentName}`] =
						module.output.CardApiInjectComponent[componentName];
				}
			}
		});
		return back;
	};

	// 获取所有模块包的 插入式 onChange能力
	moduleList["getModuleApi"] = () => {
		let back = {};
		moduleList.map((module: any) => {
			if (module.output.moduleApi) {
				for (let apiName in module.output.moduleApi) {
					back[`${module.name}_${apiName}`] = module.output.moduleApi[apiName];
				}
			}
		});
		return back;
	};
	timec.getTime(2);
	await new Promise((res) => {
		setTimeout(() => {
			res(true);
		}, 1000);
	});
	return moduleList;
};

// 可以被展开的数组
interface needFlatChildrenArrCell {
	children?: needFlatChildrenArrCell[];
	[key: string]: any;
}

// 数组展开
export const flatChildrenArr = (arr: needFlatChildrenArrCell[]) => {
	let back = [...arr];
	for (let i = 0; i < back.length; i++) {
		let cell = back[i];
		if (cell.children && cell.children.length > 0) {
			cell.children.map((x) => {
				back.push(x);
			});
		}
	}
	return back;
};

export const getAction = () => {
	if (Object.keys(action).length == 0) getModuleFromView(true);

	// 获取所有模块包的组件
	action["getAllComponents"] = () => {
		let back = {};
		console.log(moduleList, "moduleList");
		moduleList.map((module: modulesCellTemplate) => {
			back = {
				...back,
				...module.components
			};
		});
		return back;
	};

	// 获取所有模块包的 插入式能力组件
	action["getAllPluginComponent"] = () => {
		let back = {};
		moduleList.map((module: any) => {
			if (module.output.CardApiInjectComponent) {
				for (let componentName in module.output.CardApiInjectComponent) {
					back[`${module.name}_${componentName}`] =
						module.output.CardApiInjectComponent[componentName];
				}
			}
		});
		return back;
	};

	// 获取所有模块包的 插入式 onChange能力
	action["getModuleApi"] = () => {
		let back = {};
		moduleList.map((module: any) => {
			if (module.output.moduleApi) {
				for (let apiName in module.output.moduleApi) {
					back[`${module.name}_${apiName}`] = module.output.moduleApi[apiName];
				}
			}
		});
		return back;
	};

	return action;
};

export const baseModuleRouter: any = {
	path: "/desktop",
	name: "modules",
	// component: Layout,
	redirect: "/desktop/",
	meta: {
		icon: "bxs:package",
		title: "模块",
		rank: 0
	},
	children: []
};
