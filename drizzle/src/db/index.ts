import mysql from 'mysql2';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from "./schema";

// Create MySQL connection
export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
});

// Handle MySQL connection errors
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database successfully!');
});

// Create drizzle instance
export const db = drizzle(connection, { schema: schema, mode: 'default' });
