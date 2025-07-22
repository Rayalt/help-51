const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
	js.configs.recommended,

	// React Flat config
	reactPlugin.configs.flat.recommended,

	{
		files: ['**/*.{js,ts,jsx,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				__IS_DEV__: true,
				__API__: true,
				__PROJECT__: true,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			// JS/TS
			'no-unused-vars': 'warn',
			'no-shadow': 'off',
			'no-undef': 'off',
			'no-param-reassign': 'off',

			// React
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			indent: ['error', 'tab'],
			'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
			'react/jsx-space-before-closing': 'error',
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/require-default-props': 'off',
			'react/jsx-props-no-spreading': 'warn',
			'react/prop-types': 'off',

			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// Style
			quotes: ['error', 'single'],
			'object-curly-spacing': ['error', 'always'],
			'max-len': ['warn', { code: 120, ignoreComments: true }],
		},
	}
];
