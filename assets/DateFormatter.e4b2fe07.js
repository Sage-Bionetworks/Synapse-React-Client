import{g as m}from"./index.f6f857f5.js";import{d as o}from"./dayjs.min.8b3c16f0.js";import{u as e}from"./utc.cd0b4238.js";o.extend(e);function i(r,t="M/D/YYYY h:mm A"){return m()?o.utc(r).format(t)+" UTC":o(r).format(t)}export{i as f};
