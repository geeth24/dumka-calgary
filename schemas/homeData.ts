import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      description: "Title of the page (A Celebration Of)",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "firstSubtitle",
      description: "First Subtitle of the page (Indian Culture.)",
      title: "First Subtitle",
      type: "string",
    }),
    defineField({
      name: "secondSubtitle",
      description: "First Subtitle of the page (Flavors.)",
      title: "Second Subtitle",
      type: "string",
    }),
    defineField({
      name: "thirdSubtitle",
      description: "First Subtitle of the page (Hospitality.)",
      title: "Third Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "homeImage",
      title: "Home Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
