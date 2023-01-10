import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "enableModal",
      description: "Enable Modal",
      title: "Enable Modal",
      type: "boolean",
    }),
    defineField({
      name: "modalTitle",
      description: "Title of the modal (20% Orders over $50)",
      title: "Modal Title",
      type: "string",
    }),
    defineField({
      name: "modalDescription",
      description:
        "Description of the modal (For a limited time, get 20% off your order over $50)",
      title: "Modal Subtitle",
      type: "string",
    }),
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
