(this.webpackJsonpadmissionresult=this.webpackJsonpadmissionresult||[]).push([[0],{19:function(t,e,i){},20:function(t,e,i){},22:function(t,e,i){},23:function(t,e,i){},25:function(t,e,i){"use strict";i.r(e);var n=i(6),c=i.n(n),a=i(13),s=i.n(a),l=(i(19),i(20),i(4)),o=function(){return Object(l.jsx)("div",{className:"header",children:"\u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0 \u09aa\u09cd\u09b0\u09be\u09aa\u09cd\u09a4 \u09a8\u09ae\u09cd\u09ac\u09b0\u09c7\u09b0 \u09aa\u09b0\u09bf\u09b8\u0982\u0996\u09cd\u09af\u09be\u09a8"})},h=i(14),r=i(12),d=(i(24),i(22),i(0)),u=i(1),x=i(3),f=i(2),p=(i(23),function(t){Object(x.a)(i,t);var e=Object(f.a)(i);function i(){return Object(d.a)(this,i),e.apply(this,arguments)}return Object(u.a)(i,[{key:"componentDidMount",value:function(){var t={Particle:function(t){this.radius=7,this.x=t.x,this.y=t.y,this.angle=t.angle,this.speed=t.speed,this.accel=t.accel,this.decay=.01,this.life=1}};t.Particle.prototype.step=function(e){this.speed+=this.accel,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed,this.angle+=t.PI/64,this.accel*=1.01,this.life-=this.decay,this.life<=0&&t.particles.splice(e,1)},t.Particle.prototype.draw=function(e){t.ctx.fillStyle=t.ctx.strokeStyle="hsla("+(t.tick+120*this.life)+", 100%, 60%, "+this.life+")",t.ctx.beginPath(),t.particles[e-1]&&(t.ctx.moveTo(this.x,this.y),t.ctx.lineTo(t.particles[e-1].x,t.particles[e-1].y)),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.arc(this.x,this.y,Math.max(.001,this.life*this.radius),0,t.TWO_PI),t.ctx.fill();var i=1.25*Math.random();t.ctx.fillRect(~~(this.x+35*(Math.random()-.5)*this.life),~~(this.y+35*(Math.random()-.5)*this.life),i,i)},t.step=function(){t.particles.push(new t.Particle({x:t.width/2+Math.cos(t.tick/20)*t.min/2,y:t.height/2+Math.sin(t.tick/20)*t.min/2,angle:t.globalRotation+t.globalAngle,speed:0,accel:.01})),t.particles.forEach((function(t,e){t.step(e)})),t.globalRotation+=t.PI/6,t.globalAngle+=t.PI/6},t.draw=function(){t.ctx.clearRect(0,0,t.width,t.height),t.particles.forEach((function(t,e){t.draw(e)}))},t.init=function(){t.canvas=document.createElement("canvas"),t.ctx=t.canvas.getContext("2d"),t.width=300,t.height=300,t.canvas.width=t.width*window.devicePixelRatio,t.canvas.height=t.height*window.devicePixelRatio,t.canvas.style.width=t.width+"px",t.canvas.style.height=t.height+"px",t.ctx.scale(window.devicePixelRatio,window.devicePixelRatio),t.min=.5*t.width,t.particles=[],t.globalAngle=0,t.globalRotation=0,t.tick=0,t.PI=Math.PI,t.TWO_PI=2*t.PI,t.ctx.globalCompositeOperation="lighter",document.getElementById("loader").appendChild(t.canvas),t.loop()},t.loop=function(){requestAnimationFrame(t.loop),t.step(),t.draw(),t.tick++},t.init()}},{key:"render",value:function(){return Object(l.jsx)("div",{id:"loader"})}}]),i}(n.Component)),g=function(){var t=Object(n.useState)(null),e=Object(h.a)(t,2),i=e[0],c=e[1];return Object(n.useEffect)((function(){fetch("https://script.google.com/macros/s/AKfycbxPWwBvVK3Dlg4jAC_NgIT6THUBUS4VVCdAWPS_a9r8PWCll-NKQ48heEeu24hzai258w/exec").then((function(t){return t.json()})).then((function(t){c(t)}))}),[]),Object(l.jsx)("div",{children:i?Object(l.jsxs)("div",{className:"chartdata",children:[Object(l.jsx)("div",{children:Object(l.jsx)(r.a,{data:i.marks,xtitle:"Marks",ytitle:"Examinees",colors:["blue","red","orange","green","indigo"],suffix:"%"})}),Object(l.jsx)("div",{children:Object(l.jsx)(r.b,{data:i.marks})})]}):Object(l.jsx)(p,{})})},j=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(o,{}),Object(l.jsx)(g,{})]})},b=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,27)).then((function(e){var i=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;i(t),n(t),c(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),b()}},[[25,1,2]]]);