import { QueryResultBundle } from 'src/lib/utils/jsonResponses/Table/QueryResultBundle';
import { ColumnType } from 'src/lib/utils/jsonResponses/Table/ColumnType';

let mockData: QueryResultBundle = {
    concreteType: "a",
    columnModels: [{
        id: "2510",
        name: "id",
        defaultValue: "a",
        columnType: ColumnType.STRING,
        enumValues: ["a"],
        maximumSize: 5120,
        facetType: {enumeration: "a"}
    }],
    facets: [
        {
            concreteType: "a",
            facetType: {enumeration: "a"},
            columnName: "name",
            facetValues: [{value: "a", count: 1, isSelected: true}]
        }
    ],
    queryResult: {
        queryResults: {
            etag: "s",
            rows: [{
                rowId: 1,
                values: ["syn5604373"],
                versionNumber: 123,
                etag: "a"
            }],
            headers: [{
                name: "header",
                columnType: ColumnType.STRING,
                id: "a"
            }]
        },
        nextPageToken: {token: "123"}
    }
}

export default mockData