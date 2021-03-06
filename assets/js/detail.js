import makeupProducts from "../../data/makeupProducts.json" assert { type: "json" };
import skinCareProducts from "../../data/skinCareProducts.json" assert { type: "json" };
import hairCareProducts from "../../data/hairCareProducts.json" assert { type: "json" };
import perfumeProducts from "../../data/perfumeProducts.json" assert { type: "json" };
import bodycareProducts from "../../data/bodycareProducts.json" assert { type: "json" };
import accessoriesProducts from "../../data/accessoriesProducts.json" assert { type: "json" };

const dataProduct = [
  ...makeupProducts,
  ...skinCareProducts,
  ...hairCareProducts,
  ...perfumeProducts,
  ...bodycareProducts,
  ...accessoriesProducts,
];

const productList = document.querySelector(".productList");

const handleSearch = () => {
  const search = document.querySelector("#searchInput").value;

  window.localStorage.setItem("searchValue", search);
  window.location.replace("/pages/search.html");
};

const productDetail = document.querySelector("#productDetail");

const productId = window.localStorage.getItem("productId");

const product =
  dataProduct.find((product) => product.id == productId) || dataProduct[0];

const productImage = document.querySelector("#productImage");
productImage.src = product.image;

const renderRating = (rating) => {
  let star = "";
  for (let i = 1; i < rating; i++) {
    star += '<i class="fas fa-star" style = "color:#f2ce1b"></i>';
  }
  if (rating % 1 !== 0) {
    star += '<i class="fas fa-star-half-alt" style = "color:#f2ce1b"></i>';
  } else {
    star += '<i class="far fa-star" style = "color:#f2ce1b"></i>';
  }
  return star;
};

const renderCategory = (categories) => {
  let result = "";
  categories.map((category) => {
    result += `
    <div class = 'col border m-2' style="width:30px;height:30px;background:${category.label}; cursor:pointer" onclick = {alert('${category.label}')}>
    </div>
    `;
  });
  return result;
};

const renderSelectCategory = (categories) => {
  let result = "";
  categories.map((category) => {
    result += `
    <option value = '${category.label}'>${category.label}</option>
    `;
  });
  return result;
};

const mota = document.querySelector(".mota");
const ttct = document.querySelector(".thongtinchitiet");
const danhgia = document.querySelector(".danhgia");

(function renderMota() {
  let content = "";
  content += `<h3 class = "mt-4">${product.name}</h3>`;
  content += `<p>${product.description}</p>`;
  content += `<img src = "${product.image}" alt = "" style = "width:509px; height:509px"/>`;
  content += `<p class ="mt-2">????nh gi??: ${product.rating}/5</p>`;

  mota.innerHTML = content;
})();
(function renderTtct() {
  let content = "";
  content += `<h3 class = "mt-4">${product.name}</h3>`;
  content += `<p>${product.description}</p>`;
  content += `<img src = "${product.image}" alt = "" style = "width:509px; height:509px"/>`;
  content += `<p class ="mt-2">????nh gi??: ${product.rating}/5</p>`;
  content += `<p>Gi??: ${product.price}</p>`;
  content += `<p>Ph???n n?????c Gilaa Long Wear DD Cushion l?? ph???n n?????c c???a th????ng hi???u Gilaa v???i c??ng d???ng ??a ch???c n??ng nh?? d?????ng tr???ng, c???p ???m, ch???ng n???ng v?? ch???ng l??o h??a v?? ch???a chi???t xu???t nh???y hoa ngh??? t??y v?? g???p 3 l???n d?????ng ch???t d?????ng da hi???u qu??? cho l???p n???n trang ??i???m m???ng m???n ho??n h???o </p>`;
  ttct.innerHTML = content;
})();
const renderComment = () => {
  let content = "";
  for (let i = 0; i < 5; i++) {
    content += `
    <div class = 'd-flex justify-content-between mt-3'>
      <div>
        <img src = "https://picsum.photos/200/300/?random=${i}" alt = "" style = "width:50px; height:50px; border-radius:50%; margin-right:2rem"/>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quod repellat, voluptatum mollitia, fugit totam et ab inventore consequuntur saepe doloremque numquam reiciendis ducimus nisi. Possimus quis nostrum eveniet consectetur!</p>
    </div>
    `;
  }
  return content;
};
(function renderDanhGia() {
  let content = "";

  content += `
  <div class = 'mt-4'>
    <div class = 'd-flex'>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nh???n x??t">
      <button class = "btn btn-primary ml-3">G???i</button>
    </div>
    ${renderComment()}
  </div>`;

  danhgia.innerHTML = content;
})();

productDetail.innerHTML = `
<div>
    <h3>${product.name}</h3>
    ${renderRating(product.rating)}
    <p>${product.description}</p>
    <p>${product.price.toLocaleString()}??</p>
    <div class="row" style="max-width:150px; margin:0; margin-left:-0.5rem">
      ${renderCategory(product.category)}
    </div>
    <div class = "d-flex justify-content-start align-items-center">
      <select class = "" style = "padding:7px">
       ${renderSelectCategory(product.category)}
      </select>
      <div class = " text-center mx-3">
        <button class = "btn btn-outline-primary">Th??m v??o gi??? h??ng</button>
      </div>
      <div class = " text-center">
      <button class = "btn btn-primary">Mua ngay</button>
    </div>
    </div>
</div>
`;
