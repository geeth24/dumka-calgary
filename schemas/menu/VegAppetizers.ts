import { defineField, defineType } from "sanity";

export default defineType({
  name: "VegAppetizers",
  title: "Vegetarian Appetizers",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Appetizer",
      description: "(EX: Gobi Manchurian)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Appetizer",
      description: "(EX: Vegetarian, etc.)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price of Appetizer",
      description: "(EX: 9.99)",
      type: "number",
    }),
  ],
});
