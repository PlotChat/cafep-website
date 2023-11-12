ratingslist = [];

function submitRating() {
  UseranmeInput = document.getElementById("UseranmeInput").value;
  ReviewTextArea = document.getElementById("ReviewTextArea").value;
  if (UseranmeInput != "" && ReviewTextArea != "") {
    rating = { username: UseranmeInput, review: ReviewTextArea };
    ratingslist.push(rating);
    alert("Rating sent! Thanks for visiting!");
  } else {
    alert("Invalid input, please try again.");
  }
}

accounts = [
  { name: "admin", pass: "admin" },
  { name: "Bob", pass: "BobTheBest" },
];

function signin() {
  $("#signupBtn").hide();
  accountNameInput = document.getElementById("InputEmail").value;
  accountpassInput = document.getElementById("InputPassword").value;
  account = { name: accountNameInput, pass: accountpassInput };
  if (accountNameInput != "" && accountpassInput != "") {
    if (account in accounts) {
      signinupPopup();
    } else {
      $("#modalp").text(
        "This account doesn't exist. Do you want to signup with this information?"
      );
      $("#signupBtn").show();
      $("#accountModal").modal("show");
    }
  } else {
    $("#modalp").text("Invalid input, please try again.");
    $("#accountModal").modal("show");
  }
}

function signup() {
  $("#accountModal").modal("toggle");
  accountNameInput = document.getElementById("InputEmail").value;
  accountpassInput = document.getElementById("InputPassword").value;
  account = { name: accountNameInput, pass: accountpassInput };
  accounts.push(account);
  setTimeout(signinupSuccess, 700);
}

function signinupSuccess() {
  $("#accountModal").modal("toggle");
  $("#signupBtn").hide();
  $("#modalp").text("Signup successfully!");
}

function showToast(itemName, itemPrice) {
  var toastElement = document.querySelector(".toast");
  var toast = new bootstrap.Toast(toastElement);
  toastText = document.getElementById("toastText");
  toastText.innerHTML =
    itemName + " (" + itemPrice + ") has been added to cart!";

  toast.show();
}

cartItems = [];

function addToCart(addBtn) {
  parent = addBtn.parentNode;
  itemName = parent.querySelector(".menuItemName").textContent;
  itemPrice = parent.querySelector(".menuItemPrice").textContent;
  cartItem = { name: itemName, price: itemPrice, amount: 1 };
  cartItems.push(cartItem);

  displayMenu(itemName, itemPrice);
  showToast(itemName, itemPrice);
}

function displayMenu(itemName, itemPrice) {
  orderdisplay = document.getElementsByClassName("orderdisplay");
  clone = orderdisplay[0].cloneNode(true);

  removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "removeBtn");
  removeBtn.innerHTML = "X";
  removeBtn.style.backgroundColor = "transparent";
  removeBtn.style.border = "none";
  removeBtn.style.textDecoration = "underline";

  clone.querySelector(".orderName").innerHTML = itemName;
  clone.querySelector(".orderPrice").innerHTML = itemPrice;
  clone.querySelector(".orderAmount").innerHTML = "1";
  clone.querySelector(".orderRemove").innerHTML = "";
  clone.querySelector(".orderRemove").appendChild(removeBtn);
  $(document).on("click", ".removeBtn", function () {
    $(this).closest(".orderdisplay").remove();
  });

  menudisplay = document.getElementById("menudisplay");
  menudisplay.appendChild(clone);
}

function removeItem() {
  this.parentElement.parentElement.remove();
}

function checkout() {
  alert("Redirecting to checkout page...");
}
