import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Product = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
    price: column.number({ unique: false }),
  }
});


export default defineDb({
  tables: {
    Product
  }
});
