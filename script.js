// Swipper code
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Selections games data API
const request=new XMLHttpRequest();
request.open("GET","games.json");
request.send();

request.addEventListener("load", ()=>{
  const data=JSON.parse(request.response);
  console.log(data);

  let keys=Object.keys(data);
  console.log(keys);
  let bestsellers=[];
  let familiar=[];
  let free=[];
  let action=[];

  for (let element in data) {
    if (data[element]["best-seller"]==true) {
      bestsellers.push(data[element]);
    };
    if (data[element]["clasification"]=="familiar") {
      familiar.push(data[element]);
    };
    if (data[element]["price"]=="free") {
      free.push(data[element]);
    };
    if (data[element]["gender"]=="action") {
      action.push(data[element]);
    };
  };
  gamesArray=[bestsellers, familiar, action, free];
  console.log(gamesArray);
  function createHtml(array) {
    // let img=`<img src="${array["img"]}" alt="">`;
    let img=`<img src="${array["img"]}" alt="">`;
    let gameName=`<p class="gameName">${array["name"]}</p>`;
    if (array["price"]=="free") {
      let price=`<p class="gamePrice">Free to play</p>`;
      let button=`<button>Download now</button>`;
      return [img, gameName, price, button];
    } else {
      let price=`<p class="gamePrice">Price: $${array["price"]}</p>`;
      let button=`<button>Buy now</button>`;
      return [img, gameName, price, button];
    };
  };
  const bestsellersContainer=document.querySelector(".bestsellers-part");
  const familiarGamesContainer=document.querySelector(".familiarGames-part");
  const actionGamesContainer=document.querySelector(".actionGames-part");
  const freeGamesContainer=document.querySelector(".freeGames-part");
  let arrayOfContainers=[bestsellersContainer, familiarGamesContainer, actionGamesContainer, freeGamesContainer];

  for (let iExt = 0; iExt < arrayOfContainers.length; iExt++) {
    let fragment=document.createDocumentFragment();
    let cont=1;
    // gamesArray[iExt].length
    for (let iInt = 0; iInt < 8; iInt++) {
      let div=document.createElement("DIV");
      let box=createHtml(gamesArray[iExt][iInt]);
      let operation=Math.trunc(cont/4.1);
      cont+=1;
      div.classList.add("selection-item", `line-${operation+1}`);
      if (div.classList.item(1)=="line-1") {
        div.classList.add("display-class");
      } else {
        div.classList.add("no-display-class","changable-line");
      };
      div.innerHTML=box[0]+box[1]+box[2]+box[3];
      fragment.appendChild(div);
    };
    arrayOfContainers[iExt].appendChild(fragment);
  };
}, true);
  
//Best sellers section logistics 
var bestsellerButton=document.querySelector('.bestseller-button');
var bestsellerButtonState=1;
var showAllBestsellers=document.querySelector(".showAllBestsellers");

bestsellerButton.addEventListener("click",()=>{
  bestsellerButtonState+=1;
  let line2=document.querySelectorAll(`.bestsellers-part > .line-2`);  
  if (bestsellerButtonState%2==0) {
    line2.forEach((item)=>{
      item.classList.replace("no-display-class","display-class");
    }); 
    bestsellerButton.innerText="Show me less";  
    showAllBestsellers.classList.replace("no-display-class","display-class");
    let scrollY=window.scrollY; 
    window.scroll(0,scrollY+300);
  } else {
    line2.forEach((item)=>{
      item.classList.replace("display-class","no-display-class");
    }); 
    bestsellerButton.innerText="Show me more";
    showAllBestsellers.classList.replace("display-class","no-display-class");
    let scrollY=window.scrollY; 
    window.scroll(0,scrollY-300);
}});

//Familiar section logistics 
var familiarButton=document.querySelector('.familiar-button');
var familiarButtonState=1;
var showAllFamiliar=document.querySelector(".showAllFamiliar");

familiarButton.addEventListener("click",()=>{
  familiarButtonState+=1;
  let line2=document.querySelectorAll(`.familiarGames-part > .line-2`);  
  if (familiarButtonState%2==0) {
    line2.forEach((item)=>{
      item.classList.replace("no-display-class","display-class");
    }); 
    familiarButton.innerText="Show me less"; 
    showAllFamiliar.classList.replace("no-display-class","display-class");
    let scrollY=window.scrollY; 
    window.scroll(0,scrollY+300);
  } else {
    line2.forEach((item)=>{
      item.classList.replace("display-class","no-display-class");
    }); 
    familiarButton.innerText="Show me more";
    showAllFamiliar.classList.replace("display-class","no-display-class");
    let scrollY=window.scrollY; 
    window.scroll(0,scrollY-300);
}});

//Action section logistics 
var actionButton=document.querySelector('.action-button');
var actionButtonState=1;
var showAllAction=document.querySelector(".showAllAction");

actionButton.addEventListener("click",()=>{
  actionButtonState+=1;
  let line2=document.querySelectorAll(`.actionGames-part > .line-2`);  
  if (actionButtonState%2==0) {
    line2.forEach((item)=>{
      item.classList.replace("no-display-class","display-class");
    }); 
    actionButton.innerText="Show me less";  
    showAllAction.classList.replace("no-display-class","display-class");
    let scrollY=window.scrollY; 
    window.scroll(0,scrollY+300);
  } else {
    line2.forEach((item)=>{
      item.classList.replace("display-class","no-display-class");
    }); 
    actionButton.innerText="Show me more";
    showAllAction.classList.replace("display-class","no-display-class");
    let scrollY=window.scrollY; 
    window.scroll(0,scrollY-300);
}});

//Free-to-play section logistics 
var freeButton=document.querySelector('.free-button');
var freeButtonState=1;
var showAllFree=document.querySelector(".showAllFree");

freeButton.addEventListener("click",()=>{
  freeButtonState+=1;
  let line2=document.querySelectorAll(`.freeGames-part > .line-2`);  
  if (freeButtonState%2==0) {
    line2.forEach((item)=>{
      item.classList.replace("no-display-class","display-class");
    }); 
    freeButton.innerText="Show me less";  
    showAllFree.classList.replace("no-display-class","display-class");
    let scrollY=window.scrollY; 
    window.scroll(0,scrollY+300);
  } else {
    line2.forEach((item)=>{
      item.classList.replace("display-class","no-display-class");
    }); 
    freeButton.innerText="Show me more";
    showAllFree.classList.replace("display-class","no-display-class");
}});


