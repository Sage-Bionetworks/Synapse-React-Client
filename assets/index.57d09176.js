var l={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(r){(function(){var c={}.hasOwnProperty;function t(){for(var n=[],e=0;e<arguments.length;e++){var s=arguments[e];if(!!s){var o=typeof s;if(o==="string"||o==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var f=t.apply(null,s);f&&n.push(f)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var i in s)c.call(s,i)&&s[i]&&n.push(i);else n.push(s.toString())}}return n.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t})()})(l);const a=l.exports;export{a as c};
