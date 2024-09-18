import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Product = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
    price: column.number({ unique: false }),
  }
});

const Services = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
    price: column.number({ unique: false }),
    summary: column.text({ unique: true }),
    description: column.text({ unique: true }),
    recomendation: column.text({ unique: false }),
    image: column.text({ unique: false }),
    alt: column.text({ unique: false }),
  }
});


export default defineDb({
  tables: {
    Product
  }
});
