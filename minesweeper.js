console.log('it works!');
/*function func() {
    const sth = document.querySelector(".first");
    console.log(sth);
}
*/

/*ez mukodik

var img = document.getElementById("ajdii");
img.addEventListener('click', function(){
  if(img.src == "./minesweeperelem/first.jpg"){
    img.src = "./minesweeperelem/first.jpg"}
  else{
    img.src = "./minesweeperelem/firstdead.jpg"}});
  
*/


//declare endgamemessage

let egm = document.querySelector('#endgameid');

// squares:

//square 1:
let s1 = document.querySelector('#first');
s1.addEventListener('click', function(){
  s1.src = "./minesweeperelem/numberone.jpg"});

// square 2 also has a bomb:
let s2 = document.querySelector("#ajdii"); // with hashtag it selects the id
s2.addEventListener('click', function(){
s2.src = "./minesweeperelem/firstdead.jpg"
egm.innerHTML='<h1>You loooost, Square 2 had a bomb!<h1>';
document.removeEventListener('click',listenall); 

});

//square 3:
let s3 = document.querySelector('#third');
s3.addEventListener('click', function(){
  s3.src = "./minesweeperelem/numberone.jpg"});

//square 8 and 9 has bomb

//square 4 will have number 2
let s4 = document.querySelector('#fourth');
s4.addEventListener('click', function(){
  s4.src = "./minesweeperelem/numbertwo.jpg"});

//square 5 will have 3 as well
let s5 = document.querySelector('#fifth');
s5.addEventListener('click', function(){
  s5.src = "./minesweeperelem/numberthree.jpg"});
//square 6 will have number 3
let s6 = document.querySelector('#sixth');
s6.addEventListener('click', function(){
  s6.src = "./minesweeperelem/numberthree.jpg"});


//square 7 will have number one
let s7 = document.querySelector('#seventh');
s7.addEventListener('click', function(){
  s7.src = "./minesweeperelem/numberone.jpg"});

//square 8:
let s8 = document.querySelector("#eigth"); 
s8.addEventListener('click', function(){
s8.src = "./minesweeperelem/firstdead.jpg"
egm.innerHTML='<h1>You loooost, Square 8 had a bomb!<h1>';
document.removeEventListener('click',listenall); 

});

//square 9:
let s9 = document.querySelector("#ninth"); 
s9.addEventListener('click', dead9);
function dead9(){
  s9.src = "./minesweeperelem/firstdead.jpg"
egm.innerHTML='<h1>You loooost, Square 9 had a bomb.<h1>';
document.removeEventListener('click',listenall);     //removes the whole document listener which will display the win message when s9 is pressed, since it's an autoloss.
};







/*
let secondcounter = 0;

let idonno = document.querySelectorAll('.nobomb').forEach(item => {
  item.addEventListener('click', event => {
    console.log('classlist is', console.log(item.classList));
    item.classList.add('bombnope');
    console.log('classlist afteradd is', (item.classList));
    document.querySelectorAll(".bombnope").forEach(item => { //copy pasted the one just below it inside this function
      item.addEventListener('click', event => {
        secondcounter=secondcounter+1;
        
    
      })
     
    }) 
    
    
  })
  
})


*/

/*
var x = document.getElementById("myDIV").classList.length;
console.log(x);
*/

/* mb some result
let span = document.querySelector(".nobomb");
let classes = span.classList;
let result = classes.contains(".nobomb");
if (result) {
  console.log('truuuue');
  secondcounter=secondcounter+1;
} else {
   span.textContent = "The classList does not contain 'c'";
}
*/


/*
// still experimenting::

let secondcounter = 0;
let megaf = document.querySelectorAll('.nobomb');
megaf.forEach(item => {
  item.addEventListener('click', event => {
    
    console.log('classlist is', console.log(item.classList));
    
    
    console.log('sth');
    item.classList.add('vmiclasslista');
    console.log('classlist afterremove is', console.log(item.classList));
    if (item.classList.contains('vmiclasslista')===true){
      secondcounter= secondcounter+1;
      
      item.classList.remove('vmiclasslista');
      item.removeEventListener('click', this); //doesnt work...
    }
    
    console.log('secondcounter is',secondcounter);
    if (secondcounter === 6){
      egm.innerHTML='<h1>You woooon</h1>'
    }
  })
})
*/

