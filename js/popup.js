/*-------------------------------modal-feedback------------------------------------------*/

var link = document.querySelector(".contacts-map-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = document.querySelector('.modal-name')
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("mail");
  storage = localStorage.getItem("text");
} catch (err) {
  isStorageSupport = false;
}

if (link) { //Если я правильно понял, эта команда проверяет есть такая ссылка на странице или нет? Если находит, то начинает выполнять код ниже, я оборачиваю в проверку все команды ниже до самого конца модального окна?
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
    if (storage) {
      name.value = storage;
      mail.focus();
    } else {
      name.focus();
    }
    if (storage) {
      mail.value = storage;
      text.focus();
    } else {
      mail.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !mail.value) {
      evt.preventDefault();
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
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
}

/*--------------------------------------modal-map------------------------------*/

var mapLink = document.querySelector(".link-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
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


/*--------------------------------------modal-catalog-cart---------------------------*/

var cartlink = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = mapPopup.querySelector(".modal-close");
cartLink.forEach(function (element) {

  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  })
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
