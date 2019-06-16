// solutions to the exercises mentioned in the readme should be in this file.

function compare(a, b){
 
  if (a>b){
    document.getElementById("demo").innerHTML ="b is greater than a";
  }
  else if (b>a){
  document.getElementById("demo").innerHTML ="b is greater than a"; 
  }
}

compare(19,5);


function count(){
 var i;
  for (i = 0; i <= 15; i++) 
  { 
      if(i % 2 == 0)
      {
      window.alert(i + ' is even');
      }
      else if (i% 2 !==0)
      { 
       window.alert(i + ' is odd');
      }
   }
} 
                    
count();

function multiples(a, b){
 
  var mulA = a;
  var mulB = b;
  var tmpA = 0;
  var tmpB = 0;
  var tmp = 0;
  
  
  for (var i = 0; i <= 1000; i++)
  {
  
  if (i % mulA == 0)
  {
    a += mulA;
    tmpA = a;
  }
  
  if (i % mulB == 0)
  {
    b += mulB;
    tmpB = b;
  }
  
  tmp = tmpA + tmpB; 
    
  }
  
  document.getElementById("demo").innerHTML = tmp;
  
  }
  
multiples(3,5);

function assignGrade(g){
  
var grade;
 if (g > 90 || g < 100)
 {
   
 }
  
}
