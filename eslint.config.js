import js from '@eslint/js';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
	{
		ignores: [
			'build/**',
			'.svelte-kit/**',
			'node_modules/**',
			'MAINTENANCE-REVIEW.md',
			'SIZE-REDUCTION-REVIEW.md'
		]
	},
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	prettier,
	...svelte.configs['flat/prettier']
];
