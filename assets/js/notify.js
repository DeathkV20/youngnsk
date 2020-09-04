var button = document.getElementById("never")
var notification = document.getElementById("vk_auth")
var login = document.getElementById("login")


checkCookie("enabled")

function checkCookie (name) {
    if (getCookie(name) == "false") {
        notification.remove()
        button.remove()
        login.remove()
    } else {

    } 
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

button.addEventListener("click", function(){
    notification.remove()
    button.remove()
    login.remove()
    setCookie("enabled","false",{'max-age': 363300})
})