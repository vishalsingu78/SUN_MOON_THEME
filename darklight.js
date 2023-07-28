var num=0;
function move(){
    
    if(num==0){
    document.getElementById("iconimgs").style.left="137px";
    document.getElementById("image").src="./moon.png";
    document.getElementById("bgd").style.backgroundColor="black";
    document.getElementById("btnbar").style.outline="5px solid white";
    document.getElementById("btnbar").style.boxShadow="5px 5px 10px white";
    document.getElementById("bigimg").src="./big moon.png";
    num++;
    }
    else{
        document.getElementById("iconimgs").style.left="2px";
        document.getElementById("image").src="./sun.png";
        document.getElementById("bgd").style.backgroundColor="white";
        document.getElementById("btnbar").style.outline="5px solid black";
        document.getElementById("btnbar").style.boxShadow="5px 5px 10px black";
        document.getElementById("bigimg").src="./big sun.png";
        num--;
    }
}