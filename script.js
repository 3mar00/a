let tool = document.querySelector(".tool").childNodes;
let test = document.querySelector(".test");
let tost = document.querySelector(".tost");
let taskbar = document.querySelector(".taskbar");
let paste = document.querySelector(".ppa");
let rnga = document.querySelectorAll(`.sclr input[type="range"]`);
let copy_b = false;
let paste_b = false;
let copy_p;
let copy;
let t = 0;
let del = document.querySelector("#remove");
let run = document.querySelector("#run");
// opj full srart
let opj = {

    divR: {
        n: 'div',
        s: 'display:flex; flex-direction:row; width:100%; height:main-content;',
        t:""
    },
    
    divC: {
        n: 'div',
        t:'',
        s: 'display:flex; flex-direction:column; height:100%; width:max-content;',
    },
    link :{
        n: 'a',
        t: 'link',
        s: '',
    },
    button:{
        n: 'button',
        t: 'button',
        s:'',
    },
    Text:{
        n: 'h1',
        t: 'h1',
        s: '',

    },
    input:{
        n: 'input',
        t: '',
        s: `type="text";placeholder='text'`,
    },
    img: {
        n: 'img',
        t: '',
        s: `src='icon/img.png'`,
    },
    checkBox : {
        n: 'input',
        t: '',
        s: `type="checkbox"`
    },
    radioButton:{
        n: 'input',
        t: '',
        s: ''
    },
    prograse: {
        n: '',
        t: '',
        s: ''
    },
    
    range: {
        n: 'input',
        s: ''
    },
    ul: {
        n: 'ul',
        t: '',
        s: '',
    },
    li: {
        n: 'li',
        t:"",
        s: ''},
}
// opj full end
// copy start
tool.forEach((a) => {
    
    a.onmousedown = (a) => {
        
        t++;
        tost.style.display = 'none';
        clearTimeout(t);
        tost.style.display = "flex";
        del.className="sc"
        copy_b = true;
        paste_b = true;
        let e = setTimeout(() => { tost.style.display = 'none' }, 550);
        
        copy = opj[a.path[0].id];
    }
})
// copy end

// paste start
test.onclick = (a) => {
    if (a.path[0].className != "test") {
        
        let o = document.querySelectorAll('.test .omar');
        taskbar.removeAttribute('style');
            o.forEach((a) => {

                a.classList.remove('omar');
                
            })
        a.path[0].className = 'omar'
    }


    
        if (copy_b) {
           
            copy_p = a.path[0];
            paste.style.cssText += `left:${a.x}px; top:${a.y + 10}px;`;
            if (paste_b) {
                
                paste.style.removeProperty("display");
                paste.style.display = 'flex';
                
                
            } else { paste_b = true }
            
        }
        
        
    }
    
    paste.onclick = () => {
        
        paste.style.removeProperty("display");
        paste.style.display= "none";
        paste_b = false;
        let ele = document.createElement(copy.n);
        ele.innerHTML = copy.t;
        ele.style = copy.s;
        ele.style.padding="8px";
        copy_p.appendChild(ele);
        
    }
    // paste end

del.onclick = (a) => {
    if (copy_b) {
        
        del.removeAttribute('class');
        paste_b = false;
        copy_b = false;
        paste.style.removeProperty("display");
        paste.style.display= "none";
        
        
  } 


}

// select color b | c
let c = {
    
    r: 0,
    g: 0,
    b: 0,
    a: 255,
    
}
function hex(a) {
    
    let h = parseInt(a).toString(16);
    
    return h.length == 1 ? h + '0':h
}

let sclr_p = document.querySelector('.sclr p');
let sclr_b = document.querySelector('.sclr button');
let rgp = `rgb(${c.r}, ${c.g}, ${c.b} ${c.a == 255 ? "" : "," + c.a})`;
let color = "#" + hex(c.r) + hex(c.g) + hex(c.b) + `${c.a == 255 ? "" : hex(c.a)}`;
rnga.forEach((a) => {

    document.querySelector("." + a.id).innerHTML = a.value;
    sclr_p.innerHTML = rgp;
    sclr_b.innerHTML = color;
 
    
    a.onchange = () => {

        c[a.id.charAt(a.id.length - 1)] = a.value;
        let al = c.a * 4, l = al < 1000 ? "." + al : 31; 
        console.log(l)
        document.querySelector("." + a.id).innerHTML = a.value;
        color = "#" + hex(c.r) + hex(c.g) + hex(c.b) + `${c.a == 255 ? "" : hex(c.a)}`;
        sclr_b.innerHTML = color;
        sclr_p.style.background = color;
        rgp = `rgb(${c.r}, ${c.g}, ${c.b}${l == 31 ? "" : ", " + l})`;
        sclr_p.innerHTML = rgp;
    }
})

sclr_p.onclick = () => 
sclr.style.display = "none";
sclr_b.onclick = () =>
    sclr.style.display = "none";

// ele to 2
let sclr = document.querySelector(".sclr");
let bkd = document.querySelector('#background');
bkd.onclick = () => {
sclr.style.display="flex"
}