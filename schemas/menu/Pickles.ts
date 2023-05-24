import { defineField, defineType } from "sanity";

export default defineType({
  name: "pickles",
  title: "Pickles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Pickles",
      description: "(EX: Tomato Pickles)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Pickles",
      description: "(EX: Vegetarian, etc.)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price of Pickles",
      description: "(EX: 9.99)",
      type: "number",
    }),
  ],
});
