import{a2 as i,a3 as f,a4 as u,a5 as g,a6 as C,a7 as m,a8 as p}from"./Props.6365e5e6.js";var x=i,O=f,h=u,l=RangeError,o=String.fromCharCode,n=String.fromCodePoint,I=O([].join),P=!!n&&n.length!=1;x({target:"String",stat:!0,arity:1,forced:P},{fromCodePoint:function(a){for(var t=[],d=arguments.length,e=0,r;d>e;){if(r=+arguments[e++],h(r,1114111)!==r)throw l(r+" is not a valid code point");t[e]=r<65536?o(r):o(((r-=65536)>>10)+55296,r%1024+56320)}return I(t,"")}});var D=i,R=g,$=C,s=m.f,v=p,y=R(function(){s(1)}),E=!v||y;D({target:"Object",stat:!0,forced:E,sham:!v},{getOwnPropertyDescriptor:function(a,t){return s($(a),t)}});
