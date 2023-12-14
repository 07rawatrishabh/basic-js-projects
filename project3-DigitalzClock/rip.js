let c=document.querySelector('.clock');
setInterval(function(){
    let d=new Date();
    c.innerHTML=d.toISOString();
},1000)