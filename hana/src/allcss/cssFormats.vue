<template>

<div></div>
</template>

<script>
</script>
<style>
.p1 {
    font-size:32pt;
}

.p2 {
    font-size: 26pt;
}

.p3 {
    font-size: 22pt;
}

.p4 {
    font-size: 20pt;
}

.p5 {
    font-size:18pt;
}

.p6 {
    font-size:16pt;
}

.p7 {
    font-size:14pt;
}

.p8 {
    font-size:12pt;
}

.p9 {
    font-size:14px;
}
.ft {
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 23px;
}

.ibn {
    font-family: 'Ibarra Real Nova', serif;
}

.qs {
    font-family: 'Quicksand-Regular', sans-serif;;
    
}

@font-face {
    font-family: 'xln-font';
    src: url("@/assets/fonts/xillian-regular.otf") format('opentype');
    font-weight:normal;
    font-style:normal;
}
.xln {
    font-family: 'xln-font', sans-serif
}

.p {
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 23px;
}

.errMsg {
    color:red;
    font-weight:350
}

.disabledInput {
    background-color:gray
}


.pre {
    font-size: 11px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 23px;

}

.b {
    font-weight:bold;
}

.b2 {
    font-weight: bolder;
}

.l {
    font-weight:lighter;
}

.primary {
    /* color:rgba(211,17,69,255); */
    /* color:rgba(122, 178, 251, 255); */
    color:#5f545e;
}

.nw {
    white-space:nowrap
}

.primarybg {
    /* background-color:rgba(211,17,69,255); */
    /* background-color:rgba(172,205,247,255); */
    background-color:#5f545e

}

.wtbg {
    background-color:white;
}


.mainNavs {
    margin: auto;
    list-style: none;
    margin-top: -50px;
    height: 15%;
    display: flex;
    /*justify-content:space-evenly;*/
    padding-right: 50px;
}


.wt {
    color:white;
}
.second {
    color:gray;
}

.secondbg {
    background-color:gainsboro;
}

.third {
    /* color:#174ea6 */
    color:white
}

.thirdbg {
    background-color:#174ea6
}

.fourth {
    color:rgba(42,48,109,255);
}

.sd {
    box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75)
  }

.trimB5 {
    margin-bottom:-5%
}

.ib {
    display:inline-block;
}
.f {
    display:flex;
}
.mb50 {
    margin-bottom:50px;
}
.mb25 {
    margin-bottom:25px;
}
.mb10 {
    margin-bottom:10px;
}

.mt50 {
    margin-top:50px;
}
.mt25 {
    margin-top:25px;
}
.mb25 {
    margin-bottom:25px;
}
.mt10 {
    margin-top:10px;
}
.mr10 {
    margin-right:10px;
}
.mr50 {
    margin-right:50px;
}

.w1k {
    width:1000px;
}
.pd5 {
    padding:5px;
}

.pd10 {
    padding:10px;
}


.wfc {
    width:fit-content;
}

.hfc {
    height:fit-content;
}

.cntr {
    margin:auto;
}

.inp{
    width:210px;
    height:30px;
}

.dividerLabel {
  position: relative;
  display: inline-block;
}

.dividerLabel:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0;
  background-color: #5f545e;
  transition: width 0.3s ease-in-out;
}

.dividerLabel:hover:after {
  width: 100%;
}

.brButton { 
    /* big button */
  width:200px;
  height:50px;
  color:white;
  font-size:20px;
  text-align:center;
  border:none;
  border-radius:4px;
  cursor:pointer;
  background-color:#5f545e;
  font-family: 'Ibarra Real Nova', serif;
  outline:hidden
}

.brMobile {
    outline:hidden;
    width:160px;
    height:40px;
    color:white;
    font-size:16px;
    text-align:center;
    border:none;
    border-radius:4px;
    background-color:#5f545e;
  font-family: 'Ibarra Real Nova', serif;
}

