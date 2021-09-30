function createHtml(array) {
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

async function getGames() {
    let query= await fetch('../../games.json');
    let data=await query.json();
    console.log(data);
    let container=document.querySelector('.grid-container');
    let list=[];
    for (let element in data) {
        if (data[element]['platform']=='all') {
            list.push(data[element]);
        };
    };
    let fragment=document.createDocumentFragment();
    for (let index = 0; index < list.length; index++) {
        let element = list[index];
        let box=createHtml(element);
        let div=document.createElement('DIV');
        div.classList.add("item");
        div.innerHTML=box[0]+box[1]+box[2]+box[3];
        fragment.appendChild(div);
    };
    console.log(fragment);
    container.appendChild(fragment);
};
getGames();