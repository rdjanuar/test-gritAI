"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard = void 0;
const guard = (req, res, next) => {
    res.set("User-id", "ifabula");
    res.set("Scope", "user");
    next();
};
exports.guard = guard;
