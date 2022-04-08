import {
  parseEntityIdFromSqlStatement,
  insertConditionsFromSearchParams,
  SQLOperator,
  formatSQLFromParser,
  parseEntityIdAndVersionFromSqlStatement,
} from '../../../../lib/utils/functions/sqlFunctions'
import { lexer } from 'sql-parser'

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

describe('insertConditionsFromSearchParams', () => {
  it('should parse correctly', () => {
    let sql =
      'SELECT id AS "File ID", assay, dataType, diagnosis, tumorType,  species, individualID, fileFormat, dataSubtype, nf1Genotype as "NF1 Genotype", nf2Genotype as "NF2 Genotype", studyName, fundingAgency, consortium, name AS "File Name", accessType, accessTeam FROM syn16858331 WHERE resourceType = \'experimentalData\''
    let searchParams = {
      QueryWrapper0:
        '{"sql":"SELECT id AS "File ID", assay, dataType, diagnosis, tumorType,  species, individualID,  fileFormat, dataSubtype, nf1Genotype as \\"NF1 Genotype\\", nf2Genotype as \\"NF2 Genotype\\", studyName, fundingAgency, consortium, name AS \\"File Name\\", accessType, accessTeam  FROM syn16858331 WHERE resourceType = \'experimentalData\'","limit":25,"offset":0,"selectedFacets":[{"concreteType":"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest","columnName":"assay","facetValues":["exomeSeq"]}]}',
    }
    let operator: SQLOperator = 'LIKE'
    // if no search params are there, then it should return the input sql
    expect(insertConditionsFromSearchParams(sql, undefined, operator)).toBe(sql)
    expect(insertConditionsFromSearchParams(sql, {}, operator)).toBe(sql)
    // if the only search params set are from the QueryWrapper, then it should return the input sql
    expect(insertConditionsFromSearchParams(sql, searchParams, operator)).toBe(
      sql,
    )
  })
  it('should insert correctly in versioned query', () => {
    let sql = 'SELECT * FROM syn21783965.1'
    let searchParams = {
      study: 'syn21754060',
    }
    let operator: SQLOperator = '='
    // if no search params are there, then it should return the input sql
    const result = insertConditionsFromSearchParams(sql, searchParams, operator)
    const expectedResult =
      "SELECT *\n  FROM syn21783965.1\n  WHERE (`study` = 'syn21754060')"
    expect(result).toBe(expectedResult)
  })
  it('should insert correctly in versioned query with group by', () => {
    let sql = 'SELECT * FROM syn21783965.1 GROUP BY x'
    let searchParams = {
      study: 'syn21754060',
    }
    let operator: SQLOperator = '='
    // if no search params are there, then it should return the input sql
    const result = insertConditionsFromSearchParams(sql, searchParams, operator)
    const expectedResult =
      "SELECT *\n  FROM syn21783965.1\n  WHERE (`study` = 'syn21754060')\n  GROUP BY `x`"
    expect(result).toBe(expectedResult)
  })
  it('should insert correctly in versioned query with ORDER BY', () => {
    let sql = 'SELECT * FROM syn21783965.1 ORDER BY study'
    let searchParams = {
      study: 'syn21754060',
    }
    let operator: SQLOperator = '='
    // if no search params are there, then it should return the input sql
    const result = insertConditionsFromSearchParams(sql, searchParams, operator)
    const expectedResult =
      "SELECT *\n  FROM syn21783965.1\n  WHERE (`study` = 'syn21754060')\n  ORDER BY `study` ASC"
    expect(result).toBe(expectedResult)
  })
})

describe('formatSQLFromParser tests', () => {
  it('double strings should be escaped as literals', () => {
    const doubleSqlStr = 'select * from syn123 where col="hello"'
    const tokens = lexer.tokenize(doubleSqlStr)
    const sql = formatSQLFromParser(tokens)
    expect(sql.indexOf('"')).toEqual(-1)
  })
  it('versioned tables should not break the parser', () => {
    const versionTableSql = 'select * from syn123.12'
    const tokens = lexer.tokenize(versionTableSql)
    const sql = formatSQLFromParser(tokens)
    expect(sql).toEqual('SELECT *\n  FROM syn123.12')
  })
})
