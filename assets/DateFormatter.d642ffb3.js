import{g as m}from"./index.5da0c2fe.js";import{d as o}from"./dayjs.min.299ad3a1.js";import{u as e}from"./utc.fbb5bd49.js";o.extend(e);function i(r,t="M/D/YYYY h:mm A"){return m()?o.utc(r).format(t)+" UTC":o(r).format(t)}export{i as f};
