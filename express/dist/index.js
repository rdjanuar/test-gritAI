"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(body_parser_1.default.json());
app.use(middleware_1.guard);
app.get("/", (req, res) => {
    res.send({
        data: "mabar",
    });
});
app.post("/", (req, res) => {
    const { username } = req.body;
    res.send({
        data: username,
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
