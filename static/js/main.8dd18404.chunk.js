(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://clicky-game.netlify.com/assets/images/beth.png",clicked:!1},{id:2,image:"https://clicky-game.netlify.com/assets/images/birdperson.png",clicked:!1},{id:3,image:"https://clicky-game.netlify.com/assets/images/evilmorty.png",clicked:!1},{id:4,image:"https://clicky-game.netlify.com/assets/images/gianthead.png",clicked:!1},{id:5,image:"https://clicky-game.netlify.com/assets/images/goldenford.png",clicked:!1},{id:6,image:"https://clicky-game.netlify.com/assets/images/jerry.png",clicked:!1},{id:7,image:"https://clicky-game.netlify.com/assets/images/jessica.png",clicked:!1},{id:8,image:"https://clicky-game.netlify.com/assets/images/meeseeks.png",clicked:!1},{id:9,image:"https://clicky-game.netlify.com/assets/images/morty.png",clicked:!1},{id:10,image:"https://clicky-game.netlify.com/assets/images/mr.png",clicked:!1},{id:11,image:"https://clicky-game.netlify.com/assets/images/rick.png",clicked:!1},{id:12,image:"https://clicky-game.netlify.com/assets/images/summer.png",clicked:!1}]},,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(8),r=n.n(i),l=n(1),o=n(2),s=n(4),m=n(3),d=n(5),u=(n(14),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),g=(n(16),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,e.title),c.a.createElement("li",{id:"rw"},e.rightWrong),c.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),c.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),h=(n(18),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),f=(n(20),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),p=function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},y=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",{className:t},e.children)},S=(n(22),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null)}}]),t}(a.Component)),v=n(6);n(24);var E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={images:v,currentScore:0,topScore:0,rightWrong:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,rightWrong:""}),e>=n.state.topScore?n.setState({topScore:e}):12===e&&n.setState({rightWrong:"You win!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,rightWrong:"WRONGGG!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(v);n.setState({images:e})},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(g,{title:"Rick And Morty Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),c.a.createElement(f,null,"Clicky Game! Click on an image to earn points, but don't click on any image more than once!"),c.a.createElement(p,null,c.a.createElement(k,null,this.state.images.map(function(t){return c.a.createElement(y,{size:"md-3 sm-6"},c.a.createElement(u,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))),c.a.createElement(S,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.8dd18404.chunk.js.map