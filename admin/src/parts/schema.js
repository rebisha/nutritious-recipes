import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import nutrient from '../schemas/objects/nutrientObject'
import ingredient from "../schemas/objects/ingredientObject"

// documents
import recipeDocument from '../schemas/document/recipeDocument'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    nutrient,
    ingredient,

    // douments
    recipeDocument
  ]),
})
