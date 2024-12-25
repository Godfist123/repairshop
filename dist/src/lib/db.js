"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const data_source_1 = require("../config/data-source");
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data_source_1.AppDataSource.isInitialized) {
            yield data_source_1.AppDataSource.initialize();
            console.log("Database connected successfully");
        }
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
});
exports.connectToDatabase = connectToDatabase;
