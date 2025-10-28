"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverless_1 = require("@neondatabase/serverless");
const sql = (0, serverless_1.neon)(`${process.env.DATABASE_URL}`);
exports.default = sql;
