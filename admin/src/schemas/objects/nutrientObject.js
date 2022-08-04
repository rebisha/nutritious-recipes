import units from "../data/units"

export default {
  name: "nutrition",
  title: "Nutrition",
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
