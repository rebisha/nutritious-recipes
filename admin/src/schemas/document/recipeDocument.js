export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "serve",
      title: "Serve",
      description: "The amount of people the recipe serves.",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      name: "nutrients",
      title: "Nutrients",
      type: "array",
      of: [{ type: "nutrition" }],
      validation: Rule => Rule.required(),
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "ingredient" }],
      validation: Rule => Rule.required(),
    },
    {
      name: "method",
      title: "Method",
      type: "array",
      of: [{ type: "text" }],
      validation: Rule => Rule.required(),
    },
  ],
}