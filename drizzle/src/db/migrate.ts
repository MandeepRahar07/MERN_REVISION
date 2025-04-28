import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from '.';

async function main() {
    await migrate(db, { migrationsFolder: './drizzle' });

    // Don't forget to close the connection, otherwise the script will hang
    connection.end();
}

main();