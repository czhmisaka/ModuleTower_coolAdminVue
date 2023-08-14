/*
 * @Date: 2023-05-17 13:53:49
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 17:14:18
 * @FilePath: /cool-admin-vue/.eslintrc.js
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: true,
			tsx: true
		}
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:prettier/recommended"
	],
	rules: {

		"@typescript-eslint/explicit-module-boundary-types": "off", // setup()
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-empty-function": "off",
		"vue/component-name-in-template-casing": ["error", "kebab-case"],
		"vue/component-definition-name-casing": ["error", "kebab-case"],
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^h$",
				varsIgnorePattern: "^h$"
			}
		],
		"no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^h$",
				varsIgnorePattern: "^h$"
			}
		],
		"space-before-function-paren": "off",
		"vue/attributes-order": "off",
		"vue/one-component-per-file": "off",
		"vue/html-closing-bracket-newline": "off",
		"vue/max-attributes-per-line": "off",
		"vue/multiline-html-element-content-newline": "off",
		"vue/multi-word-component-names": "off",
		"vue/singleline-html-element-content-newline": "off",
		"vue/attribute-hyphenation": "off",
		"vue/html-self-closing": "off",
		"vue/require-default-prop": "off",
		"vue/v-on-event-hyphenation": "off",
		'prefer-const': 'off',
		'no-explicit-any': 'off',
		"@typescript-eslint/explicit-module-boundary-types": "off",
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		"vue/no-v-html": "off",
		"vue/require-default-prop": "off",
		"vue/require-explicit-emits": "off",
		"vue/multi-word-component-names": "off",
		"@typescript-eslint/no-explicit-any": "off", // any
		"no-debugger": "off",
	}
};
