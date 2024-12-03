import eslintPluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false, 
        ecmaFeatures: {
          jsx: true 
        },
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"] 
        }
      }
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier
    },
    settings: {
      react: {
        version: "detect" 
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off", 
      "prettier/prettier": ["error", { "singleQuote": false, "semi": true, "tabWidth": 2 }],
      "indent": ["error", 2],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2]
    }
  }
];
