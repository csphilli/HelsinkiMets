"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,a,n=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(o=r.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var dataSections=document.querySelectorAll("[data-section]"),allSections=document.querySelectorAll(".section"),minWidth=720,axis="x";window.innerWidth<=minWidth&&(axis="y");var gsapSectionFuncs=[function(){animateHeader()},function(){animateHero()},function(){animateWinLoss()},function(){animateAbout()},function(){animateContact()},function(){animateSponsors()},function(){animateFooter()},function(){animateFieldCards()},function(){animateLocsAbout()}],revealSection=function(e,t){var r=_slicedToArray(e,1)[0];console.log(r),e.forEach((function(e){e.isIntersecting&&(e.target.classList.remove("section--hidden"),gsapSectionFuncs[e.target.dataset.section](),t.unobserve(e.target))}))},sectionObserver=new IntersectionObserver(revealSection,{root:null,threshold:[.15]});allSections.forEach((function(e){sectionObserver.observe(e),e.classList.add("section--hidden")}));var animateHeader=function(){gsap.from(".header-section",{opacity:0,duration:1,y:-50,ease:Power4.easeOut})},animateHero=function(){gsap.from(".hero-section",{opacity:0,duration:1,y:150,ease:Power4.easeOut,stagger:.1})},animateWinLoss=function(){var e,t,r,o,a;gsap.timeline().from(".win-loss-container",(e={opacity:0,duration:.3},_defineProperty(e,axis,150),_defineProperty(e,"ease",Power4.easeOut),e)).from(".schedule-text-content h3",(t={opacity:0,duration:.3},_defineProperty(t,axis,150),_defineProperty(t,"ease",Power4.easeOut),t),"-=.3").from(".schedule-text-content p",(r={opacity:0,duration:.3},_defineProperty(r,axis,150),_defineProperty(r,"ease",Power4.easeOut),_defineProperty(r,"stagger",.1),r),"-=.3").from(".schedule-grid",(o={opacity:0,duration:.3},_defineProperty(o,axis,150),_defineProperty(o,"ease",Power4.easeOut),o),"-=.3").from(".grid-col",(_defineProperty(a={opacity:0,duration:.3},axis,150),_defineProperty(a,"ease",Power4.easeOut),_defineProperty(a,"stagger",.08),a),"-=.3")},animateAbout=function(){gsap.from(".about-section",{opacity:0,duration:1,y:150,ease:Power4.easeOut})},animateContact=function(){gsap.from(".contact-section",{opacity:0,duration:1,y:150,ease:Power4.easeOut})},animateSponsors=function(){var e,t,r,o="-=.7";gsap.timeline().from(".sponsors-text h3",(e={opacity:0,duration:1},_defineProperty(e,axis,150),_defineProperty(e,"ease",Power4.easeOut),e)).from(".sponsors-text p",(t={opacity:0,duration:1},_defineProperty(t,axis,150),_defineProperty(t,"ease",Power4.easeOut),_defineProperty(t,"stagger",.25),t),o).from(".sponsor-icon",(_defineProperty(r={opacity:0,duration:.5},axis,150),_defineProperty(r,"ease",Power4.easeOut),_defineProperty(r,"stagger",.1),r),o)},animateFooter=function(){gsap.from(".footer-section div",{opacity:0,duration:1,y:150,ease:Power4.easeOut,stagger:.1})},animateFieldCards=function(){gsap.from(".field-locs-section section",{opacity:0,duration:1,y:150,ease:Power4.easeOut,stagger:.25})},animateLocsAbout=function(){gsap.timeline().from(".field-locs-aside h3",{opacity:0,duration:.5,y:100,ease:Power4.easeOut},"-=.2").from(".field-locs-aside p",{opacity:0,duration:.5,y:100,ease:Power4.easeOut,stagger:.1},"-=.2")};