.tertiaryMobile {
    width:160px;
    height:40px;
    color:white;
    font-size:16px;
    text-align:center;
    border:none;
    border-radius:4px;
    background-color:#5f545eb1;
  font-family: 'Ibarra Real Nova', serif;
}

.selectDisable {
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}


.tertiaryButton { 
  width:200px;
  height:50px;
  color:white;
  font-size:20px;
  text-align:center;
  border:none;
  border-radius:4px;
  cursor:pointer;
  background-color:#5f545eb1;
  font-family: 'Ibargba(95, 84, 94, 0.678)l Nova', serif;
}

.tertiaryButton:hover {
    filter:brightness(.8);
    transition: all .2s
}

.brMobile:active {
    font-size:15px;
    transition: font-size .3s

}
.brButton:hover {
    filter:brightness(.8);
    transition: filter .3s;
}



.ptr {
    cursor:pointer;
}

.disabled-button {
  background-color: lightgray;
  color: gray;
  cursor: not-allowed;
}

.br10 {
    border-radius:10px;
}

.sb {
    border:1px solid black
}

.lb {
    border:1px solid gray
}

.lb2 {
    border:.5px solid gray
}

.sbl { 
    /* standard border left etc */
    border-left:1px solid black;
}
.sbr {
    border-right:1px solid black;
}

.sbb {
    border-bottom:1px solid black;
}
.sbt {
    border-top:1px solid black
}
.hv:hover {
    transition:all .5s;
    cursor:pointer;
    transform: scale(1.05);
    transition: transform .2s;
}

.mh:hover {
    cursor:pointer;
    filter:brightness(.8);
    transition: filter .2s;
}

.label {
    transition:.5s;
    position:absolute;
}

.ntd {
    text-decoration: none;
}

/* 
.header-navbar {
     position:fixed;
     top:0;
 } */

 .inpClear {
    outline:none;
    border:none;
    background-color:transparent;
    background:transparent;
    border-bottom:1px solid darkgray;
    padding-left:.3em

 }

 .inpType {
    border:1px solid rgba(173, 173, 173, 0.867);
    border-radius:3px;
    background:transparent;
    background-color:transparent;
    padding:.7vh 0px .7vh 0px;
    padding-left:.3em;

 }
 .tbg {
    background-color:transparent
 }

 .picsize {
    width:550px;
    height:350px;
    transition: transform .2s;

 }

 .hof {
    overflow:hidden;
 }
.picsize:hover {
    transform: scale(1.1);
}
.icon_container:hover {
    transform: scale(1.1);
    transition: transform .2s
}
.gp {
    transition: transform .3s, filter .3s

}

.pointer {
    cursor:pointer
}
.gp:hover {
    transform: scale(1.05);
    filter:blur(1px) brightness(.7)
}

 .bs {
    box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);
-webkit-box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);
-moz-box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);
 }

 .w100 {
    width:100%;
 }

 .w50 {
    width:50%;
 }
 .h100 {
    height:100%;
 }

 .h50 {
    height:50%;
 }



* {
  scrollbar-color: #ccd4df #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #ccd4df;
  border: 3px ridge #ffffff;
}

.button-17:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

 .picHold {
    object-fit:cover;
    width:100%;
    height:100%;
 }

 .scroll {
    scrollbar-width: thin;
    scrollbar-color: #7cb4ff #ffffff;
  }

  /* Chrome, Edge, and Safari */
.scroll ::-webkit-scrollbar {
    width: 10px;
  }

.scroll  ::-webkit-scrollbar-track {
    background-color:transparent;
  }

.scroll ::-webkit-scrollbar-thumb {
    background-color: #7cb4ff;
    border-radius: 10px;
    border: 3px ridge #ffffff;
  }
 

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.cleanButton {
    background-color:transparent;
    border:none;
}

.redirectButton:hover {
  color:#014c8c;
  font-size: 1.5em;
  transition:font-size .2s;
}

</style>