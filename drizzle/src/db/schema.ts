import {text, bigint, boolean, date, foreignKey, int, mysqlEnum, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

const commonFields = {
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow(),
    isValid: boolean('isValid').default(true),
    isActive: boolean('isActive').default(true),
    isDeleted: boolean('isDeleted').default(false),
    DBTimestamp: timestamp('DBTimestamp').defaultNow(),
};

export const Designer = mysqlTable('Designer', {
    id: bigint('id', { mode: "number" }).primaryKey().autoincrement(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    address: varchar('address', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 255 }).notNull().unique(),
    identityProof: varchar('identityProof', { length: 255 }).notNull(),
    imageURL: varchar('imageURL', { length: 255 }).notNull(),
    bannerURL: varchar('bannerURL', { length: 255 }),
    ...commonFields,
});

export const OTP = mysqlTable('otp', {
    id: bigint('id', { mode: "number" }).primaryKey().autoincrement(),
    email: varchar('email', { length: 255 }).notNull(),
    otp: varchar('otp', { length: 255 }).notNull(),
    ...commonFields,
}, (table) => {
    return {
        otpReference: foreignKey({
            columns: [table.email],
            foreignColumns: [Designer.email],
        })
    }
});

export const Quote = mysqlTable('quote', {
    id: bigint('id', { mode: "number" }).primaryKey().autoincrement(),
    designerId: bigint('designerId', { mode: "number" }).notNull().references(() => Designer.id),
    spocName: varchar('spocName', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 255 }).notNull(),
    address: varchar('address', { length: 255 }).notNull(),
    leatherCategory: varchar('leatherCategory', { length: 255 }).notNull(),
    units: int('units').notNull(),
    productName: varchar('productName', { length: 255 }).notNull(),
    color: varchar('color', { length: 255 }).notNull(),
    designPrototype: varchar('designPrototype', { length: 255 }).notNull(),
    deliveryDate: date('deliveryDate').notNull(),
    checklist: varchar('checklist', { length: 255 }).notNull(),
    additionalRequest: varchar('additionalRequest', { length: 255 }),
    status: mysqlEnum('status', ['pending', 'approved', 'rejected']).default('pending'),
    ...commonFields,
});
