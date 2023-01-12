import { QueryResultBundle } from '../../lib/utils/synapseTypes'

/**
 * Mock data for the RejectDataAccessRequestModal
 */
const mockRejectionReasons: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn50683097',
      etag: 'DEFAULT',
      headers: [
        { name: 'Category', columnType: 'STRING', id: '189246' },
        {
          name: 'Category Email Prompt',
          columnType: 'LARGETEXT',
          id: '189249',
        },
        { name: 'Rejection Reason', columnType: 'STRING', id: '189247' },
        { name: 'Email Text', columnType: 'LARGETEXT', id: '189248' },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 0,
          values: [
            'Issue with the Intended Data Use Statement',
            'The information you provided on the electronic data access request tool is incomplete or requires more information. Please address the following:',
            'The user did not provide the first and last name of the Project Lead',
            'Provide the first and last name of your Project Lead.',
          ],
        },
        {
          rowId: 2,
          versionNumber: 0,
          values: [
            'Issue with the Intended Data Use Statement',
            'The information you provided on the electronic data access request tool is incomplete or requires more information. Please address the following:',
            'The user did not provide the full, unabbreviated name of their institution',
            'Provide the full, unabbreviated name of your institution.',
          ],
        },
        {
          rowId: 3,
          versionNumber: 0,
          values: [
            'Issue with the Intended Data Use Statement',
            'The information you provided on the electronic data access request tool is incomplete or requires more information. Please address the following:',
            'The user did not provide enough information in their Intended Data Use (IDU) statement',
            'Please add more information to your Intended Data Use statement. Your Intended Data Use statement should address the following points: What do you want to do? Why are you doing it? How do you want to do it?',
          ],
        },
        {
          rowId: 4,
          versionNumber: 0,
          values: [
            'Issue with Documentation',
            'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:',
            'The user submitted the wrong version of the DUC',
            'You have submitted an older version of the data use certificate (DUC). Please download and execute the updated version of the DUC. The current version is embedded in the electronic data access request tool.',
          ],
        },
        {
          rowId: 5,
          versionNumber: 0,
          values: [
            'Issue with Documentation',
            'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:',
            'The DUC is not signed by the signing official',
            'Please complete your data use certificate (DUC) with your signing official\u2019s details, including signature and date. (This should be an institutional representative with signing authority, e.g., Department Head).',
          ],
        },
        {
          rowId: 6,
          versionNumber: 0,
          values: [
            'Issue with Documentation',
            'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:',
            'The DUC is missing the PI\u2019s details and/or signature',
            'Please complete your data use certificate (DUC) with your Principal Investigator\u2019s details, including signature and date',
          ],
        },
        {
          rowId: 7,
          versionNumber: 0,
          values: [
            'Issue with Documentation',
            'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:',
            'The user did not provide the correct Synapse IDs for their team',
            'Please provide the correct Synapse usernames of the members of your research team (these must match exactly between the DUC and the electronic data access request tool).',
          ],
        },
        {
          rowId: 8,
          versionNumber: 0,
          values: [
            'Issue with Documentation',
            'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:',
            'The user\u2019s team did not sign the DUC',
            'Please ensure all members of your research team sign and date the data use certificate (DUC).',
          ],
        },
        {
          rowId: 9,
          versionNumber: 0,
          values: [
            'Issue with Documentation',
            'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:',
            'The user did not submit the applicable IRB / IEC / ERC approval for their research',
            'Please submit the applicable ethics committee approval letter (IRB/IEC/ERC) that indicates approval for your research using this dataset.',
          ],
        },
        {
          rowId: 10,
          versionNumber: 0,
          values: [
            'Other Issue',
            'Please note the following with your access request:',
            'Other',
            null,
          ],
        },
      ],
    },
  },
  maxRowsPerPage: 314,
}

export default mockRejectionReasons
