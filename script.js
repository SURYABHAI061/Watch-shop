let menu = document.querySelector('.menuBar');
let navbar = document.querySelector('.navmenu');

menu.onclick = () =>{
    navbar.classList.toggle('open');
}

// sticky scroll menu bar

window.onscroll = function() {myfunction()};

var navBar = document.getElementById('navbar');
var sticky = navBar.offsetTop;

function myfunction(){
    if (window.pageYOffset >= sticky){
        navBar.classList.add('sticky');
    }
    else{
        navBar.classList.remove("sticky");
    }


}
   let cart1=document.querySelector("cart")
  let displayProduct=async()=>{
    displayProduct.innerHTML='';
   let product=await fetch('https://fakestoreapi.com/products/1')
      let finalproduct=await product.json();
      finalproduct.forEach(element => {
        console.log(element)
        displayProduct.innerHTML+=`<div class="cart-row">
        <div class="cart-col">
            <table border="1" style="border-collapse: collapse;">
                <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </tr>
                <tr>
                    <td>
                        <div class="cart-img">
                            <img src="./image/card1.png" width="100" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </td>
                    <td>${element.price}</td>
                    <td>
                        <input type="number" value="1">
                    </td>
                    <td>${element.price}</td>
                </tr>

                <tr>
                    <td>
                        <div class="cart-img">
                            <img src="./image/card2.png" width="100" alt="">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </td>
                    <td>${element.price}</td>
                    <td>
                        <input type="number" value="1">
                    </td>
                    <td>${element.price}</td>
                </tr>

                <tr>
                    <td colspan="2">
                        <button>Update Cart</button>
                    </td>
                    <td colspan="2">
                        <button>Close Coupon</button>
                    </td>
                </tr>

            </table>
        </div>
    </div>`
        
      });
  }
  displayProduct();