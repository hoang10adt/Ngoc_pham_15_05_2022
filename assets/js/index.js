// using slick to create carousel
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 1500,
});

import makeupProducts from "../../data/makeupProducts.json" assert { type: "json" };
import skinCareProducts from "../../data/skinCareProducts.json" assert { type: "json" };
import hairCareProducts from "../../data/hairCareProducts.json" assert { type: "json" };
import perfumeProducts from "../../data/perfumeProducts.json" assert { type: "json" };
import bodycareProducts from "../../data/bodycareProducts.json" assert { type: "json" };
import accessoriesProducts from "../../data/accessoriesProducts.json" assert { type: "json" };

const makeupList = document.querySelector(".makeupList");
const skinCareList = document.querySelector(".skinCareList");
const hairCareList = document.querySelector(".hairCareList");
const perfumeList = document.querySelector(".perfumeList");
const bodycareList= document.querySelector(".bodycareList");
const accessoriesList= document.querySelector(".accessoriesList");

const renderProduct = (arr) => {
  let result = "";
  arr.map((item) => {
    result += `
    <div class=${window.location.pathname === "/" ? "col-2" : "col-4"}>
      <img src="${item.image}" class="card-img-top" alt="...">
      <div class=" mt-2 mb-5">
        <p class="card-text">${item.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick = 'viewDetail(${
              item.id
            })'>
              Xem chi tiết
            </button>
          </div>
          <small class="text-muted">${item.price}</small>
        </div>
      </div>
    </div>
    `;
  });
  return result;
};

makeupList.innerHTML = renderProduct(makeupProducts);
skinCareList.innerHTML = renderProduct(skinCareProducts);
hairCareList.innerHTML = renderProduct(hairCareProducts);
perfumeList.innerHTML = renderProduct(perfumeProducts);
bodycareList.innerHTML = renderProduct(bodycareProducts);
accessoriesList.innerHTML = renderProduct(accessoriesProducts);