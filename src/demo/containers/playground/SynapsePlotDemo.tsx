import * as React from 'react'
import SynapsePlot from 'lib/containers/widgets/SynapsePlot'

type SynapsePlotDemoProps = {
  token: string
}

export const SynapsePlotDemo: React.FunctionComponent<SynapsePlotDemoProps> = ({token}) => {
  return (
    <SynapsePlot
      token={token}
      widgetparamsMapped={{
        query:'SELECT \'date\', survey_1, survey_2, survey_3, survey_4 FROM syn22314856',
        title:'New Participants Per Survey Per Day',
        xtitle:'Date',
        ytitle: 'Count',
        type: 'scatter',
        horizontal: 'true',
        // xaxistype:,
        showlegend:'true'
      }
      }      
    />
  )
}