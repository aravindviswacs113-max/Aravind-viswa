const a=document.getElementById("fr");
if (fr){
    const text="Welcome to My Portfolio 🚀";
    let i=0;

    function typeWriter(){
        if (i<text.length){
            fr.textContent+=text.charAt(i);
            i++;
            setTimeout(typeWriter,100);
        }
    }
    typeWriter();
}