export enum ColumnSingleValueFilterOperator {
  LIKE = 'LIKE', // The LIKE operation. Use wildcard '%' in value sting for prefix/suffix matching.
}

export interface ColumnSingleValueQueryFilter extends QueryFilter {
  concreteType: 'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter'
  operator: ColumnSingleValueFilterOperator // Determines the filter operation to perform
  values: string[] // Values to used with the filter.
  // Multiple values will be joined in an OR relationship.
}

export interface QueryFilter {
  concreteType: string
  columnName: string
  operator: string
  values: string[]
}
