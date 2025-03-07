import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Product = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name_es: column.text({ unique: false }),
    name_en: column.text({ unique: false }),
    price: column.number({ unique: false }),
    summary_es: column.text({ unique: false }),
    summary_en: column.text({ unique: false }),
    description_es: column.text({ unique: false }),
    description_en: column.text({ unique: false }),
    recomendation_es: column.text({ unique: false }),
    recomendation_en: column.text({ unique: false }),
    image: column.text({ unique: false }),
    alt: column.text({ unique: false }),
    category: column.text({ unique: false }),
    capacity: column.text({ unique: false }),
  }
});

const Service = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name_es: column.text({ unique: false }),
    name_en: column.text({ unique: false }),
    price: column.number({ unique: false }),
    summary_es: column.text({ unique: false }),
    summary_en: column.text({ unique: false }),
    description_es: column.text({ unique: false }),
    description_en: column.text({ unique: false }),
    recomendation_es: column.text({ unique: false }),
    recomendation_en: column.text({ unique: false }),
    image: column.text({ unique: false }),
    alt: column.text({ unique: false }),
    benefits_es: column.json({ unique: false }),
    benefits_en: column.json({ unique: false }),
    care_es: column.json({ unique: false }),
    care_en: column.json({ unique: false }),
  }
});


export default defineDb({
  tables: {
    Product,
    Service
  }
});
