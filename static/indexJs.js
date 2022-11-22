let o = (a)=>{console.log(a)}
//DOM Defaults
let ev = (element,event,func)=>{document.getElementById(element).addEventListener(event,func)}
let elm=(element)=>{return document.getElementById(element)}
let elm_=(element)=>{return document.querySelector(element)}
let hide=(id)=>{document.getElementById(id).style.visibility='hidden'} //--->'objectID'
let show=(id)=>{document.getElementById(id).style.visibility='visible'}
let hide_=(id)=>{document.querySelector(id).style.visibility='hidden'} //--->'#ID or .Class'
let show_=(id)=>{document.querySelector(id).style.visibility='visible'}
let del=(id)=>{document.getElementById(id).style.display='none'}
let rest=(id)=>{document.getElementById(id).style.display='inline'}
let del_=(id)=>{document.querySelector(id).style.display='none'}
let rest_=(id)=>{document.querySelector(id).style.display='inline'}
let screenWidth = ()=>{if (typeof screen !== 'undefined'){return screen.width}}
let screenHeight = ()=>{if (typeof screen !== 'undefined'){return screen.height}}
let multiHide = (elements)=>{for(let item of elements){hide(item)}}
let multiShow = (elements)=>{for(let item of elements){show(item)}} //elements--> in ['objectID_1','objectID_2']
let multiShowHide = (elementsToShow,elementsToHide)=>{if(elementsToShow){return multiShow(elementsToShow)}; if(elementsToHide){return multiHide(elementsToHide)}}

//----------------------Script here------------------------

