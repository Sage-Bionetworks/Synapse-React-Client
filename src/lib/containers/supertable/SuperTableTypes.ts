// TODO: move to the typing folder

export enum RnaModelSelections {
  AD_DIAGNOSIS_MALES_AND_FEMALES = "AD Diagnosis (males and females)",
  DIAGNOSIS_MALES = "Diagnosis Sex (males only)",
  DIAGNOSIS_FEMALES = "Diagnosis Sex (females only)",
  DIAGNOSIS_AOD_MALES_AND_FEMALES = "Diagnosis AOD (males and females)"
}

export enum RnaMetricSelections {
  // OVERALL_EXPRESSION = "Overall Expression",
  DIFFERENTIAL_EXPRESSION = "Differential Expression",
}

export type RawData = {
  ensembl_gene_id: string
  hgnc_symbol: string
  logfc: number
  fc: number
  ci_l: number
  ci_r: number
  adj_p_val: number
  tissue: string
  study: string
  model: string
}

export type GeneTableRowData = {
  hgnc_symbol: string | undefined
  id: string | undefined
  section: {
    rna: RowTissueData[]
  }
}

export type RowTissueData = {
  model: string | undefined
  metric: string | undefined
  tissues: Tissue[] | undefined
}

export type Tissue = {
  CBE?: MetricValues
  DLPFC?: MetricValues
  FP?: MetricValues
  IFG?: MetricValues
  PHG?: MetricValues
  STG?: MetricValues
  TCX?: MetricValues
}

export type MetricValues = {
  medianlogcpm?: number
  fc?: number
  logfc?: number
  adj_p_val?: number
  ci_l?: number
  ci_r?: number
}
