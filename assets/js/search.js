import makeupProducts from "../../data/makeupProducts.json" assert { type: "json" };
import skinCareProducts from "../../data/skinCareProducts.json" assert { type: "json" };
import hairCareProducts from "../../data/hairCareProducts.json" assert { type: "json" };
import perfumeProducts from "../../data/perfumeProducts.json" assert { type: "json" };
import bodycareProducts from "../../data/perfumeProducts.json" assert { type: "json" };
import accessoriesProducts from "../../data/perfumeProducts.json" assert { type: "json" };

const dataProduct = [
  ...makeupProducts,
  ...skinCareProducts,
  ...hairCareProducts,
  ...perfumeProducts,
  ...bodycareProducts,
  ...accessoriesProducts,
];

const productList = document.querySelector(".productList");

const renderProduct = (arr) => {
  let result = "";
  arr.map((item) => {
    result += `
      <div class="col-3">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class=" mt-2 mb-5">
          <p class="card-text">${item.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" onClick = 'viewDetail(${item.id})'>
                Xem chi tiết
              </button>
            </div>
            <small class="text-muted">${item.price}</small>
          </div>
        </div>
      </div>
      `;
  });
  productList.innerHTML = result;
};

renderProduct(dataProduct);
