```jsx

const x1 = [];
for (let i = 0; i < 400; i++)
{
  const k = Math.random();
  x1.push(k * 4);
}

const x2 = x1.filter(x => x > 2.1 && x < 2.40)

const trace1 = {
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
  hoverinfo: 'x',
};

const trace2 = {
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
  hoverinfo: 'x',
};

const layout = {
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


<Histogram
  data={[trace1, trace2]}
  layout={layout}
  containerWidth={300}
/> 

```
