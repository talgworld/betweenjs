let o = (a)=>{console.log(a)} //out value a
//html translator functions
let tag = (tag,text,style,options)=>{return `<${tag} style="${style}" ${options}>${text}</${tag}>`} //--> tag(h3,'hello')
let tag_ = (tag,style,options)=>{return `<${tag} style="${style}" ${options}/>`}
let divs = (divs,style,divContOptions)=>{let dd=''; for(let d in divs){dd+=`<div style="${divs[d][1]}" ${divs[d][2]}>${divs[d][0]}</div>`}; return `<div style= "${style}" ${divContOptions}>${dd}</div>`}
let div = (text,style,options)=>{return `<div style="${style}" ${options}>${text}</div>`}
let btn = (text,style,options)=>{return `<button style="${style}" ${options}>${text}</button>`}
let css = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    *{font-family:'Poppins', sans-serif;}

    </style>
`
let html_Title = 'Welcome to BetweenJS'
let htmlHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${html_Title}</title>
</head>
`
let script = `<script type="module" src="./indexJs.js"></script>`
//--CSS--
let inCenter_CSS = 'align-items: center; justify-content: center;'
let ContainerHTML_CSS = `background-color:#fafafa; width:100%; height:100%; display:flex; flex-direction: column; ${inCenter_CSS} `
let container_CSS = `color:#5a5a5a; padding:20px; border: 3px solid #5a5a5a; display:flex; flex-direction:column; width:fit-content; border-radius:10px; ${inCenter_CSS}`
let btn_CSS = 'padding:10px; background-color:black; color:white; margin:5px;'

//Other vars
let randRange = (from,to)=>{while(true){let b = Math.round(Math.random()*to)+from; if(b<=to && b>=from){return b}}}

let colorsAnim = `<style>
@keyframes colorAnim {
    0%   {color: #777777;}
    50%  {color: #111111;}
    100%  {color: #444444;}
  }
.FG:hover {
    animation-name: colorAnim;
    animation-iteration-count: 100;
    animation-duration: ${randRange(10,20)}s;
}
</style>`

let BGColorsAnim = `<style>
@keyframes BGColorAnim {
    0%   {background-color: #ddd;}
    50%  {background-color: #eee;}
    100%  {background-color: #ddd;}
  }
.BG:hover {
    animation-name: BGColorAnim;
    animation-iteration-count: 100;
    animation-duration: ${randRange(3,10)}s;
}
</style>`
//------------------Design UI-----------------------
let welcomeTxt = div(`Welcome to ${div('&nbsp BetweenJS &nbsp','color:red')} v1.0.0`,'font-size:50px; display:flex; ','class="FG"')
let infoTxt = 'This package in development now, but you can make awesome work with it. Good luck'
let subTex = div(infoTxt,'font-size:20px; padding: 5px','class="FG"')

//combining to container
let container = div(`${colorsAnim} ${BGColorsAnim} ${welcomeTxt} ${subTex}`,container_CSS,'class="BG"')

//---------------------Body-------------------------

let body = `${container}` //all elements combined here

//--------------------To HTML-----------------------

let designUI = `${htmlHeader} ${css} ${body} ${script}`
let html_Container = div(designUI, ContainerHTML_CSS, 'class="BG"')

//----------------Export Data-----------------------

module.exports = {html_Container,divs}