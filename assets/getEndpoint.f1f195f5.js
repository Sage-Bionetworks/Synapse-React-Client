var r=(o=>(o[o.REPO_ENDPOINT=0]="REPO_ENDPOINT",o[o.PORTAL_ENDPOINT=1]="PORTAL_ENDPOINT",o))(r||{});const O=["www.synapse.org","staging.synapse.org","tst.synapse.org","portal-dev.dev.sagebase.org","127.0.0.1"],p=o=>O.includes(o.toLowerCase())?"/":"https://www.synapse.org/",a=p(window.location.hostname),g={REPO:"https://repo-prod.prod.sagebase.org",PORTAL:a},R=o=>{let s=g;window.SRC&&window.SRC.OVERRIDE_ENDPOINT_CONFIG&&(s=window.SRC&&window.SRC.OVERRIDE_ENDPOINT_CONFIG);const{PORTAL:t,REPO:e}=s;if(!t||!e)throw Error("Error failed to specify endpoints, cannot make call");return o===1?t:e},n="https://mock-repo.sagebase.org",P="https://mock-repo.sagebase.org/",E={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"},mock:{REPO:n,PORTAL:P}};export{r as B,n as M,g as P,E as S,R as g};
