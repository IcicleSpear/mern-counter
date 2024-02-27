const decrese=document.getElementById("dec");
const reset=document.getElementById("res");
const increse=document.getElementById("inc");
const countlabel=document.getElementById("countlabel");
let count=0;

increse.onclick=function()
{
    count++;
    countlabel.textContent=count;
}

decrese.onclick=function()
{
    count--;
    countlabel.textContent=count;
}

reset.onclick=function()
{
    count=0;
    countlabel.textContent=count;
}
