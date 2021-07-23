var $hamburgerMenuBtn = $(".hamburger__menu__btn");
var $hamburgerSideMenu = $(".header__menu__hamburger .header__menu-area");
var headerDivElements = {
    $hamburger: $(".header .header__menu__toggle"),
    $title: $(".header .header__title"),
    $controls: $(".header .header__controls")
};


$(window).click(function() {
    $hamburgerMenuBtn.each(function(){
        this.checked = false;
    });
});

$('.header__menu__toggle').click(function(event){
    event.stopPropagation();
});

$hamburgerMenuBtn.on('change', function(e){
    if(e.target.checked){
        setSideMenuHeight();
    }
});

function setSideMenuHeight(){
    documentHeight = $(document).height();
    $hamburgerSideMenu.css('height', documentHeight);
}

$(window).resize(function(){
    if($(document).width() > 1024){
        headerDivElements.$hamburger.css({'display':''});
        headerDivElements.$title.css({'display':'table-cell'});
    }
});

/* top profile dropdown */
function myFunction_userInfo() {
	document.getElementById("myDropdown").classList.toggle("user-info-show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.user-info>a')) {
	  var dropdowns = document.getElementsByClassName("profile-container");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('user-info-show')) {
		  openDropdown.classList.remove('user-info-show');
		}
	  }
	}
  }


/* accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* custom select */
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);


/* card popup */
function myFunction() {
	var popup = document.getElementById("cardPopup");
	popup.classList.toggle("show");
}


/* tab */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
tabcontent = document.getElementById("defaultOpen").click();
//document.getElementById("defaultOpen").click();




/* modal popup */
var modal = document.getElementById('layerPop');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* snack pop */
function snackFunction() {
  var x = document.getElementById("snackbar");
  x.className = "snack-show";
  setTimeout(function(){ x.className = x.className.replace("snack-show", ""); }, 5000);
}

/* scroll spy */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/* swiper */
var swiper = new Swiper(".messageSort", {
  slidesPerView: 2,
  spaceBetween: 5,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".main-workarea", {
	slidesPerView: 1,
	spaceBetween: 10,
	centeredSlides: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
});



/* message table */
$(function () {
  var $tableRowEls = $('.msg-container tr'),
      $tableRowCheckBoxEls = $(".msg-container input[type='checkbox']"),
      $itemSelectedDivEl = $('.msg-table-select-control'),
      $itemSelectedCheckBoxEl = $(".msg-table-select-control input[type='checkbox']"),
      $selectedItemNumSpanEl = $('.msg-table-select-control__selected-item-num'),
      $dropdownBtnDivEl = $('.msg-table-control__buttons__dropdown-button'),
      $dropdownListDivEl = $('.msg-table-control__buttons__dropdown-list'),
      selectedItemNum = 0;

  // table select control 의 checkbox 선택
  $itemSelectedCheckBoxEl.on('change', function(e) {
      if (!$(this).prop('checked')){
          $tableRowEls.removeClass('msg-table__row--selected');

          // 모든 table row checkbox 의 check 해제
          $tableRowCheckBoxEls.prop('checked', false);
          selectedItemNum = 0;
          $itemSelectedDivEl.removeClass('msg-table__row--selected')
      }
  });

  // table row checkbox 선택
  $tableRowCheckBoxEls.on('change', function(e){
      var $checkBoxEl = $(this),
          index = $tableRowCheckBoxEls.index(this);

      if (index !== 0) {
          if ($checkBoxEl.prop('checked')) {
              $tableRowEls.eq(index).addClass('msg-table__row--selected');
              selectedItemNum++;
          } else {
              $tableRowEls.eq(index).removeClass('msg-table__row--selected');
              selectedItemNum--;
          }
      } else {
          if ($checkBoxEl.prop('checked')) {
              $tableRowEls.addClass('msg-table__row--selected');
              $tableRowCheckBoxEls.prop('checked', true);
              selectedItemNum = $tableRowEls.length - 1;
          } else {
              $tableRowEls.removeClass('msg-table__row--selected');
              $tableRowCheckBoxEls.prop('checked', false);
              selectedItemNum = 0;
          }
      }

      if (selectedItemNum === $tableRowEls.length - 1){
          $tableRowEls.eq(0).addClass('msg-table__row--selected');
          $tableRowCheckBoxEls.eq(0).prop('checked', true);
      } else {
          $tableRowEls.eq(0).removeClass('msg-table__row--selected');
          $tableRowCheckBoxEls.eq(0).prop('checked', false);
      }

      if (selectedItemNum > 0) {
          $itemSelectedDivEl.addClass('msg-table__row--selected');
          $itemSelectedCheckBoxEl.prop('checked', true);
          $selectedItemNumSpanEl.text(selectedItemNum)
      } else {
          $itemSelectedDivEl.removeClass('msg-table__row--selected');
      }
  });
});


/* 비밀번호 보이기 */
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}