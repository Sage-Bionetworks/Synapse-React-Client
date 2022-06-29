const B=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];function e(t){if(!t)return"";const o=Math.floor(Math.log(t)/Math.log(1024));return!t&&"0 Bytes"||(t/Math.pow(1024,o)).toFixed(2)+" "+B[o]}export{e as c};
//# sourceMappingURL=calculateFriendlyFileSize.9c20c573.js.map
