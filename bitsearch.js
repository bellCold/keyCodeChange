const goodsName = document.getElementById("name");
const goodsCompany = document.getElementById("company");
const goodsPrice = document.getElementById("price");
const getBtn = document.getElementById("getBtn");
const outBtn = document.getElementById("outBtn");
const searchBar = document.getElementById("searchBar");
const serachBtn = document.getElementById("serachBtn");
const outPrint = document.getElementById("outPrint");

let itemStorage = [];

function saveItemInfo() {
    itemStorage.push({ name: goodsName.value, company: goodsCompany.value, price: goodsPrice.value });
    goodsName.value = "";
    goodsCompany.value = "";
    goodsPrice.value = "";
}

function writeItemInfo() {
    itemStorage.forEach(key => outPrint.innerText = `물건이름 : ${key.name} \n 제조회사 : ${key.company} \n 물건 가격 : ${key.price}`);
}

function itemSearch() {
    for (let i = 0; i < itemStorage.length; i++) {
        if(searchBar.value === itemStorage[i].name) {
            outPrint.innerText = `검색하신 이름 : ${itemStorage[i].name} \n 제조회사 : ${itemStorage[i].company} \n 물건 가격 : ${itemStorage[i].price}`
            return;
        } else {
            outPrint.innerText = "존재하는 물건이없습니다.";
        }
    } 
}

getBtn.addEventListener("click", saveItemInfo);
outBtn.addEventListener("click", writeItemInfo);
serachBtn.addEventListener("click", itemSearch);



