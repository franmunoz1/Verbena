import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Product = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: false }),
    price: column.number({ unique: false }),
    summary: column.text({ unique: false }),
    description: column.text({ unique: false }),
    recomendation: column.text({ unique: false }),
    image: column.text({ unique: false }),
    alt: column.text({ unique: false }),
    category: column.text({ unique: false }),
  }
});

const Service = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: false }),
    price: column.number({ unique: false }),
    summary: column.text({ unique: false }),
    description: column.text({ unique: false }),
    recomendation: column.text({ unique: false }),
    image: column.text({ unique: false }),
    alt: column.text({ unique: false }),
  }
});


export default defineDb({
  tables: {
    Product,
    Service
  }
});
