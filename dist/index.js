"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const estimation_1 = __importDefault(require("./estimation"));
const top = (0, jsx_runtime_1.jsx)(estimation_1.default, {});
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(top);
