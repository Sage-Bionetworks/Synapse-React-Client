/**
 * TypeScript doesn't support nominal typing, but we can utilize the concreteType field in Synapse objects to identify the class of an object. This function
 * will return a function that can be used as a type guard using the concreteType field.
 *
 * Unfortunately, we cannot map concreteType strings to defined types, so we can't use static typing to determine the correct use of this function, so be
 * careful to ensure the type and concreteType string match when calling this function. This method should only be called once for each type.
 *
 * Generic `TTypeChecked` is the type that you are trying to verify/assert.
 * Generic `ObjectType` is optional and can be used to require a specific interface or type before calling this method. Defaults to `unknown`.
 *
 * @param expectedConcreteType
 * @returns a function that checks if a given object is an instance of `TTypeChecked` using the expected concrete type value.
 */
export function isTypeViaConcreteTypeFactory<
  TTypeChecked extends ObjectType, // The type that you are trying to verify/assert
  ObjectType = unknown,
>(expectedConcreteType: string) {
  return (object: ObjectType): object is TTypeChecked =>
    !!(
      object &&
      typeof object === 'object' &&
      'concreteType' in object &&
      object['concreteType'] === expectedConcreteType
    )
}
