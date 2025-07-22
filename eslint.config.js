import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import tsEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';


/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/src/**/*.{js,ts,jsx,tsx,mjs}'],
		// extends: [
		// 	'plugin:react/recommended',
		// ],
		plugins: {
			tsEslint,
			react,
			reactHooks,
		},
		// languageOptions: {
		// 	parser: tsParser,
		// 	globals: globals.browser,
		// },
		rules: {
			// 'react/jsx-indent': ['error', 'tab'],
			// 'react/jsx-indent-props': ['error', 'tab'],
			// indent: ['error', 'tab'],
			// 'react/jsx-space-before-closing': 'error',
			// 'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx', '.mjs']}],
			// 'import/no-unresolved': 'off',
			// 'import/prefer-default-export': 'off',
			// 'no-unused-vars': 'warn',
			// 'react/require-default-props': 'off',
			// 'react/react-in-jsx-scope': 'off',
			// 'react/jsx-uses-react': 'off',
			// 'react/jsx-props-no-spreading': 'warn',
			// 'react/function-component-definition': 'off',
			// 'no-shadow': 'off',
			// 'import/extensions': 'off',
			// 'import/no-extraneous-dependencies': 'off',
			// 'no-underscore-dangle': 'off',
			// 'quotes': ['error', 'single'],
			// 'object-curly-spacing': ['error', 'always'],
			// 'max-len': ['error', {'ignoreComments': true, code: 120}],
			// 'reactHooks/rules-of-hooks': 'error',
			// 'reactHooks/exhaustive-deps': 'error',
			// 'no-param-reassign': 'off',
			// 'no-undef': 'off'
		},
		globals: {
			__IS_DEV__: true,
			__API__: true,
			__PROJECT__: true,
		},
	},

	// {
	// 	languageOptions: {globals: globals.browser}
	// },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
];