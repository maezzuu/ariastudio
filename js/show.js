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