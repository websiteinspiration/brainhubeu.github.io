!function e(t,n,r){function i(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n||e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}$(document).ready(function(){var e={veryLargeScreen:"1600",largeScreen:"1440",bigScreen:"1280",mediumScreen:"992",smallScreen:"768",extraSmallScreen:"460",xXSmallScreen:"360"};$(".slider").slick({dots:!1,infinite:!0,speed:500,slidesToShow:7,slidesToScroll:1,centerMode:!0,arrows:!1,responsive:[{breakpoint:e.extraSmallScreen,settings:{slidesToShow:2}},{breakpoint:e.smallScreen,settings:{slidesToShow:3}},{breakpoint:e.mediumScreen,settings:{slidesToShow:4}},{breakpoint:e.bigScreen,settings:{slidesToShow:5}}],autoplay:!0,autoplaySpeed:3e3})}),window.onload=function(){function e(e){var t=0,n=0,r=0;e.forEach(function(i,o){if(!(o%2)){var a=e[o+1]?e[o+1].clientHeight:0;t=Math.max(i.clientHeight,a),n=r+2*Math.floor(o/2)*16,r+=t}i.style.height=t+"px",i.style.top=n+"px"}),document.querySelectorAll(".tabs__content")[0].style.height=n+t+16+"px"}function t(t){t=t||"all";var n=document.querySelectorAll(".tabs__content"),i=[].concat(r(document.querySelectorAll(".tabs__content li"))),o=i.find(function(e){return!e.hidden}),a=o.clientHeight,c=o.clientWidth,l=i.filter(function(e){return"all"===t||e.dataset.category===t}),s=l.length,u="all"!==t?i.filter(function(e){return e.dataset.category!==t}):[],d=2;window.innerWidth<=768&&(d=1),n[0].style.height=(a+32)*Math.round(s/d)+"px",l.forEach(function(e,t){var n=t%d?c+32+"px":0;e.style.cssText="\n        display: block;\n        position: absolute;\n        left: "+n+";\n      ",e.hidden=!1}),u.forEach(function(e){e.hidden=!0,e.style.cssText="display: none"}),2===d&&e(i.filter(function(e){return"all"===t||e.dataset.category===t}))}t();var n=document.querySelectorAll(".tabs-nav__button");n.forEach(function(e){e.addEventListener("click",function(){if(this.classList.contains("active"))return!1;n.forEach(function(e){e.classList.remove("active")}),this.classList.add("active"),t(this.dataset.category)})}),window.onresize=function(){t(document.querySelector(".tabs-nav__button.active").dataset.category)}}},{}]},{},[1]);