import{o as m}from"./index.f6d21e1b.js";import{d as o}from"./dayjs.min.18cbb91e.js";import{u as e}from"./utc.03e74faf.js";o.extend(e);function i(r,t="M/D/YYYY h:mm A"){return m()?o.utc(r).format(t)+" UTC":o(r).format(t)}export{i as f};
