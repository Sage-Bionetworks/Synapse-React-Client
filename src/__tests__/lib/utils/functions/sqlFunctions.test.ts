import {
   parseEntityIdFromSqlStatement
  } from '../../../../lib/utils/functions/sqlFunctions'
  

  describe('parseEntityIdFromSqlStatement', () => {
    it('should get entityId correctly', () => {
        expect(parseEntityIdFromSqlStatement('SELECT * FROM syn123')).toBe('syn123')
        expect(parseEntityIdFromSqlStatement('SELECT * from syn1234')).toBe('syn1234')
        expect(parseEntityIdFromSqlStatement('SELECT * from somethingweird')).toBe('')
        expect(parseEntityIdFromSqlStatement('SELECT * from     syn12345')).toBe('syn12345')
      })
  })

 