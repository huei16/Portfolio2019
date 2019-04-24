var image1 = document.getElementById("i1");
var button1 = document.getElementById("1");
var image2 = document.getElementById("i2");
var image3 = document.getElementById("i3");
var image4 = document.getElementById("i4");
var image5 = document.getElementById("i5");


button1.onclick = function (){
  if(image1.className == "show")
  {image1.className = "stay";
    image2.className= "";
    image3.className= "";
    image4.className= "";
    image5.className= "";}
  else
  {image1.className = "show";
    image2.className= "";
    image3.className= "";
    image4.className= "";
    image5.className= "";}
};




var image2 = document.getElementById("i2");
var button2 = document.getElementById("2");
var image1 = document.getElementById("i1");
var image3 = document.getElementById("i3");
var image4 = document.getElementById("i4");
var image5 = document.getElementById("i5");

button2.onclick = function (){
  if(image2.className == "show")
  {image2.className = "stay";
  image1.className= "hide";
  image3.className= "";
  image4.className= "";
  image5.className= "";}
  else
  {image2.className = "show";
  image1.className= "hide";
  image3.className= "";
  image4.className= "";
  image5.className= "";}
};




var image3 = document.getElementById("i3");
var button3 = document.getElementById("3");
var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");
var image4 = document.getElementById("i4");
var image5 = document.getElementById("i5");

button3.onclick = function (){
  if(image3.className == "show")
  {image3.className = "stay";
  image1.className= "hide";
  image2.className= "";
  image4.className= "";
  image5.className= "";}
  else
  {image3.className = "show";
  image1.className= "hide";
  image2.className= "";
  image4.className= "";
  image5.className= "";}
};




var image4 = document.getElementById("i4");
var button4 = document.getElementById("4");
var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");
var image3 = document.getElementById("i3");
var image5 = document.getElementById("i5");

button4.onclick = function (){
  if(image4.className == "show")
  {image4.className = "stay";
  image1.className= "hide";
  image2.className= "";
  image3.className= "";
  image5.className= "";}
  else
  {image4.className = "show";
  image1.className= "hide";
  image2.className= "";
  image3.className= "";
  image5.className= "";}
};




var image5 = document.getElementById("i5");
var button5 = document.getElementById("5");
var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");
var image3 = document.getElementById("i3");
var image4 = document.getElementById("i4");

button5.onclick = function (){
  if(image5.className == "show")
  {image5.className = "stay";
  image1.className= "hide";
  image2.className= "";
  image3.className= "";
  image4.className= "";}
  else
  {image5.className = "show";
  image1.className= "hide";
  image2.className= "";
  image3.className= "";
  image4.className= "";}
};
