const n={all:[{objectType:"entity"}],entity:e=>[{...n.all[0],id:e}],version:(e,t)=>[{...n.entity(e)[0],versionNumber:t}],versions:e=>[{...n.entity(e)[0],scope:"versions"}],versionsQuery:(e,t,i)=>[{...n.versions(e)[0],versionQuery:{limit:t,offset:i}}],json:e=>[{...n.entity(e)[0],scope:"json"}],path:e=>[{...n.entity(e)[0],scope:"path"}],bundle:(e,t,i)=>[{...n.version(e,t)[0],scope:"entityBundle",entityBundleRequest:i}],children:(e,t)=>{var i;return[{...n.entity((i=e.parentId)!=null?i:"root")[0],scope:"children",isInfinite:t,entityChildrenRequest:e}]},tableQueryResult:(e,t)=>[{...n.entity(e.entityId)[0],scope:"tableQueryResult",isInfinite:t,tableQueryBundleRequest:e}],tableQueryResultWithAsyncStatus:(e,t)=>[{...n.entity(e.entityId)[0],scope:"tableQueryResultWithAsyncStatus",isInfinite:t,tableQueryBundleRequest:e}],boundJSONSchema:e=>[{...n.entity(e)[0],scope:"boundJSONSchema"}],schemaValidationResults:e=>[{...n.entity(e)[0],scope:"schemaValidationResults"}]};function s(e,t){return e.invalidateQueries(n.entity(t))}export{n as e,s as i};
