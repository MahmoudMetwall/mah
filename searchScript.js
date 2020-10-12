function searchFun() {
  var input, filter, ul, li, a, p, i;
  input = document.querySelector('.searchBar');
  filter = input.value.toUpperCase();
  ul = document.querySelector('.searchWarp');
  a = ul.querySelectorAll('a');

  for (i = 0; i < a.length; i++) {
    li = a[i].querySelector('li');
    p = li.querySelector('p');
    console.log(p.innerHTML.toUpperCase().indexOf(filter));
    if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function searchFunMob() {
  var input, filter, ul, li, a, p, i;
  input = document.querySelector('#mobSearchInput');
  filter = input.value.toUpperCase();
  ul = document.querySelector('#mobSearchUl');
  a = ul.querySelectorAll('a');

  for (i = 0; i < a.length; i++) {
    li = a[i].querySelector('li');
    p = li.querySelector('p');
    console.log(p.innerHTML.toUpperCase().indexOf(filter));
    if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


// FIX SEARCH LINKS BUG
// PC VER
document.querySelector('.searchBar').addEventListener("focusin", showSearchPc);
document.querySelector('.searchBar').addEventListener("focusout", hideSearchPc);

function showSearchPc() {
  var ul = document.querySelector('.searchWarp');
  ul.style.display = "block";
}

function hideSearchPc() {
  var ul = document.querySelector('.searchWarp');
  time = setInterval(function() {
    ul.style.display = "none";
    clearInterval(time);
  }, 100);
}

// MOB VER
document.querySelector('.searchBarMob').addEventListener("focusin", showSearch);
document.querySelector('.searchBarMob').addEventListener("focusout", hideSearch);

function showSearch() {
  var ul = document.querySelector('.searchWarpMob');
  ul.style.display = "block";
}

function hideSearch() {
  var ul = document.querySelector('.searchWarpMob');
  time = setInterval(function() {
    ul.style.display = "none";
    clearInterval(time);
  }, 100);
}