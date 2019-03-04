

var nlist=["a","b","c","d"];
var i;
var c=0;
var n1=prompt('enter name');
for(i=0;i<=nlist.length;i++)
{
  if (nlist[i]==n1){

    alert("welcome");
    c++;
  }
}
  if (c==0){
    alert("sorry");
  }

/*if(nlist.includes(n1))
{alert("welcome");}
else{
  alert("sorry");
}*/
