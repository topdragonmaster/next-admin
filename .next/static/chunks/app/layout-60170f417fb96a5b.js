(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5505:function(t,n,e){Promise.resolve().then(e.bind(e,7833))},7833:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});var r=e(7437);e(3177),e(707),e(8815);var a=e(3198),u=e(3837),i=e(4483),o=e(1267),s=e(1850),c=e(5243);let l={isAuthenticated:!1,username:null,email:null},d={stations:[]},f={accounts:[]},T={trades:[]},p={transactions:[]},h=(0,i.UY)({auth:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.XP:return{...t,isAuthenticated:!0,username:n.payload.username,email:n.payload.email};case c.Nv:return{...t,isAuthenticated:!1,username:null,email:null};default:return t}},station:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.lB:return{...t,stations:n.payload};case c.jR:return{...t,stations:[...t.stations,n.payload]};case c.$$:return{...t,stations:t.stations.filter(t=>t._id!==n.payload)};default:return t}},account:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.lc:return{...t,accounts:n.payload};case c.fB:return{...t,accounts:[...t.accounts].map(t=>t._id===n.payload._id?n.payload:t)};case c.Wg:return{...t,accounts:t.accounts.filter(t=>t._id!==n.payload)};default:return t}},trade:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.hu:return{...t,trades:n.payload};case c.mA:return{...t,trades:[...t.trades].map(t=>t._id===n.payload._id?n.payload:t)};case c.TC:return{...t,trades:t.trades.filter(t=>t._id!==n.payload)};default:return t}},transaction:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.Rx:return{...t,transactions:n.payload};case c.p5:return{...t,transactions:[...t.transactions].map(t=>t._id===n.payload._id?n.payload:t)};case c.yR:return{...t,transactions:t.transactions.filter(t=>t._id!==n.payload)};default:return t}}}),A={key:"root",storage:s.Z},y=(0,o.OJ)(A,h),E=(0,i.MT)(y),N=(0,o.p5)(E);var I=e(1369);function _(t){let{children:n}=t;return(0,r.jsx)("html",{suppressHydrationWarning:!0,lang:"en",children:(0,r.jsxs)("body",{children:[(0,r.jsx)(a.zt,{store:E,children:(0,r.jsx)(u.r,{loading:null,persistor:N,children:n})}),(0,r.jsx)(I.Ix,{})]})})}e(6518)},5243:function(t,n,e){"use strict";e.d(n,{$$:function(){return o},Nv:function(){return a},Rx:function(){return p},TC:function(){return T},Wg:function(){return l},XP:function(){return r},fB:function(){return c},hu:function(){return d},jR:function(){return i},lB:function(){return u},lc:function(){return s},mA:function(){return f},p5:function(){return h},yR:function(){return A}});let r="LOGIN_SUCCESS",a="LOGOUT",u="INITIATESTATION",i="UPDATESTATION",o="DELETESTATION",s="INITIATEACCOUNT",c="UPDATEACCOUNT",l="DELETEACCOUNT",d="INITIATETRADE",f="UPDATETRADE",T="DELETETRADE",p="INITIATETRANSACTION",h="UPDATETRANSACTION",A="DELETETRANSACTION"},707:function(){},3177:function(){},8815:function(){}},function(t){t.O(0,[306,283,971,596,744],function(){return t(t.s=5505)}),_N_E=t.O()}]);