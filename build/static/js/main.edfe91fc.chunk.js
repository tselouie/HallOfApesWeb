(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{10:function(e,t,a){e.exports=a(27)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=(a(15),a(1)),s=a.n(o),i=a(4),u=a(7),m=(a(17),a(18),function(){return Object(n.useEffect)((function(){var e=document.createElement("script");return e.src="carouselScript.js",document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),c.a.createElement("div",{className:"carousel"},c.a.createElement("button",{className:"carousel__button carousel__button--left is-hidden"},c.a.createElement("img",{src:"left-arrow.png",alt:""})),c.a.createElement("div",{className:"carousel__track-container"},c.a.createElement("ul",{className:"carousel__track"},c.a.createElement("li",{className:"carousel__slide current-slide"},c.a.createElement("img",{className:"carousel__image ",src:"./Boomer.png",alt:""})),c.a.createElement("li",{className:"carousel__slide"},c.a.createElement("img",{className:"carousel__image",src:"./MrSunshine.png",alt:""})),c.a.createElement("li",{className:"carousel__slide"},c.a.createElement("img",{className:"carousel__image",src:"./ThatDude.png",alt:""})))),c.a.createElement("button",{className:"carousel__button carousel__button--right"},c.a.createElement("img",{src:"./right-arrow.png",alt:""})),c.a.createElement("div",{className:"carousel__nav"},c.a.createElement("button",{className:"carousel__indicator current-slide"}),c.a.createElement("button",{className:"carousel__indicator"}),c.a.createElement("button",{className:"carousel__indicator"})))}),d=(a(19),a(5)),p=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"copyrightBlurb"},"\xa9 2022 Copyright: Bizzies Ape",c.a.createElement("br",null),c.a.createElement("a",{href:"google.com",style:{textDecoration:"none",color:"#3366BB"}},"Contact Us")),c.a.createElement("div",{className:"socialContainer"},c.a.createElement(d.SocialIcon,{url:"https://twitter.com/jaketrent",style:{marginRight:"5px"}}),c.a.createElement(d.SocialIcon,{url:"https://discord.com",style:{marginRight:"5px"}}),c.a.createElement(d.SocialIcon,{url:"https://opensea.io/collection/bizzies-exclusive"})))},h=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),d=o[0],h=(o[1],function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window,(a=t.ethereum)?console.log("We have the ethereum object",a):console.log("Make sure you have metamask!"),e.next=5,a.request({method:"eth_accounts"});case 5:0!==(n=e.sent).length?(c=n[0],console.log("Found an authorized account:",c),r(c)):console.log("No authorized account found"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()),E=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window,a=t.ethereum,e.next=4,a.request({method:"eth_chainId"});case 4:if(n=e.sent,console.log("Connected to chain "+n),"0x4","0x4"!==n&&alert("You are not connected to the Rinkeby Test Network!"),a){e.next=11;break}return alert("Get MetaMask!"),e.abrupt("return");case 11:return e.next=13,a.request({method:"eth_requestAccounts"});case 13:c=e.sent,console.log("Connected",c[0]),r(c[0]),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),c.a.createElement("div",{className:"mainContainer"},c.a.createElement("section",{className:"one"},c.a.createElement("div",{className:"dataContainer"},c.a.createElement("span",{className:"center"},c.a.createElement("img",{className:"circle",src:"/android-chrome-192x192.png",alt:"logo"})),c.a.createElement("div",{className:"header"},"Hall Of Apes"),a?c.a.createElement("div",{className:"mint-nft"},c.a.createElement("h1",null,"Mint your free Hall Of Apes Membership NFT"),c.a.createElement("a",{className:"connBtn",disabled:d,onClick:function(){return f()}},d?"Minting...":"Mint your APE")):c.a.createElement("a",{className:"connBtn",onClick:E},"Connect Wallet"))),a?c.a.createElement("div",null,c.a.createElement("section",{className:"two"},c.a.createElement("img",{className:"roadMap",src:"./BizziesNFT_2022_Roadmap.png",alt:"roadmap"})),c.a.createElement("section",{className:"three","aria-label":"Gallery"},c.a.createElement("div",{className:"collectionTitle"},c.a.createElement("h1",null,"Bizzies Collection")),c.a.createElement(m,null))," "):null,c.a.createElement(p,null))};l.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.edfe91fc.chunk.js.map