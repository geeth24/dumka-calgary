import { defineField, defineType } from "sanity";

export default defineType({
  name: "haleem",
  title: "Haleem",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Haleem",
      description: "(EX: Chicken Haleem)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Haleem",
      description: "(EX: Non Vegetarian, etc.)",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price of Haleem",
      description: "(EX: 9.99)",
      type: "number",
    }),
  ],
});
