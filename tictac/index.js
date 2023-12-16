function myfunc(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById('1').value;
    b2=document.getElementById('2').value;
    b3=document.getElementById('3').value;
    b4=document.getElementById('4').value;
    b5=document.getElementById('5').value;
    b6=document.getElementById('6').value;
    b7=document.getElementById('7').value;
    b8=document.getElementById('8').value;
    b9=document.getElementById('9').value;

    var btn1=document.getElementById('1');
    var btn2=document.getElementById('2');
    var btn3=document.getElementById('3');
    var btn4=document.getElementById('4');
    var btn5=document.getElementById('5');
    var btn6=document.getElementById('6');
    var btn7=document.getElementById('7');
    var btn8=document.getElementById('8');
    var btn9=document.getElementById('9');

    if(b1=='x' && b2=='x' && b3=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if(b4=='x' && b5=='x' && b6=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if(b7=='x' && b8=='x' && b9=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
    }
    else if(b1=='x' && b4=='x' && b7=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn2.disabled=true;
        btn3.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if(b2=='x' && b5=='x' && b8=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn1.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn9.disabled=true;
    }
    else if(b3=='x' && b6=='x' && b9=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn1.disabled=true;
        btn2.disabled=true;
        btn4.disabled=true;
        btn5.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
    }
    else if(b1=='x' && b5=='x' && b9=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn2.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
    }
    else if(b3=='x' && b5=='x' && b7=='x' ){
        document.getElementById('winner').innerHTML='Player X Won'
        btn1.disabled=true;
        btn2.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if(b1=='0' && b2=='0' && b3=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if(b4=='0' && b5=='0' && b6=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if(b7=='0' && b8=='0' && b9=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
    }
    else if(b1=='0' && b4=='0' && b7=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn2.disabled=true;
        btn3.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if(b2=='0' && b5=='0' && b8=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn1.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn9.disabled=true;
    }
    else if(b3=='0' && b6=='0' && b9=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn1.disabled=true;
        btn2.disabled=true;
        btn4.disabled=true;
        btn5.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
    }
    else if(b1=='0' && b5=='0' && b9=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn2.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
    }
    else if(b3=='0' && b5=='0' && b7=='0' ){
        document.getElementById('winner').innerHTML='Player 0 Won'
        btn1.disabled=true;
        btn2.disabled=true;
        btn4.disabled=true;
        btn6.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else if((b1=='x'||b1=='0')&&(b2=='x'||b2=='0')&&(b3=='x'||b3=='0')&&(b4=='x'||b4=='0')&&(b5=='x'||b5=='0')&&(b6=='x'||b6=='0')&&(b7=='x'||b7=='0')&&(b8=='x'||b8=='0')&&(b9=='x'||b9=='0')){
        document.getElementById('winner').innerHTML="Match Tie"
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
    }
    else{
        if (flag == 1) { 
            document.getElementById('winner') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('winner') 
                .innerHTML = "Player 0 Turn"; 
        } 
    }    
}

flag=1;
function myfunc_2(){
    if(flag==1){
        document.getElementById('1').value='x';
        document.getElementById('1').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('1').value='0';
        document.getElementById('1').disabled=true;
        flag=1;
    }
}
function myfunc_3(){
    if(flag==1){
        document.getElementById('2').value='x';
        document.getElementById('2').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('2').value='0';
        document.getElementById('2').disabled=true;
        flag=1;
    }
}
function myfunc_4(){
    if(flag==1){
        document.getElementById('3').value='x';
        document.getElementById('3').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('3').value='0';
        document.getElementById('3').disabled=true;
        flag=1;
    }
}
function myfunc_5(){
    if(flag==1){
        document.getElementById('4').value='x';
        document.getElementById('4').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('4').value='0';
        document.getElementById('4').disabled=true;
        flag=1;
    }
}
function myfunc_6(){
    if(flag==1){
        document.getElementById('5').value='x';
        document.getElementById('5').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('5').value='0';
        document.getElementById('5').disabled=true;
        flag=1;
    }
}
function myfunc_7(){
    if(flag==1){
        document.getElementById('6').value='x';
        document.getElementById('6').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('6').value='0';
        document.getElementById('6').disabled=true;
        flag=1;
    }
}
function myfunc_8(){
    if(flag==1){
        document.getElementById('7').value='x';
        document.getElementById('7').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('7').value='0';
        document.getElementById('7').disabled=true;
        flag=1;
    }
}
function myfunc_9(){
    if(flag==1){
        document.getElementById('8').value='x';
        document.getElementById('8').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('8').value='0';
        document.getElementById('8').disabled=true;
        flag=1;
    }
}
function myfunc_10(){
    if(flag==1){
        document.getElementById('9').value='x';
        document.getElementById('9').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('9').value='0';
        document.getElementById('9').disabled=true;
        flag=1;
    }
}
function reset() { 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 