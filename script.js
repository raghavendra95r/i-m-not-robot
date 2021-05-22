// let unshuffled = ['https://picsum.photos/seed/{12}picsum/100/100', 'https://picsum.photos/seed/{13}picsum/100/100', 'https://picsum.photos/seed/{14}picsum/100/100', 'https://picsum.photos/seed/{15}picsum/100/100', 'https://picsum.photos/seed/{16}picsum/100/100'];

var count;
var selectedImageName;
var output;
var currentName;

let unshuffled;
let shuffled;

startGame();

function startGame(){
  unshuffled = [`<img src='https://picsum.photos/seed/{11}picsum/100/100' alt="" data-ns-test = 'img1' class='image'>`, `<img src='https://picsum.photos/seed/{12}picsum/100/100' alt="" data-ns-test = 'img2' class='image'>`, `<img src='https://picsum.photos/seed/{13}picsum/100/100' alt="" data-ns-test = 'img3' class='image'>`, `<img src='https://picsum.photos/seed/{14}picsum/100/100' alt="" data-ns-test = 'img4' class='image'>`, `<img src='https://picsum.photos/seed/{15}picsum/100/100' alt="" data-ns-test = 'img5' class='image'>`];

  count = 0;
  selectedImageName = "";
  currentName = "";
  output = ""; 
  var random = unshuffled[Math.floor(Math.random() * unshuffled .length)];
  console.log(random);
  unshuffled.push(random);

shuffled = unshuffled
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)

let el = document.getElementById("images");

for(var i= 0; i < shuffled.length; i++){
  output = output +  shuffled[i];
}
// console.log(output);
el.innerHTML = output;
clickImages();
}


function gameReset(){
  startGame();
  document.getElementById("para").innerHTML =  "";
  document.getElementById("reset").style.display = "none";
  document.getElementById("btn").style.display = "none";
}

function verify(){
  if(currentName === selectedImageName){
    document.getElementById("para").innerHTML =  "You are a human. Congratulations!";
  }else{
    document.getElementById("para").innerHTML =  "We can't verify you as a human. You selected the non-identical tiles.";  
  }

  document.getElementById("btn").style.display = "none";
}

function clickImages(){
  document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('click', event => {
      // item.style['pointer-events'] = "none";
      // item.setAttribute("data-clicked","false");
      console.log(item.getAttribute('data-ns-test'));
      count++;
      if(count > 0){
        document.getElementById("reset").style.display = "inline";
        if(count == 2){
          document.getElementById("btn").style.display = "inline";
        }else if(count > 2){
          document.getElementById("btn").style.display = "none";
          document.getElementById("para").innerHTML =  "We can't verify you as a human. You selected the non-identical tiles.";
          return;
        }
      } 
      currentName = item.getAttribute('data-ns-test');
      if(count == 1){
        item.setAttribute("data-clicked","true");
        selectedImageName = currentName;
      }else if(item.getAttribute("data-clicked") == "true"){
        selectedImageName = "";
        document.getElementById("btn").style.display = "none";
        count--;
      }
    })
  })
}







