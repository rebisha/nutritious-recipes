import units from "../data/units"

export default {
  name: "ingredient",
  title: "Ingredient",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      name: "units",
      title: "Unit",
      type: "string",
      options: {
        list: [...units],
      },
    },
  ],
}
