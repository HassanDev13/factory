import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from './db';

migrate(db, { migrationsFolder: './drizzle' });


// seed 
// pnpm tsx db/seed.ts
// drop all tables and create them again
// pnpm tsx db/drop.ts
// push change when you update schema
// pnpm run setup 

// reset the database

// pnpm run reset => pnpm tsx db/drop.ts && pnpm drizzle-kit push:pg && pnpm tsx db/seed.ts