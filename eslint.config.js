const js = require("@eslint/js");

module.exports = [
	js.configs.recommended,
	{
		files: ["**/*.js"],
		ignores: ["eslint.config.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "script",
			globals: {
				window: "readonly",
				document: "readonly",
				console: "readonly",
			},
		},
		rules: {
			"no-unused-vars": "warn",
		},
	},
	{
		files: ["eslint.config.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "commonjs",
			globals: {
				require: "readonly",
				module: "writable",
			},
		},
	},
];
