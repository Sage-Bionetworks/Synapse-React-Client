// see https://docs.synapse.org/rest/POST/statistics.html

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/ProjectFilesStatisticsRequest.html
export type ProjectFilesStatisticsRequest = {
  objectId: string
  fileDownloads: boolean
  fileUploads: boolean
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/ProjectFilesStatisticsResponse.html
export type ProjectFilesStatisticsResponse = {
  fileDownloads: MonthlyFilesStatistics
  fileUploads: MonthlyFilesStatistics
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/MonthlyFilesStatistics.html
export type MonthlyFilesStatistics = {
  lastUpdatedOn: string // note: ignore this
  months: FilesCountStatistics[]
}

// see https://docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/FilesCountStatistics.html
export type FilesCountStatistics = {
  rangeStart: string
  rangeEnd: string
  filesCount: number
  usersCount: number
}
