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

        if ($(this).text() === ('MENU')) {
            $(this).text('CLOSE')
        } else {
            $(this).text('MENU')
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


const careerBtns = document.querySelectorAll('#careerBtn'); 
console.log(careerBtns);

careerBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (btn.classList.contains('on')) {
            btn.classList.remove('on');
            btn.classList.add('off');
        } else {
            btn.classList.remove('off');
            btn.classList.add('on');
        }
    });
});

/* 버튼 클릭시 스타일변경 */