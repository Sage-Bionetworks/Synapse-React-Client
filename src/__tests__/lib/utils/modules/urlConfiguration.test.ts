import { insertConditionsFromSearchParams } from '../../../../lib/utils/modules/sqlFunctions'

describe('inserting into WHERE clause from URL works', () => {
  const searchParams = {
    grant: 'GRANT',
  }
  it('works without a WHERE clause already present', () => {
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(searchParams, sqlWithoutWhere)
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE (`grant` LIKE '%GRANT%')",
    )
  })

  it('works with multiple searchParams and a WHERE clause already present', () => {
    const searchParams = {
      grant: 'GRANT',
      grantTwo: 'VALUE TWO',
    }
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(searchParams, sqlWithoutWhere)
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grantTwo` LIKE '%VALUE TWO%') AND (`grant` LIKE '%GRANT%'))",
    )
  })

  it('works with a WHERE clause present already and other conditions', () => {
    const sqlWithWhere = 'SELECT * FROM syn1234567 WHERE APPLE = SMITH LIMIT 1'
    const sql = insertConditionsFromSearchParams(searchParams, sqlWithWhere)
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grant` LIKE '%GRANT%') AND (`APPLE` = `SMITH`))\n  LIMIT 1",
    )
  })
})

describe('inserting into WHERE clause from URL works with an equals operator', () => {
  const searchParams = {
    grant: 'GRANT',
  }
  const operator = '='
  it('works without a WHERE clause already present', () => {
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(
      searchParams,
      sqlWithoutWhere,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE (`grant` = 'GRANT')",
    )
  })

  it('works with multiple searchParams and a WHERE clause already present', () => {
    const searchParams = {
      grant: 'GRANT',
      grantTwo: 'VALUE TWO',
    }
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(
      searchParams,
      sqlWithoutWhere,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grantTwo` = 'VALUE TWO') AND (`grant` = 'GRANT'))",
    )
  })

  it('works with a WHERE clause present already and other conditions', () => {
    const sqlWithWhere = 'SELECT * FROM syn1234567 WHERE APPLE = SMITH LIMIT 1'
    const sql = insertConditionsFromSearchParams(
      searchParams,
      sqlWithWhere,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grant` = 'GRANT') AND (`APPLE` = `SMITH`))\n  LIMIT 1",
    )
  })
})
