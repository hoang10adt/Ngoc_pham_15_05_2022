import dataCart from "../../data/cart.json" assert { type: "json" };

const checkout = document.querySelector(".checkout");

const formatedCart = dataCart.map((product) => {
  const priceFormatted = parseInt(
    product.price.replace(",", "").replace(".", "")
  );
  return { ...product, price: priceFormatted };
});

const renderCart = () => {
  let total = 0;
  let cart = "";

  formatedCart.forEach((product) => {
    total += product.price * product.quantity;
    cart += `
      <tr>
        <td scope="row">
          <div>
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
          </div>
        </td>
        <td>
          <img src="${
            product.image
          }" alt="" width = "50px" height = "50px" class = "rounded-circle"/>
        </td>
        <td>${product.name}</td>
        <td>${product.price.toLocaleString()}</td>
        <td>
          <div class="input-group" style="width:150px">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary btn-number" type="button" data-type="minus" data-field="quant[${
                product.name
              }]">
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input type="text" name="quant[${
              product.name
            }]" class="form-control input-number text-center" value="${
              product.quantity
            }" min="1" max="100">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary btn-number" type="button" data-type="plus" data-field="quant[${
                product.name
              }]">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td>${(product.price * product.quantity).toLocaleString()}</td>
        <td>
          <button class="btn btn-outline-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>`;
  });
  checkout.innerHTML = cart;
  return total;
};

const total = renderCart();
const shippingFee = 30000;
const coupon = 20000;

const totalPrice = document.querySelector(".total-price");
totalPrice.innerHTML = total.toLocaleString();
const couponPrice = document.querySelector(".coupon-price");
couponPrice.innerHTML = coupon.toLocaleString();
const shippingPrice = document.querySelector(".shipping-price");
shippingPrice.innerHTML = shippingFee.toLocaleString();
const totalPriceAfterCoupon = document.querySelector(
  ".total-price-after-coupon"
);
totalPriceAfterCoupon.innerHTML = (
  total - coupon + shippingFee
).toLocaleString();
