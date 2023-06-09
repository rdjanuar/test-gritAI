"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard = void 0;
const guard = (req, res, next) => {
    if (req.headers["user-id"] !== "ifabula" || req.headers["scope"] !== "user") {
        res.status(401);
        res.send({
            responseCode: 401,
            responseMessage: "UNAUTHORIZED",
        });
    }
    next();
};
exports.guard = guard;
