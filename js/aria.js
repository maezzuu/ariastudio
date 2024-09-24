$(document).ready(function () {
  $("#header").load("include/header.html");
  $("#footer").load("include/footer.html");
});
  //모든페이지 header footer 연결

$(function () {
  let gnbBtn = $('#gnb > button')
  //console.log(gnbBtn)

  let gnbMenu = $('#gnbmenu')
  console.log(gnbMenu)

  gnbBtn.on('click', function () {
    gnbMenu.slideToggle(50)

    if ($(this).text() === ('CLOSE')) {
      $(this).text('MENU')
    } else {
      $(this).text('CLOSE')
    }
  })
})
/* GNB버튼 클릭시 GNB 메뉴 내려옴 */

$('.img_wrap').each(function () {
  let companyImg = $(this).find('.companyimg01');
  let companyImg2 = $(this).find('.companyimg02');
  let lineEff = $(this).find('.line_effect');
  let rightEff = $(this).find('.right_effect > img');

  companyImg.on('mouseover', function () {
    lineEff.fadeIn()
    rightEff.fadeIn()
  })

  companyImg.on('mouseleave', function () {
    lineEff.fadeOut()
    rightEff.fadeOut()
  })

  companyImg2.on('mouseover', function () {
    lineEff.fadeIn()
    rightEff.fadeIn()
  })

  companyImg2.on('mouseleave', function () {
    lineEff.fadeOut()
    rightEff.fadeOut()
  })
})

/* section05 이미지 hover시 애니메이션 */

const listNumber = document.querySelector('.list_number');
const listImg = document.querySelector('#section06 .show_imglist');
const listNumber01 = document.querySelector('.listnum01');
let lastScrollTop = 0; // 마지막 스크롤 위치 저장

window.addEventListener('scroll', function () {
  let height = window.scrollY;
  //console.log(height);


  if (height < 5232) {
    listNumber.classList.remove('active');
    listImg.classList.remove('on');
  } else if (height >= 5232 && height < 6300) {
    listNumber.classList.add('active');
    listImg.classList.add('on');
    listNumber01.textContent = '01';
    listNumber.style.opacity = '1';
  } else if (height >= 6300 && height < 7200) {
    listNumber01.textContent = '02';
    listNumber.style.opacity = '1'; 
  } else if (height >= 7200) {
    listNumber.style.opacity = '0';
  }

  const currentScrollTop = window.scrollY;

  // 위로 스크롤하는 경우
  if (currentScrollTop < lastScrollTop) {
    if (height >= 5232 && height < 7200) {
      listNumber.style.opacity = '1'; // 리스트 넘버 보이기
    }
  }

  lastScrollTop = currentScrollTop; // 마지막 스크롤 위치 업데이트
});

