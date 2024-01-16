//DOM Defaults
export function ev(element,event,func){document.getElementById(element).addEventListener(event,func)}
export function ev_(element,event,func){document.querySelector(element).addEventListener(event,func)}
export function id(element){return document.getElementById(element)}
export function id_(element){return document.querySelector(element)}
export function ids(elements){for(let elm of elements){return document.getElementById(elm)}}
export function class_(element){return document.getElementsByClassName(element)}
export function hide(id){document.getElementById(id).style.visibility='hidden'} //--->'objectID'
export function show(id){document.getElementById(id).style.visibility='visible'}
export function hide_(id){document.querySelector(id).style.visibility='hidden'} //--->'#ID or .Class'
export function show_(id){document.querySelector(id).style.visibility='visible'}
export function del(id){document.getElementById(id).style.display='none'}
export function rest(id){document.getElementById(id).style.display='inline'}
export function del_(id){document.querySelector(id).style.display='none'}
export function rest_(id){document.querySelector(id).style.display='inline'}
export function multiHide(elements){for(let item of elements){hide(item)}}
export function multiShow(elements){for(let item of elements){show(item)}} //elements--> in ['objectID_1','objectID_2']
export function multiShowHide(elementsToShow,elementsToHide){if(elementsToShow){return multiShow(elementsToShow)}; if(elementsToHide){return multiHide(elementsToHide)}}
export function HTML(id,html){document.getElementById(id).innerHTML=html}
export function addHTML(id,html){document.getElementById(id).innerHTML+=html}
export function disabled(element){id(element).disabled=true}
export function enabled(element){id(element).disabled=false}
export function o (a){console.log(a)}

//main
export function out(a){console.log(a)}
export function randRange(from,to){while(true){let b = Math.round(Math.random()*to)+from; if(b<=to && b>=from){return b}}}
export function regex_test(txt,regex){let res = 0; for(let r of regex){r = new RegExp(r); if(r.test(txt)===true){res +=1}else{res += 0}} return res} //let g = regex_test('garedfg fgdfbc women',['woman','women']); o(g); g = 0-->false or 1-->true or 2...
export function repeatFor(num,func){for(let k=0; k<=num; k++){return func()}}
export function randCol(min,max){
    let r = (min+Math.floor(Math.random()*max)).toString(16)
    let g = (min+Math.floor(Math.random()*max)).toString(16)
    let b = (min+Math.floor(Math.random()*max)).toString(16)
    return `${r}${g}${b}`
}
export function screenWidth(){if (typeof screen !== 'undefined'){return screen.width}else{o("screenWidth(): error no data")}}
export function screenHeight(){if (typeof screen !== 'undefined'){return screen.height}else{o("screenHeight(): error no data")}}
export function wait(time,func){setTimeout(() => {func()}, time)}
export function reWait(time,func,num){let counter=0; let si = setInterval(()=>{counter++; if(num && counter == num && num > 0){clearInterval(si)};return func()},time)}
export function rewait(time,func,num){let counter=0; let si = setInterval(()=>{counter++; if(num && counter >= num && num > 0){clearInterval(si)};return func()},time)}

