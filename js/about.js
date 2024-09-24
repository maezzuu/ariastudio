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
  
      if ($(this).text() === ('CLOSE')) {
        $(this).text('MENU')
      } else {
        $(this).text('CLOSE')
      }
    })
  })
  /* GNB버튼 클릭시 GNB 메뉴 내려옴 */
  
$(function () {
    let historyBtn01 = $('.history_btn01 > button');
    let historyBtn02 = $('.history_btn02 > button');
    let historyBtn03 = $('.history_btn03 > button');
    let historyCont01 = $('.history_cont01');
    let historyCont02 = $('.history_cont02');
    let historyCont03 = $('.history_cont03');

    historyBtn01.on('click', function () {
        historyCont01.slideToggle();
        if (historyBtn01.text() === '+') {
            historyBtn01.text('-');
        } else {
            historyBtn01.text('+');
        }
    });
    historyBtn02.on('click', function () {
        historyCont02.slideToggle();
        if (historyBtn02.text() === '+') {
            historyBtn02.text('-');
        } else {
            historyBtn02.text('+');
        }
    });
    historyBtn03.on('click', function () {
        historyCont03.slideToggle();
        if (historyBtn03.text() === '+') {
            historyBtn03.text('-');
        } else {
            historyBtn03.text('+');
        }
    });
});
/*about_section03 아코디언메뉴*/