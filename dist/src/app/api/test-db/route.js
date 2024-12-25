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
exports.GET = void 0;
require("reflect-metadata");
const server_1 = require("next/server");
const db_1 = require("@/lib/db");
const data_source_1 = require("@/config/data-source");
const Customers_1 = require("@/entities/Customers");
function GET(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, db_1.connectToDatabase)();
            const CustomersRepository = data_source_1.AppDataSource.getRepository(Customers_1.Customers);
            // Define initial customer data
            const initialCustomers = [
                {
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@example.com",
                    phone: "123-456-7890",
                    address1: "123 Main St",
                    address2: "Apt 4B",
                    city: "New York",
                    state: "NY",
                    postcode: "10001",
                    notes: "Customer since 2020",
                    isActive: true,
                },
                {
                    firstName: "Jane",
                    lastName: "Smith",
                    email: "jane.smith@example.com",
                    phone: "987-654-3210",
                    address1: "456 Oak St",
                    address2: null,
                    city: "Los Angeles",
                    state: "CA",
                    postcode: "90001",
                    notes: "VIP customer",
                    isActive: true,
                },
            ];
            // Insert customers individually
            for (const customerData of initialCustomers) {
                const customer = CustomersRepository.create(customerData); // Create a new entity instance
                yield CustomersRepository.save(customer); // Save the instance to the database
            }
            // Fetch all customers
            const allCustomers = yield CustomersRepository.find();
            return server_1.NextResponse.json({ allCustomers }, { status: 200 });
        }
        catch (err) {
            console.error("Database connection error:", err);
            return server_1.NextResponse.json({ error: "Failed to connect to the database" }, { status: 500 });
        }
    });
}
exports.GET = GET;
