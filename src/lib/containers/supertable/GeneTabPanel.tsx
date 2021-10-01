import * as React from 'react'
import { useState } from 'react'
import { Tab, Tabs, Paper } from '@material-ui/core'

interface TabPanelProps {
  // children?: React.ReactNode;
  index: number;
  value: number;
}

const tabContent = [
  <div><h3>DESCRIPTION</h3><p>This gene has been nominated as a potential target for AD. Nominated targets are obtained from several sources, including the National Institute on Aging's Accelerating Medicines Partnership in Alzheimer's Disease (AMP-AD) consortium. Targets have been identified using computational analyses of high-dimensional genomic, proteomic and/or metabolomic data derived from human samples.</p></div>,
  <div><h3>DESCRIPTION</h3><p>content 2</p></div>
]


function tabPanel(props: TabPanelProps) {
  const { value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>{tabContent[value]}</div>
      )}
    </div>
  )
}

const GeneTabPanel: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper square elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Nomination" {...a11yProps(1)} />
        </Tabs>
      </Paper>
      {
        tabPanel({
          value: value,
          index: 0
        })
      }
      {
        tabPanel({
          value: value,
          index: 1
        })
      }

    </div>
  )
}

export default GeneTabPanel
