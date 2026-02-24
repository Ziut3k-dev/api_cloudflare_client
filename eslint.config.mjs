import { defineConfig } from "eslint/config";
import eslintComments from "eslint-plugin-eslint-comments";
import node from "eslint-plugin-node";
import security from "eslint-plugin-security";
import promise from "eslint-plugin-promise";
import notice from "eslint-plugin-notice";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:node/recommended",
        "plugin:promise/recommended",
    ),

    plugins: {
        "eslint-comments": eslintComments,
        node,
        security,
        promise,
        notice,
    },

    rules: {
        "prefer-reflect": "off",

        "no-underscore-dangle": ["error", {
            allowAfterThis: true,
        }],

        "prefer-rest-params": "off",
        "node/exports-style": ["error", "module.exports"],
    },
}]);