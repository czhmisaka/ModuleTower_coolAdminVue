import { createPinia } from "pinia";
import { App } from "vue";
import { createModule } from "./module";
import { createEps } from "./eps";
import { router } from "../router";
import { Loading } from "../utils";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export async function bootstrap(app: App) {
	// pinia
	app.use(createPinia());

	// 路由
	app.use(router);

	// 模块
	const { eventLoop } = createModule(app);

	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component);
	}

	// eps
	await createEps();

	// 加载
	Loading.set([eventLoop()]);
}