let secondcounter = 0;

//for first card:
s1.addEventListener('click', fankson1);
function fankson1() {
secondcounter++;
console.log(secondcounter);
document.removeEventListener('click', fankson1);
}


//for third card:
s3.addEventListener('click', fankson3);
function fankson3() {
  secondcounter++;
  console.log(secondcounter);
  s3.removeEventListener('click', fankson3);
  }
  

// fourth card
s4.addEventListener('click', fankson4);
function fankson4() {
  secondcounter++;
  console.log(secondcounter);
  s4.removeEventListener('click', fankson4);
  }
  

//fifth card
s5.addEventListener('click', fankson5);
function fankson5() {
  secondcounter++;
  console.log(secondcounter);
  s5.removeEventListener('click', fankson5);
  }
  

//sixth card
s6.addEventListener('click', fankson6);
function fankson6() {
  secondcounter++;
  console.log(secondcounter);
  s6.removeEventListener('click', fankson6);
  }

//seventh card
s7.addEventListener('click', fankson7);
function fankson7() {
  secondcounter++;
  console.log(secondcounter);
  s7.removeEventListener('click', fankson7);
  }
  
//select all fields and check for 6 good fields:
function listenall(){
  if (secondcounter===6) {
    egm.innerHTML='<h1>You won! <br> Good job! :)</h1>'
  }
}
document.addEventListener('click', listenall);
 






/* a trial below:


//declare a counter
let kanter = 0; //for the third
let kanter1 = 0; // for the first
let kanter4 = 0;
let kanter5 = 0;
let kanter6 = 0;
let kanter7 = 0;
//third
let nobomb3 = document.querySelector("#third");  
nobomb3.classList.add('kula');
nobomb3.addEventListener('click',kanterf);
//first
let nobomb1 = document.querySelector("#first");  
nobomb1.classList.add('kula');
nobomb1.addEventListener('click',kanterf);
//fourth
let nobomb4 = document.querySelector("#fourth");  
nobomb4.classList.add('kula');
nobomb4.addEventListener('click',kanterf);
//fifth
let nobomb5 = document.querySelector("#fifth");  
nobomb5.classList.add('kula');
nobomb5.addEventListener('click',kanterf);

//sixth
let nobomb6 = document.querySelector("#sixth");  
nobomb6.classList.add('kula');
nobomb6.addEventListener('click',kanterf);
//seventh
let nobomb7 = document.querySelector("#seventh");  
nobomb7.classList.add('kula');
nobomb7.addEventListener('click',kanterf);

//function for kanter:
function kanterf(){
  
  
  console.log(nobomb3.classList);


if (nobomb3.classList.contains('kula') === true){
  kanter=kanter+1;
  nobomb3.classList.remove('kula'); 
  kanter1=kanter1-0;
  kanter4=kanter4-0;
  kanter5=kanter5-0;
  kanter6=kanter6-0;
  kanter7=kanter7-0;
}
if (nobomb1.classList.contains('kula') === true){
  kanter1=kanter1+1;
  nobomb1.classList.remove('kula'); 
  kanter=kanter-0;
  kanter4=kanter4-0;
  kanter5=kanter5-0;
  kanter6=kanter6-0;
  kanter7=kanter7-0;
}
if (nobomb4.classList.contains('kula') === true){
  kanter4=kanter4+1;
  nobomb4.classList.remove('kula'); 
}
if (nobomb5.classList.contains('kula') === true){
  kanter5=kanter5+1;
  nobomb5.classList.remove('kula'); 
}
if (nobomb6.classList.contains('kula') === true){
  kanter6=kanter6+1;
  nobomb6.classList.remove('kula'); 
}
if (nobomb7.classList.contains('kula') === true){
  kanter7=kanter7+1;
  nobomb7.classList.remove('kula'); 
}
console.log(nobomb3.classList);

if ((kanter + kanter1 +kanter4+kanter5+kanter6+kanter7) === 6){
    egm.innerHTML='<h1>You woooon</h1>'
  }
  console.log('kanter added',kanter + kanter1 +kanter4+kanter5+kanter6+kanter7);
  console.log(kanter, kanter1, kanter4,kanter5,kanter6,kanter7);
}

*/