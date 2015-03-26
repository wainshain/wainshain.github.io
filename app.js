$(function()  {

  var a =0;
  var b=0; 
  var c=0;
  var d=0;
  var i = 0;
  var k = 0;
  var l=0;
var currentText= ' ';

function show(){
	$('#number').text(currentText);
}


function enter(number){
  var p=parseFloat(currentText);
  if(p==0){
    currentText=(p+number).toString();
    show();
  }
  else{
    currentText+=number;
    show();
  }
	}


function operator(number){

if( a==0){
    a=parseFloat(currentText);
    currentText='';
    l=number; 
  }
  else 
  {
    equal();
    l=number;
  }

}


function equal(){
  if (l==1) {
    b=parseFloat(currentText);
    currentText=(a+b).toString();
    show();
     a=parseFloat(currentText);
    currentText='';
    b=0;
    l=0;

  };
  if(l==2) {
    b=parseFloat(currentText);
    currentText=(a-b).toString();
    show();
    a=parseFloat(currentText);
    currentText='';
    b=0;
    l=0;

  };

  if(l==3) {
    b=parseFloat(currentText);
    currentText=(a*b).toString();
    show();
    a=parseFloat(currentText);
    currentText='';
    b=0;
    l=0;

  };
  if(l==4) {
    b=parseFloat(currentText);
    currentText=(a/b).toString();
    show();
    a=parseFloat(currentText);
    currentText='';
   
    b=0;
    l=0;

  };
}

function clean(){
  currentText='0';
  a=0;
  b=0;
  l=0;
  show();
}

$('#b1').on('click',function(){ enter(1); });
$('#b2').on('click',function(){ enter(2); });
$('#b3').on('click',function(){ enter(3); });
$('#b4').on('click',function(){ enter(4); });
$('#b5').on('click',function(){ enter(5); });
$('#b6').on('click',function(){ enter(6); });
$('#b7').on('click',function(){ enter(7); });
$('#b8').on('click',function(){ enter(8); });
$('#b9').on('click',function(){ enter(9); });
$('#b0').on('click',function(){ enter(0); });
$('#bp').on('click',function(){ operator(1);});
$('#bminus').on('click',function(){ operator(2);});
$('#bmult').on('click',function(){ operator(3);});
$('#bdivide').on('click',function(){ operator(4);});
$('#bequal').on('click',function(){ equal();});
$('#bc').on('click',function(){ clean();});


});