"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const JoinRoom = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "got scrum?" }), (0, jsx_runtime_1.jsx)(Form, { type: "join" }), (0, jsx_runtime_1.jsx)("footer", { children: (0, jsx_runtime_1.jsxs)("p", { children: ["Create your own room for free here: ", (0, jsx_runtime_1.jsx)("a", { onClick: CreateRoom, children: "Create New Room" })] }) })] }));
};
const CreateRoom = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Create Room" }), (0, jsx_runtime_1.jsx)(Form, { type: "create" })] }));
};
const Form = (props) => {
    let action;
    let nameField;
    let buttonText;
    if (props.type == "join") {
        action = "";
        nameField = "Name:";
        buttonText = "Estimate!";
    }
    else if (props.type == "create") {
        action = "";
        nameField = "Room Name:";
        buttonText = "Submit!";
    }
    else {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("form", { action: `${action}`, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", children: nameField }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", name: "name", required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { htmlFor: "roomnum", children: "Room ID:" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "roomnum", name: "roomnum", required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: buttonText })] }));
};
exports.default = JoinRoom;
