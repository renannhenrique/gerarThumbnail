
document.querySelector("#gerar").addEventListener("click", ()=>{
    
    let linkValor = document.querySelector("#link").value;
    let linkCode = linkValor.slice(32);
        

    // Mini thumbnail
    let thumbMini = `<img src="https://img.youtube.com/vi/${linkCode}/default.jpg">`;

    // Grande thumbnail
    let thumbMax = `<img width="500" src="https://img.youtube.com/vi/${linkCode}/maxresdefault.jpg">`;

        document.querySelector(".thumbBox").innerHTML = thumbMini;
        document.querySelector(".thumbBox2").innerHTML = thumbMax;

       
    
    linkValor.value = "";

       
});

