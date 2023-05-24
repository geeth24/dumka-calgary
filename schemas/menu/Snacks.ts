import { defineField, defineType } from "sanity";

export default defineType({
  name: "snacks",
  title: "Snacks",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Snack",
      description: "(EX: Onion Pakoda)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Snack",
      description: "(EX: Vegetarian, etc.)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price of Snack",
      description: "(EX: 9.99)",
      type: "number",
    }),
  ],
});
