import {
  parseEntityIdFromSqlStatement,
  SQLOperator,
  parseEntityIdAndVersionFromSqlStatement,
  generateQueryFilterFromSearchParams,
} from '../../../../lib/utils/functions/sqlFunctions'
import {
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
} from '../../../../lib/utils/synapseTypes/Table/QueryFilter'

describe('parseEntityIdFromSqlStatement', () => {
  it('should get entityId correctly', () => {
    expect(parseEntityIdFromSqlStatement('SELECT * FROM syn123')).toBe('syn123')
    expect(parseEntityIdFromSqlStatement('SELECT * from syn1234')).toBe(
      'syn1234',
    )
    expect(parseEntityIdFromSqlStatement('SELECT * from somethingweird')).toBe(
      '',
    )
    expect(parseEntityIdFromSqlStatement('SELECT * from     syn12345')).toBe(
      'syn12345',
    )
    expect(parseEntityIdFromSqlStatement('SELECT * from     syn12345.13')).toBe(
      'syn12345',
    )
  })
})
describe('parseEntityIdAndVersionFromSqlStatement', () => {
  it('should get entityId and version correctly', () => {
    expect(
      parseEntityIdAndVersionFromSqlStatement('SELECT * FROM syn123'),
    ).toEqual({
      entityId: 'syn123',
      versionNumber: undefined,
    })
    expect(
      parseEntityIdAndVersionFromSqlStatement('SELECT * from syn1234'),
    ).toEqual({
      entityId: 'syn1234',
      versionNumber: undefined,
    })
    expect(
      parseEntityIdAndVersionFromSqlStatement('SELECT * from somethingweird'),
    ).toEqual(null)
    expect(
      parseEntityIdAndVersionFromSqlStatement('SELECT * from     syn12345'),
    ).toEqual({
      entityId: 'syn12345',
      versionNumber: undefined,
    })
    expect(
      parseEntityIdAndVersionFromSqlStatement('SELECT * from     syn12345.13'),
    ).toEqual({ entityId: 'syn12345', versionNumber: 13 })
  })
})

describe('generateQueryFilterFromSearchParams', () => {
  it('Handles no search params', () => {
    const searchParams = {
      QueryWrapper0:
        '{"sql":"SELECT id AS "File ID", assay, dataType, diagnosis, tumorType,  species, individualID,  fileFormat, dataSubtype, nf1Genotype as \\"NF1 Genotype\\", nf2Genotype as \\"NF2 Genotype\\", studyName, fundingAgency, consortium, name AS \\"File Name\\", accessType, accessTeam  FROM syn16858331 WHERE resourceType = \'experimentalData\'","limit":25,"offset":0,"selectedFacets":[{"concreteType":"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest","columnName":"assay","facetValues":["exomeSeq"]}]}',
    }
    const operator: SQLOperator = 'LIKE'
    // if no search params are there, then it should return undefined
    expect(generateQueryFilterFromSearchParams(undefined, operator)).toBe(
      undefined,
    )
    expect(generateQueryFilterFromSearchParams({}, operator)).toBe(undefined)
    // if the only search params set are from the QueryWrapper, then it should return the input sql
    expect(generateQueryFilterFromSearchParams(searchParams, operator)).toBe(
      undefined,
    )
  })

  it("Omits params beginning with 'QueryWrapper' when other searchParams are present", () => {
    let searchParams = {
      QueryWrapper0:
        '{"sql":"SELECT id AS "File ID", assay, dataType, diagnosis, tumorType,  species, individualID,  fileFormat, dataSubtype, nf1Genotype as \\"NF1 Genotype\\", nf2Genotype as \\"NF2 Genotype\\", studyName, fundingAgency, consortium, name AS \\"File Name\\", accessType, accessTeam  FROM syn16858331 WHERE resourceType = \'experimentalData\'","limit":25,"offset":0,"selectedFacets":[{"concreteType":"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest","columnName":"assay","facetValues":["exomeSeq"]}]}',
      study: 'syn21754060',
    }
    let operator: SQLOperator = '='
    // if no search params are there, then it should return the input sql
    const result = generateQueryFilterFromSearchParams(searchParams, operator)
    const expectedResult: ColumnSingleValueQueryFilter[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'study',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: ['syn21754060'],
      },
    ]
    expect(result).toStrictEqual(expectedResult)
  })

  it('Generates a queryFilter for EQUALS', () => {
    let searchParams = {
      study: 'syn21754060',
    }
    let operator: SQLOperator = '='
    // if no search params are there, then it should return the input sql
    const result = generateQueryFilterFromSearchParams(searchParams, operator)
    const expectedResult: ColumnSingleValueQueryFilter[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'study',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: ['syn21754060'],
      },
    ]
    expect(result).toStrictEqual(expectedResult)
  })

  it('Generates a queryFilter for LIKE', () => {
    let searchParams = {
      study: 'someValue',
    }
    let operator: SQLOperator = 'LIKE'
    // if no search params are there, then it should return the input sql
    const result = generateQueryFilterFromSearchParams(searchParams, operator)
    const expectedResult: ColumnSingleValueQueryFilter[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'study',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: ['%someValue%'],
      },
    ]
    expect(result).toStrictEqual(expectedResult)
  })

  it('Omits the syn prefix when querying a SynID with LIKE', () => {
    let searchParams = {
      study: 'syn21754060',
    }
    let operator: SQLOperator = 'LIKE'
    // if no search params are there, then it should return the input sql
    const result = generateQueryFilterFromSearchParams(searchParams, operator)
    const expectedResult: ColumnSingleValueQueryFilter[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'study',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: ['%21754060%'],
      },
    ]
    expect(result).toStrictEqual(expectedResult)
  })

  it('Generates a queryFilter for HAS', () => {
    let searchParams = {
      study: 'syn21754060',
    }
    let operator: SQLOperator = 'HAS'
    // if no search params are there, then it should return the input sql
    const actual = generateQueryFilterFromSearchParams(searchParams, operator)
    const expectedResult: ColumnMultiValueFunctionQueryFilter[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
        columnName: 'study',
        function: ColumnMultiValueFunction.HAS,
        values: ['syn21754060'],
      },
    ]
    expect(actual).toStrictEqual(expectedResult)
  })

  it('works with multiple searchParams and a WHERE clause already present', () => {
    const searchParams = {
      grant: 'GRANT',
      grantTwo: 'VALUE TWO',
    }
    const expectedResults: ColumnSingleValueQueryFilter[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'grant',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: ['%GRANT%'],
      },
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'grantTwo',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: ['%VALUE TWO%'],
      },
    ]

    const actual = generateQueryFilterFromSearchParams(searchParams)
    expect(actual).toStrictEqual(expectedResults)
  })

  it('works with multiple conditions in the HAS clause', () => {
    const operator = 'HAS'
    const searchParams = {
      APPLE: 'SMITH,FUJI',
    }

    const expectedResults: ColumnMultiValueFunctionQueryFilter[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
        columnName: 'APPLE',
        function: ColumnMultiValueFunction.HAS,
        values: ['SMITH', 'FUJI'],
      },
    ]

    const result = generateQueryFilterFromSearchParams(searchParams, operator)
    expect(result).toStrictEqual(expectedResults)
  })
})
