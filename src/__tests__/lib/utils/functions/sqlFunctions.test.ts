import {
   parseEntityIdFromSqlStatement, insertConditionsFromSearchParams, SQLOperator
  } from '../../../../lib/utils/functions/sqlFunctions'
  

  describe('parseEntityIdFromSqlStatement', () => {
    it('should get entityId correctly', () => {
        expect(parseEntityIdFromSqlStatement('SELECT * FROM syn123')).toBe('syn123')
        expect(parseEntityIdFromSqlStatement('SELECT * from syn1234')).toBe('syn1234')
        expect(parseEntityIdFromSqlStatement('SELECT * from somethingweird')).toBe('')
        expect(parseEntityIdFromSqlStatement('SELECT * from     syn12345')).toBe('syn12345')
      })
  })

  describe('insertConditionsFromSearchParams', () => {
    it('should parse correctly', () => {
      let sql = "SELECT id AS \"File ID\", assay, dataType, diagnosis, tumorType,  species, individualID, fileFormat, dataSubtype, nf1Genotype as \"NF1 Genotype\", nf2Genotype as \"NF2 Genotype\", studyName, fundingAgency, consortium, name AS \"File Name\", accessType, accessTeam FROM syn16858331 WHERE resourceType = 'experimentalData'"
      let searchParams =
      {
        QueryWrapper0: "{\"sql\":\"SELECT id AS \"File ID\", assay, dataType, diagnosis, tumorType,  species, individualID,  fileFormat, dataSubtype, nf1Genotype as \\\"NF1 Genotype\\\", nf2Genotype as \\\"NF2 Genotype\\\", studyName, fundingAgency, consortium, name AS \\\"File Name\\\", accessType, accessTeam  FROM syn16858331 WHERE resourceType = 'experimentalData'\",\"limit\":25,\"offset\":0,\"selectedFacets\":[{\"concreteType\":\"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest\",\"columnName\":\"assay\",\"facetValues\":[\"exomeSeq\"]}]}"
      }
      let operator:SQLOperator = "LIKE"
      // if no search params are there, then it should return the input sql
      expect(insertConditionsFromSearchParams({}, sql, operator)).toBe(sql)
      // if the only search params set are from the QueryWrapper, then it should return the input sql
      expect(insertConditionsFromSearchParams(searchParams, sql, operator)).toBe(sql)
    })
  })
 