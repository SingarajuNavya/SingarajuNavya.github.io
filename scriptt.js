var data1={image:"imggg.jpeg",name: "Singaraju Navya",designation: "Intern"};
var data2={image:"img1.jpeg",name:"Navya",designation:"Software Developer"};
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
        data2=false;
    }
    document.getElementById("myimage").src=displaydata.image;
  document.getElementById("myname").innerHTML=displaydata.name;
  document.getElementById("mydesig").innerHTML=displaydata.designation;
}
