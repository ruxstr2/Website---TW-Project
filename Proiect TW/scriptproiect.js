window.onload = function() {
  let xml =new XMLHttpRequest();
  let dogs;
  xml.open("GET","test.json",true);
  xml.send();
  xml.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200){
      dogs=JSON.parse(xml.responseText);
      showDogs(dogs);
    }
  }
}
/*http-server -c-1 */
function showDogs(Dogs) {
  let l=Dogs.dogs.length;
  for (let i=0; i<l;i++)
  {
    let nume=document.createElement("p");
    nume.innerHTML=Dogs.dogs[i].name;
    let image=document.createElement("img");
    image.src=Dogs.dogs[i].img;
    image.width= 320; 
    image.height=250;
    document.getElementById('display').appendChild(nume);
    document.getElementById('display').appendChild(image);
  }
}
/*TEMPLE */
document.getElementById('show').addEventListener("click",ShowPicture);
document.getElementById('hide').addEventListener("click",HidePicture);
document.getElementById('resize').addEventListener("click",ResizePicture);
var i=document.createElement("img");
function ShowPicture ()
{
i.src="temple.jpg";
i.width=1000;
document.getElementById("imagine").appendChild(i);
}
function HidePicture ()
{
  document.getElementById("imagine").removeChild(i);
}
function ResizePicture()
{
  i.width = "300";
}

/*************** */ 
document.getElementById("getbyid").style.color= "orange";
document.getElementById("getbyid").style.textDecoration="underline";
document.getElementById("getbyid").style.fontStyle= "italic";
function Gold() {
  var x = document.getElementsByClassName("example");
  x[0].innerHTML = "Magnanimous is Unanimous";
  x[0].style.color="orange";
  x[0].style.textDecoration="underline";
  x[0].style.fontStyle="italic";
}


/*SEMINEM */
var par=document.createElement("p");
par.innerText="help!!!";
document.getElementById('placehere').appendChild(par);

function display() { 
  if(document.getElementById('GFG').checked) {
      document.getElementById("disp").innerHTML
          = document.getElementById("GFG").value
          + " has been selected";
      Show1();
  }
  else if(document.getElementById('HTML').checked) {
      document.getElementById("disp").innerHTML
          = document.getElementById("HTML").value
          + " has been selected";
      Show2();  
  }
  else if(document.getElementById('JS').checked) {
      document.getElementById("disp").innerHTML
          = document.getElementById("JS").value
          + " has been selected";
      Show3();  
  }
  else {
      document.getElementById("disp").innerHTML
          = "You have not picked a destination";
  }
}


function Show1()
{
  var xxx=document.createElement("img");
    xxx.src="maze.jpg";
    xxx.width=1000;
  document.getElementById("placehere").appendChild(xxx);
  setTimeout(Delete1,4000);
  function Delete1()
  {
    document.getElementById("placehere").removeChild(xxx);
  }
}

function Show2()
{
  var xxy=document.createElement("img");
    xxy.src="tenement.jpg";
    xxy.width=1000;
  document.getElementById("placehere").appendChild(xxy);
  setTimeout(Delete2,4000);
  function Delete2()
  {
    document.getElementById("placehere").removeChild(xxy);
  }
}

function Show3()
{
  var xxz=document.createElement("img");
    xxz.src="bar.jpg";
    xxz.width=1000;
  document.getElementById("placehere").appendChild(xxz);
  setTimeout(Delete3,4000);
  function Delete3()
  {
    document.getElementById("placehere").removeChild(xxz);
  }
}

/*SEMINEM */


function getRandomImage() {  
  var randomImage = new Array();  

  randomImage[0]={sursa: "temple.jpg", h: "400", w: "500"}
  randomImage[1]={sursa: "shop1.jpg", h: "470", w: "500"} 
  randomImage[2]={sursa: "tenement.jpg", h: "400", w: "530"} 
  randomImage[3]={sursa: "tunnel.jpg", h: "400", w: "500"} 
 randomImage[4]={sursa: "maze.jpg", h: "400", w: "500"} 
  randomImage[5]={sursa: "well1.jpg", h: "400", w: "500"} 
  randomImage[6]={sursa: "alley.jpg", h: "400", w: "500"}
  randomImage[7]={sursa: "archway.jpg", h: "400", w: "500"}
  randomImage[8]={sursa: "bar.jpg", h: "400", w: "500"}
  randomImage[9]={sursa: "building1.jpg", h: "400", w: "500"}
  randomImage[10]={sursa: "history1.jpg", h: "400", w: "530"}
  randomImage[11]={sursa: "pavement.jpg", h: "400", w: "500"}
     
  var number = Math.floor(Math.random()*randomImage.length);  

  return document.getElementById("result").innerHTML = '<img src="'+randomImage[number].sursa+'" height="'+randomImage[number].h+'" width="'+randomImage[number].w+'"  />';  
  }  



