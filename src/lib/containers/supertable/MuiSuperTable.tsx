import * as React from 'react'
import { DataGrid, GridColumns, GridValueGetterParams } from '@material-ui/data-grid'
import { Tooltip, Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react'
import GeneDrawer from './GeneDrawer'
import {
  RnaModelSelections,
  RnaMetricSelections,
  RawData,
  GeneTableRowData, Tissue, RowTissueData,
} from './SuperTableTypes'
import GeneFilterDropdown from './GeneFilterDropdown'

export type superTableProps = {
  rawData: RawData[]
}

export const geneTissues = {
  cbe: {
    id: "cbe",
  },
  tcx: {
    id: "tcx",
  },
  fp: {
    id: "fp",
  },
  stg: {
    id: "stg",
  },
  phg: {
    id: "phg",
  },
  ifg: {
    id: "ifg",
  },
  dlpfc: {
    id: "dlpfc",
  }
}

const MuiSuperTable: React.FC<superTableProps> = props => {
  const { rawData } = props
  const [ modelFilter, setModelFilter ] = useState<string>(RnaModelSelections.AD_DIAGNOSIS_MALES_AND_FEMALES)
  const [ metricFilter, setMetricFilter ] = useState<string>(RnaMetricSelections.DIFFERENTIAL_EXPRESSION)
  const [ tableData, setTableData ] = useState<GeneTableRowData[]>()
  const [ hoverRow, setHoverRow ] = React.useState<string>("")
  const [ clickedGeneId, setClickedGeneId ] = React.useState<string>("")
  const [ logFcStepSize, setLogFcStepSize ] = React.useState<number>(0)
  const [ logFcMin, setLogFcMin ] = React.useState<number>()
  const logFcBucketCount:number = 10

  const getTableData = () => {
    const symbols = Array.from(new Set(rawData.map(d => d.hgnc_symbol))).sort()
    const cleanedData = rawData.map(d => {  // remove period from data
      d.model = d.model.replace(".", " ")
      return d
    })
    const models = Array.from(new Set(cleanedData.map(d => d.model)))
    const geneData = symbols.map(s => {
      return cleanedData.filter(f => f.hgnc_symbol === s)
    })

    // geneData is grouped by gene hgnc_symbol, g has length 28 = 4 models x 7 tissues
    const formattedList = geneData.map( (g, ind) => {

      // Further group data into 4 models, each has 7 tissues, thus a1 has length 4
      const tissuesByModel = models.map(a1 => g.filter(a2 => a2.model == a1))
      const obj:GeneTableRowData = {
        hgnc_symbol: g[0].hgnc_symbol,
        id: `${g[0].hgnc_symbol}-${ind}`,
        section: {
          rna: []
        }
      }

      tissuesByModel.forEach(data => {
        const model_name = `${data[0].model}`

        const differential = {
          model: model_name,
          metric: 'Differential Expression',
          tissues: data.map(d => {
            return {
              [d.tissue]: {
                logfc: d.logfc,
                adj_p_val: d.adj_p_val,
                ci_l: d.ci_l,
                ci_r: d.ci_r
              }
            }
          })
        }

        obj.section['rna'].push(differential)

        // const overall = {
        //   model: model_name,
        //   metric: 'Overall Expression',
        //   tissues: data.map(d => {
        //     return {
        //       [d.tissue]: {
        //         fc: d.fc
        //       }
        //     }
        //   })
        // }

        // const consistency = {
        //   model: model_name,
        //   metric: 'Consistency of Change',
        //   tissues: data.map(d => {
        //     return {
        //       [d.tissue]: {
        //         logfc: d.logfc,
        //         ci_l: d.ci_l,
        //         ci_r: d.ci_r
        //       }
        //     }
        //   })
        // }

        // obj.section['rna'].push(overall)
        // obj.section['rna'].push(consistency)

      })
      return obj
    })

    return formattedList

  }

  const getLogFcBucketValue = (val:number) => {
    let i = 0
    if (logFcMin) {
      while (i < (logFcBucketCount - 1) && val > logFcMin + logFcStepSize * (i + 1)) {
        i++
      }
      return i / logFcBucketCount
    } else {
      return 0
    }
  }

  const renderCellCustomization = (params: any) => {   // TODO: fix any type
    const circleDimension = 50
    const tissueName = params.field
    const tissueObj = params.value[0].tissues.filter((t:Tissue) => t[tissueName])
    const tissueValues = tissueObj[0]?.[tissueName]

    const purpleFill = "#C9AFFF"
    const purpleBorder = "1px solid #A684EE"
    const greenFill = "#8BE9D2"
    const greenBorder = "1px solid #069C81"
    const circleData = tissueValues?.adj_p_val
    const circleDiameter = circleData * circleDimension  // (1 - (Math.sqrt(circleData) * 3))
    const circleBgColor = tissueValues?.logfc >=0 ? greenFill : purpleFill
    const circleBorder = tissueValues?.logfc >=0 ? greenBorder : purpleBorder
    const circleOpacity = getLogFcBucketValue(tissueValues?.logfc)

    const uStyles = makeStyles({
      root: {
        width: `${circleDiameter}px`,
        height: `${circleDiameter}px`,
        opacity: circleOpacity,
        backgroundColor: circleBgColor,
        border: circleBorder,
        borderRadius: "50%",
        zIndex: 1,
      },
    })
    let cellStyles = uStyles()

    return (
      <>
        { params.formattedValue &&
          <Tooltip  // Note: each hover will re-render all the cells :(
            placement="top"
            PopperProps={{
              className: "super-table",
              // disablePortal: true,
            }}
            open={hoverRow === params.id}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={circleData ? circleData.toFixed(4) : "No Data"}
            // title={params.formattedValue.toFixed(4)}  TODO: fix this
          >
            <div className={"cell-lines"}>
              <div className={"cell-horz-line"}></div>
                <div className={cellStyles.root}></div>
              <div className={"cell-vert-line"}></div>
            </div>
          </Tooltip>
        }
      </>
    )
  }

  // const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event.type === 'keydown' &&
  //     ((event as React.KeyboardEvent).key === 'Tab' ||
  //       (event as React.KeyboardEvent).key === 'Shift')
  //   ) {
  //     return;
  //   }
  //   setClickedGeneId("")
  // }

  // // Ref: https://stackoverflow.com/questions/48719873/how-to-get-median-and-quartiles-percentiles-of-an-array-in-javascript-or-php
  // const calcQuantile = (arr:number[], q:number) => {
  //   const sorted = arr.sort((a, b) => a - b)
  //   const pos = (sorted.length - 1) * q
  //   const base = Math.floor(pos)
  //   const rest = pos - base
  //   if (sorted[base + 1] !== undefined) {
  //     return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  //   } else {
  //     return sorted[base];
  //   }
  // }

  // const renderHeaderCustomization = (el:any) => {  // TODO: fix any type
  //   // const stuff = el.api.getVisibleRowModels()
  //   // const data = []
  //
  //   // for (const [key, value] of stuff) {
  //   //   value[el.field] ? data.push(value[el.field]) : data.push(0) // assume 0 if missing value
  //   // }
  //   // const quantiles = [.25, .50, .75]
  //
  //
  //   return (<div style={{'display': 'block', 'flex': '1 0'}}>
  //     <div style={{'lineHeight': '2'}}>
  //       <div>{el.field}</div>
  //       <div className={"hist-bar-container"}>
  //         <span className={"hist-bar"} style={{'height': '40%'}}></span>
  //         <span className={"hist-bar"} style={{'height': '80%'}}></span>
  //         <span className={"hist-bar"} style={{'height': '60%'}}></span>
  //         <span className={"hist-bar"} style={{'height': '20%'}}></span>
  //       </div>
  //     </div>
  //
  //   </div>)
  // }

  const getFilteredRnaCellData = (origData: GridValueGetterParams) => {

    const filtered = origData.row.section.rna.filter((a:RowTissueData) => a.model === modelFilter)
      .filter((b:RowTissueData) =>  b.metric === metricFilter)
    return filtered
  }

  const columns = [
    {
      field: "id",
      hide: true
    }, {
      field: "hgnc_symbol",
      HeaderName: "Gene Symbol"
    }, {
      field: "model",
      HeaderName: "Model",
      width: 300,
      valueGetter: (params: GridValueGetterParams) => {
        const data = getFilteredRnaCellData(params)
        return data[0].model
      }
    }, {
      field: geneTissues.cbe.id.toUpperCase(),
      HeaderName: geneTissues.cbe.id,
      align: 'center',
      width: 150,
      renderCell: renderCellCustomization,
      // renderHeader: renderHeaderCustomization,
      valueGetter: (params: GridValueGetterParams) => {
        return getFilteredRnaCellData(params)
      }
    }, {
      field: geneTissues.tcx.id.toUpperCase(),
      HeaderName: geneTissues.tcx.id,
      align: 'center',
      renderCell: renderCellCustomization,
      valueGetter: (params: GridValueGetterParams) => {
        return getFilteredRnaCellData(params)
      }
    } , {
      field: geneTissues.fp.id.toUpperCase(),
      HeaderName: geneTissues.fp.id,
      align: 'center',
      renderCell: renderCellCustomization,
      valueGetter: (params: GridValueGetterParams) => {
        return getFilteredRnaCellData(params)
      }
    } , {
      field: geneTissues.stg.id.toUpperCase(),
      HeaderName: geneTissues.fp.id,
      renderCell: renderCellCustomization,
      valueGetter: (params: GridValueGetterParams) => {
        return getFilteredRnaCellData(params)
      }
    }, {
      field: geneTissues.phg.id.toUpperCase(),
      HeaderName: geneTissues.phg.id.toUpperCase(),
      renderCell: renderCellCustomization,
      valueGetter: (params: GridValueGetterParams) => {
        return getFilteredRnaCellData(params)
      }
    } , {
      field: geneTissues.ifg.id.toUpperCase(),
      HeaderName: geneTissues.ifg.id.toUpperCase(),
      renderCell: renderCellCustomization,
      valueGetter: (params: GridValueGetterParams) => {
        return getFilteredRnaCellData(params)
      }
    } , {
      field: geneTissues.dlpfc.id.toUpperCase(),
      HeaderName: geneTissues.dlpfc.id.toUpperCase(),
      renderCell: renderCellCustomization,
      valueGetter: (params: GridValueGetterParams) => {
        return getFilteredRnaCellData(params)
      }
    }
  ]

  useEffect(() => {
    const logFc: number[] = rawData.map(d => d.logfc)
    const tableData:GeneTableRowData[] = getTableData()
    const logFcMin = Math.min(...logFc)
    setLogFcStepSize((Math.abs(logFcMin) + Math.abs(Math.max(...logFc))) / logFcBucketCount )
    setLogFcMin(Math.min(...logFc))
    setTableData(tableData)
  }, [rawData])

  return(<>
    <div>RNA</div>

    <GeneFilterDropdown
      label={"Metric"}
      defaultItem={metricFilter}
      dropDownItems={RnaMetricSelections}
      onChangeCallback={(event) => {
        setMetricFilter(event.target.value as string)
      }}
    />

    <GeneFilterDropdown
      label={"Model"}
      defaultItem={modelFilter}
      dropDownItems={RnaModelSelections}
      onChangeCallback={(event) => {
        setModelFilter(event.target.value as string)
      }}
      style={{"marginLeft": "100px"}}
    />

    <div>
      {
        // console.log("how many table data", tableData)
      }
      { tableData &&  // style={{ height: 400, width: '100%' }}
        <DataGrid
          className={"super-table"}
          autoHeight
          rows={tableData!}
          columns={columns as GridColumns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection

          // filterModel={{
          //   items: [
          //     { columnField: 'model', operatorValue: 'equals', value: modelFilter },
          //   ],
          // }}

          onRowOver={(el) => {
            setHoverRow(el.id as string)
          }}
          onRowOut={() => {setHoverRow("")}}
          disableSelectionOnClick
          onRowClick={(el) => {
            setClickedGeneId(el.row.hgnc_symbol)
          }}
        />
      }

    </div>
    {
      <Drawer
        anchor={"right"}
        open={ clickedGeneId.length > 0 } //
        // onClose={closeDrawer}
      >
        <GeneDrawer
          geneId={clickedGeneId}
          onHideCallback={() => {
            setClickedGeneId("")
          }}
        />
      </Drawer>
    }

  </>)
}

export default MuiSuperTable
