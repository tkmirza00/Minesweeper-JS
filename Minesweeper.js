 
 document.getElementById('IntroButton').onclick=function()
{
  
    if(document.getElementById('IntroButton').textContent== "Start Game"){
    let tag=[];
    let tag1=[];
    let main=document.getElementById("Grid");
    for(var i=0;i<8;i++){
      
        tag1[i]=document.createElement('div');
        for(var n=0;n<8;n++){
       createcell(n,i,tag[n],tag1[i]); 
        }
    
    main.appendChild(tag1[i]);
    }
    document.getElementById('IntroButton').textContent="Restart";
}
}
function createboard(){
    let tag=[];
    let tag1=[];
    let main=document.getElementById("Grid");
    for(var i=0;i<8;i++){
      
        tag1[i]=document.createElement('div');
        for(var n=0;n<8;n++){
       createcell(n,i,tag[n],tag1[i]); 
        }
    
    main.appendChild(tag1[i]);
    }
}
function createcell(n,i,tag,tag1){
    tag= document.createElement('button');
    tag.classList.add("mybutton");
    tag.textContent="W"
    tag.setAttribute('id',((i).toString()+(n).toString()));
    tag.setAttribute('textContent',((i).toString()+(n).toString()));
    //tag.setAttribute('onclick',myfunction());
    tag.setAttribute('onclick','myfunction(this);');
   // tag.onclick = function() {myfunction();};
    console.log(((i).toString()+(n).toString()));
    tag1.appendChild(tag);
    
}

function myfunction(obj){
    document.getElementById(obj.id).textContent="R";

}
let a="https://github.com/Zain-Gill123/MinesweeperUsingJavaScriptOOP.git"