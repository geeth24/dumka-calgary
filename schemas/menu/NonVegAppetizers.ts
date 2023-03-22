import { defineField, defineType } from "sanity";

export default defineType({
  name: "NonVegAppetizers",
  title: "Non-Vegetarian Appetizers",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Appetizer",
      description: "(EX: Chicken 65)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Appetizer",
      description: "(EX: Chicken, etc.)",
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
