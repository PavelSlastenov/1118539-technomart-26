//-------------------------------modal-feedback------------------------------------------//

var link = document.querySelector(".contacts-map-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback .modal-close");

var form = document.querySelector(".modal-feedback form");
var name = document.querySelector(".modal-name");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("mail");
  storage = localStorage.getItem("text");
} catch (err) {
  isStorageSupport = false;
}

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");


    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-error");

      popup.classList.remove("modal-show");
    });

    form.addEventListener("submit", function (evt) {
      if (!name.value || !mail.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");

      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", name.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove("modal-error");

        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
        }
      }
    });

  });

}

//--------------------------------------modal-map------------------------------//

var mapLink = document.querySelector(".link-map");

if (mapLink) {
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        }
      }
    });
  });


}

//--------------------------------------modal-catalog-cart---------------------------//

var cartLink = document.querySelectorAll(".buy");

if (cartLink) {
  var cartPopup = document.querySelector(".modal-cart");
  var cartClose = document.querySelector(".modal-cart .modal-close");

  cartLink.forEach(function (element) {
    element.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");

      if (cartClose) {
        cartClose.addEventListener("click", function (evt) {
          evt.preventDefault();
          cartPopup.classList.remove("modal-show");
        });
      }

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (cartPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show");
          }
        }
      });
    })
  });

}
