export enum ColumnSingleValueFilterOperator {
  LIKE = 'LIKE', // The LIKE operation. Use wildcard '%' in value sting for prefix/suffix matching.
}
export enum ColumnMultiValueFunction {
  HAS = 'HAS', // HAS function on multi-value columns, same as the predicate: 'columnName HAS ()'
  HAS_LIKE = 'HAS_LIKE' // HAS_LIKE function on multi-value columns, same as the predicate: 'columnName HAS_LIKE ()'. Can be used for pattern matching using wildcard %.
}

// A filter using a single value against a column. Values within the values list have an OR relationship
export interface ColumnSingleValueQueryFilter extends QueryFilter {
  concreteType: 'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter'
  operator: ColumnSingleValueFilterOperator // Determines the filter operation to perform
  values: string[] // Values to used with the filter.
}

// A filter that applies multi-value columns functions.
export interface ColumnMultiValueFunctionQueryFilter extends QueryFilter {
  concreteType: 'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter'
  function: ColumnMultiValueFunction // Determines the filter operation to perform
  values: string[] // Values to used with the filter.
}

export interface QueryFilter {
  concreteType: string
  columnName: string // name of the column to filter
  operator?: ColumnSingleValueFilterOperator
  function?: ColumnMultiValueFunction
  values: string[]
}
