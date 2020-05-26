let cs2 = document.querySelector('#currencyselector2');
let cs1 = document.querySelector('#currencyselector1');
let ci = document.querySelector('#currencyinput');
cs1.addEventListener('change',message);
ci.addEventListener('change',message);
cs2.addEventListener('change',message);
let msg = document.querySelector('#msg');
msg.style.display = 'none';

function convert(currencyselector1,currencyselector2,currencyinput) {
  let ow = document.querySelector('#outputCurrency');

  if (currencyselector1 === 'ir') {
    if (currencyselector2 === 'ir') {
      ow.innerHTML = currencyinput;
    }
    else if (currencyselector2 === 'usd') {
      ow.innerHTML = currencyinput*0.014;
    }
    else if (currencyselector2 === 'euro') {
      ow.innerHTML = currencyinput*0.013;
    }
  }
  else if (currencyselector1 === 'usd') {
    if (currencyselector2 === 'ir') {
      ow.innerHTML = currencyinput*71.19;
    }
    else if (currencyselector2 === 'usd') {
      ow.innerHTML = currencyinput;
    }
    else if (currencyselector2 === 'euro') {
      ow.innerHTML = currencyinput*0.91;
    }
  }
  else if (currencyselector1 === 'euro') {
    if (currencyselector2 === 'ir') {
      ow.innerHTML = currencyinput*78.41;
    }
    else if (currencyselector2 === 'usd') {
      ow.innerHTML = currencyinput*1.10;
    }
    else if (currencyselector2 === 'euro') {
      ow.innerHTML = currencyinput;
    }
  }
}


function message() {
  if (parseInt(ci.value) < 0) {
    msg.innerHTML = 'Currency Value cannot be negative';
    msg.style.display = 'block';
    msg.style.backgroundColor = "red";
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('mb-3');
      msg.style.marginBottom = '0px';
    },2000);
  }
  else {
    convert(cs1.value,cs2.value,parseInt(ci.value))
  }
}
