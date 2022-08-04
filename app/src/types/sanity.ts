import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen"

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Recipe
 *
 *
 */
export interface Recipe extends SanityDocument {
  _type: "recipe"

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Serve — `number`
   *
   * The amount of people the recipe serves.
   */
  serve?: number

  /**
   * Nutrients — `array`
   *
   *
   */
  nutrients?: Array<SanityKeyed<Nutrition>>

  /**
   * Ingredients — `array`
   *
   *
   */
  ingredients?: Array<SanityKeyed<Ingredient>>

  /**
   * Method — `array`
   *
   *
   */
  method?: Array<SanityKeyed<string>>
}

export type Nutrition = {
  _type: "nutrition"
  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Quantity — `number`
   *
   *
   */
  quantity?: number

  /**
   * Unit — `string`
   *
   *
   */
  units?: "mg" | "g" | "kg" | "oz" | "lb" | "ml" | "l" | "tsp" | "tbsp" | "c" | "cal"
}

export type Ingredient = {
  _type: "ingredient"
  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Quantity — `number`
   *
   *
   */
  quantity?: number

  /**
   * Unit — `string`
   *
   *
   */
  units?: "mg" | "g" | "kg" | "oz" | "lb" | "ml" | "l" | "tsp" | "tbsp" | "c" | "cal"
}

export type Documents = Recipe
