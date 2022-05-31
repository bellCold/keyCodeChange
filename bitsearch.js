const goodsName = document.getElementById("name");
const goodsCompany = document.getElementById("company");
const goodsPrice = document.getElementById("price");
const getBtn = document.getElementById("getBtn");
const outBtn = document.getElementById("outBtn");
const searchBar = document.getElementById("searchBar");
const serachBtn = document.getElementById("serachBtn");
const outPrint = document.getElementById("outPrint");
const itemList = document.getElementById("itemList");
const menuBTn = document.getElementById("menuBTn");

let itemStorage = [];

function saveItemInfo() {
    outPrint.innerText = "";
    itemList.innerText = "";
    itemStorage.push({ name: goodsName.value, company: goodsCompany.value, price: goodsPrice.value });
    goodsName.value = "";
    goodsCompany.value = "";
    goodsPrice.value = "";
}

function writeItemInfo() {
    /* table reset */
    outPrint.innerText = "";
    itemList.innerText = "";

    /* table setting */
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    itemList.appendChild(table);

    /* table head */
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerText = "물건 이름";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "제조 회사";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "물건 가격";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    /* table list */

    for (let i = 0; i < itemStorage.length; i++) {
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = itemStorage[i].name;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = itemStorage[i].company;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = itemStorage[i].price;
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        tbody.appendChild(row_2);
    }

    //itemStorage.forEach(key => outPrint.innerText = `물건이름 : ${key.name} \n 제조회사 : ${key.company} \n 물건 가격 : ${key.price}`);
}

function itemSearch() { 
    itemList.innerText = "";
    searchBar.value = "";
    for (let i = 0; i < itemStorage.length; i++) {
        if (searchBar.value == itemStorage[i].name) {
            outPrint.innerText = `검색하신 이름 : ${itemStorage[i].name} \n 제조회사 : ${itemStorage[i].company} \n 물건 가격 : ${itemStorage[i].price}`
            return;
        } else {
            outPrint.innerText = "존재하는 물건이없습니다.";
        }
    } 
}

function menuListSlide() {
    
}

getBtn.addEventListener("click", saveItemInfo);
outBtn.addEventListener("click", writeItemInfo);
serachBtn.addEventListener("click", itemSearch);
menuBTn.addEventListener("click", menuListSlide)



