```jsx
import rawData from '../../mocks/distribution_data.json'
import PlotlyWrapper from './PlotlyWrapper'

console.log(rawData)

const x1 = [];
for (let i = 0; i < 400; i++) {
  const k = Math.random();
  x1.push(k * 4);
}

const x2 = x1.filter(x => x > 2.1 && x < 2.40)

const histData = [
  {
    x: x1,
    name: "All Genetics Scores",
    autobinx: false,
    histnorm: "Number of Genes",
    marker: {
      color: "rgba(166, 132, 238, 0.25)",
    },
    opacity: 0.5,
    type: "histogram",
    xbins: {
      end: 3,
      size: 0.3,
      start: 0
    },
    // hoverinfo: 'none',
  },
  {
    x: x2,
    name: "Score: 2.3",
    autobinx: false,
    histnorm: "Number of Genes",
    marker: {
      color: "rgba(166, 132, 238, 1)"
    },
    opacity: 0.5,
    type: "histogram",
    xbins: {
      end: 2.40,
      size: 0.3,
      start: 2.1
    },
    hoverinfo: 'Score: 2.3',
  }
]

const histLayout = {
  bargap: 0.1,
  bargroupgap: 0.2,
  barmode: "overlay",
  xaxis: {
    title: "Gene Score".toUpperCase(),
    titlefont: {
      size: 18
    }
  },
  yaxis: {
    title: "Number of Genes".toUpperCase(),
    titlefont: {
      size: 18
    }
  },
  legend: {
    x: 0,
    y: 1.2,
  },
  width: 300
};


const boxPlotData = [
  {
    x: [1, 2, 3, 4, 4, 4, 8, 9, 10],
    name: '',
    marker: {
      color: "rgba(229, 220, 247, 1)",  // "rgba(166, 132, 238, 0.25)",  
      // line: {
      //   width: 1
      // }

    },
    type: 'box',
    boxmean: false,
    orientation: 'h',
    whiskerwidth: 1,
    hoverinfo: 'x'
  },
  {
    x: [2.3],
    y: [''],
    name: '',
    marker: {
      symbol: "line-ns",
      color: "rgba(166, 132, 238, 1)"
    },
    hovertemplate: 'Score: %{x}',
  },
]


const boxPlotLayout = {
  width: 300,
  height: 110,
  margin: {
    t: 10,
  },
  xaxis: {
    visible: false
  }
};

const barColors = rawData.geneticsscore.distribution.map((item, ind) => ind === 1 ? "rgba(166, 132, 238, 1)": "rgba(166, 132, 238, 0.25)")

const boxPlotConfigs = {
  displayModeBar: false
};

const sharedBarData = {
  type: 'bar',
  marker: {
    color: barColors,
  },
  width: 0.6
};

const geneticsscoreData = [{
  x: Object.keys(rawData.geneticsscore.distribution),
  y: Object.values(rawData.geneticsscore.distribution),
  ...sharedBarData,
}];

const logsdonData = [{
  x: Object.keys(rawData.logsdon.distribution),
  y: Object.values(rawData.logsdon.distribution),
  ...sharedBarData
}];

const omicsscoreData = [{
  x: Object.keys(rawData.omicsscore.distribution),
  y: Object.values(rawData.omicsscore.distribution),
  ...sharedBarData
}];

const literaturescoreData = [{
  x: Object.keys(rawData.literaturescore.distribution),
  y: Object.values(rawData.literaturescore.distribution),
  ...sharedBarData
}];

const flyneuropathscoreData = [{
  x: Object.keys(rawData.flyneuropathscore.distribution),
  y: Object.values(rawData.flyneuropathscore.distribution),
  ...sharedBarData
}];



const barLayout = {
  width: 300,
  xaxis: {
    title: "Gene Score".toUpperCase(),
    titlefont: {
      size: 12,
    }
  },
  yaxis: {
    title: "Number of Genes".toUpperCase(),
    titlefont: {
      size: 12
    }
  },
  plot_bgcolor: 'rgba(236, 236, 236, 0.25)',
};

const specialBarLayout = {
  ...barLayout,
  annotations: [{
    x: 1,
    y: 5149,
    text: "2.5",
    ax: 0,
    ay: -10
  }]
};

<div>

  <h2>geneticsscore</h2>
  
  <PlotlyWrapper
    data={geneticsscoreData}
    layout={specialBarLayout}
    containerWidth={300}
    config={boxPlotConfigs}
  />

  <h2>logsdon</h2>

  <PlotlyWrapper
    data={logsdonData}
    layout={barLayout}
    containerWidth={300}
    config={boxPlotConfigs}
  />

  <h2>omicsscore</h2>

  <PlotlyWrapper
    data={omicsscoreData}
    layout={barLayout}
    containerWidth={300}
    config={boxPlotConfigs}
  />

  <h2>literaturescore</h2>
  
  <PlotlyWrapper
    data={literaturescoreData}
    layout={barLayout}
    containerWidth={300}
    config={boxPlotConfigs}
  />
  
  <h2>flyneuropathscore</h2>

  <PlotlyWrapper
    data={flyneuropathscoreData}
    layout={barLayout}
    containerWidth={300}
    config={boxPlotConfigs}
  />
  
  <hr />

  <PlotlyWrapper
    data={boxPlotData}
    layout={boxPlotLayout}
    containerWidth={300}
    config={boxPlotConfigs}
    className={"chart-boxplot"}
  />

  <PlotlyWrapper
    data={histData}
    layout={histLayout}
    containerWidth={300}
  />
</div>

```

