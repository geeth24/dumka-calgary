import { defineField, defineType } from "sanity";

export default defineType({
  name: "chats",
  title: "Chats",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Chat",
      description: "(EX: Veg Chat)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Chat",
      description: "(EX: Vegetarian, etc.)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price of Chat",
      description: "(EX: 9.99)",
      type: "number",
    }),
  ],
});
