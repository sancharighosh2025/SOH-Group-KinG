"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropTables = exports.createTables = void 0;
const db_1 = __importDefault(require("./db"));
const createTables = async () => {
    try {
        // Create users table
        await (0, db_1.default) `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        mobile BIGINT NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        console.log('✅ Database tables created successfully');
    }
    catch (error) {
        console.error('❌ Error creating tables:', error);
        throw error;
    }
};
exports.createTables = createTables;
const dropTables = async () => {
    try {
        await (0, db_1.default) `DROP TABLE IF EXISTS users CASCADE`;
        console.log('✅ Database tables dropped successfully');
    }
    catch (error) {
        console.error('❌ Error dropping tables:', error);
        throw error;
    }
};
exports.dropTables = dropTables;
