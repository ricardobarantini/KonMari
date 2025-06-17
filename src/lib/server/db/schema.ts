import { sqliteTable, foreignKey, integer, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	age: integer('age')
});

export const inventoryTable = sqliteTable(
	'inventory',
	{
		id: integer().primaryKey({ autoIncrement: true }),
		item: text().notNull(),
		description: text(),
		quantity: integer().default(1),
		image: text({ mode: 'json' }),
		inventory_id: integer()
	},
	(table) => [
		foreignKey({
			columns: [table.inventory_id],
			foreignColumns: [table.id],
			name: 'custom_fk'
		})
	]
);
