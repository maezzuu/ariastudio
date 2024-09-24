$(document).ready(function () {
  $("#header").load("include/header.html");
  $("#footer").load("include/footer.html");
});
//모든페이지 

$(function () {
  let gnbBtn = $('#gnb > button')
  //console.log(gnbBtn)

  let gnbMenu = $('#gnbmenu')
  console.log(gnbMenu)

  gnbBtn.on('click', function () {
    gnbMenu.slideToggle(50)

    if ($(this).text() === ('MENU')) {
      $(this).text('CLOSE')
    } else {
      $(this).text('MENU')
    }
  })
})

  /* GNB버튼 클릭시 GNB 메뉴 내려옴 */

const virtualText = document.getElementById('virtualText');

const text = virtualText.innerHTML;
virtualText.innerHTML = ''; 

let index = 0;
const speed = 100;

function typeText() {
    if (index < text.length) {
        virtualText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, speed); 
    } else {
        setTimeout(() => {
            virtualText.innerHTML = ''; 
            index = 0; 
            typeText(); 
        }, 1000); 
    }
}

typeText();