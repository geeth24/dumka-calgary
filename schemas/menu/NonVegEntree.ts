import { defineField, defineType } from "sanity";

export default defineType({
  name: "nonvegentrees",
  title: "Non-Vegetarian Entrees",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of Non Veg Entree",
      description: "(EX: Butter Chicken)",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type of Non Veg Entree",
      description: "(EX: Chicken, etc.)",
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
