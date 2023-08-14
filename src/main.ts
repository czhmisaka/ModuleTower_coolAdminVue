/*
 * @Date: 2023-05-17 13:53:49
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 18:09:04
 * @FilePath: /cool-admin-vue/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import { bootstrap } from "./cool";

const app = createApp(App);
// 启动
bootstrap(app)
	.then(() => {
		app.mount("#app");
	})
	.catch((err) => {
		console.error("COOL-ADMIN 启动失败", err);
	});
