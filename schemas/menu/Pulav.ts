import { defineField, defineType } from "sanity";

export default defineType({
  name: "pulav",
  title: "Pulav",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Pulav",
      description: "(EX: Veg Pulav)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Pulav",
      description: "(EX: Vegetarian, etc.)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price of Pulav",
      description: "(EX: 9.99)",
      type: "number",
    }),
  ],
});
