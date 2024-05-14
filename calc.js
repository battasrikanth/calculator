let Screen=document.getElementById('display')
let miniScreen=document.getElementById('display2')
let historyList = document.getElementById('hist')

function show(n){
    miniScreen.value="";
    Screen.value=Screen.value + n;
}
function equall(){
    miniScreen.value=Screen.value
    let dataEntry=document.createElement('li')
    try{
        Screen.value= eval(Screen.value)
        dataEntry.textContent=miniScreen.value + "= "+ Screen.value
        if(historyList.children.length<16){
        historyList.appendChild(dataEntry)
    }
        else{
            historyList.children[0].remove()
            historyList.appendChild(dataEntry)

        }
    }
    catch(e){
   alert("invalid entry")
    }
}
function clearr(){
    Screen.value="";
    miniScreen.value="";

}
function del(){
    Screen.value=Screen.value.slice(0,-1)
}
function historyy() {
    var x = document.getElementById("histt");
    var y = document.getElementById("calc");
    
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";

    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }