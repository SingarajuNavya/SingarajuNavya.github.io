var data1={image:"imggg.jpeg",name: "Singaraju Navya",designation: "Intern"};
var data2={image:"imgg.jpg",name:"Navya",designation:"Software Developer"};
var isdata1=true;
var displaydata;
var changemypic=function()
{
    if(isdata1)
    {
        displaydata=data2;
        isdata1=false;
    }
    else{
        displaydata=data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
  document.getElementById("myname").innerHTML=displaydata.name;
  document.getElementById("mydesig").innerHTML=displaydata.designation;
}
