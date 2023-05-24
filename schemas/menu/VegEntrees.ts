import { defineField, defineType } from "sanity";

export default defineType({
  name: "vegentrees",
  title: "Vegetarian Entrees",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Veg Entree",
      description: "(EX: Malai Kofta)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Veg Entree",
      description: "(EX: Vegetarian, etc.)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price of Entree",
      description: "(EX: 9.99)",
      type: "number",
    }),
  ],
});
