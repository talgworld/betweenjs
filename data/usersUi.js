let users = require('./users.json')
let div = (text,style,options)=>{return `<div style="${style}" ${options}>${text}</div>`}
let divs = (divs,style,divContOptions)=>{let dd=''; for(let d in divs){dd+=`<div style="${divs[d][1]}" ${divs[d][2]}>${divs[d][0]}</div>`}; return `<div style= "${style}" ${divContOptions}>${dd}</div>`}
let inCenter_CSS = 'align-items: center; justify-content: center; text-align:center; vertical-align: center;'
let randRange = (from,to)=>{while(true){let b = Math.round(Math.random()*to)+from; if(b<=to && b>=from){return b}}}
let numToHex = (num)=>{let a = num.toString(16); return a}
let css = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
*{font-family:'Poppins', sans-serif;}

</style>
`
let css_1 = `<style>
.BG:hover {
    filter:opacity(95%);
    background: red;
}
.FG:hover {
    filter:opacity(80%);
}
</style>`
//Render users data in colored UI
let msgTxt = 'All users data are generated and not real users'
let msg = divs([[msgTxt,' width: 100%; font-size:50px;']],`color:white; background: black; width:100%; ${inCenter_CSS}`)
let rowUser = `${msg} ${css} ${css_1}`
for(let k = 0; k < users.length; k++){rowUser += divs([   //-->> [[All], [JSON], [Keys], [in], [HTML], [container], [div]],'CSS to this container div','Options like class="btn"'
    [users[k].id,`background-color: #${numToHex(randRange(50,255))}3333; height:50px; width:50px; display:flex; align-items:center; justify-content:center; color:#fafafa; margin-right:20px;`,'class="FG"'],
    [users[k].first_name,'color: white; width:15%','class="FG"'],
    [users[k].last_name,'color: white; width: 15%','class="FG"'],
    [users[k].email,'color: white; width: 40%','class="FG"'],
    [users[k].gender,'color: white; width: 10%','class="FG"'],
    [users[k].ip_address,'color: white; width: 20%','class="FG"']], //-->> [JSON Key in HTML div],'CSS to this only div'
    `background: #${numToHex(randRange(50,255))}3333; display:flex; justify-content: space-between; font-size:25px; padding-left:10px; padding-right:40px; align-items:center`,'class="BG"')}

module.exports={rowUser}