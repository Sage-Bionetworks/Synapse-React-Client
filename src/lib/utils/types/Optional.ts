/**
 * Makes fields for a type optional.
 * For example:
 *
 * type FooBarBaz = {
 *   foo: string
 *   bar: string
 *   baz: string
 * }
 *
 * To make only  the 'baz' property optional
 * type OptionalBaz = Optional<FooBarBaz, 'baz'>
 * Would result in :
 * RequireBar === {
 *   foo: string
 *   bar: string
 *   baz?: string // this is now optional
 * }
 *
 * To make multiple properties optional, use a String Literal union:
 * type OptionalBarBaz = Optional<FooBarBaz, 'bar' | 'baz'>
 *
 * @see https://stackoverflow.com/a/54178819
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
