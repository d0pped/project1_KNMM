$(function () {
    $("#fullpage").fullpage({
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6", "section7"],
        navigation: true,
        navigationPosition: "left",
        sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#515151", "#fff"],
        afterLoad: function (anchorLink, index) {
            //console.log('현재섹션번호는'+index+anchorLink);
            //변수activeMenu에 li를 저장
            var activeMenu;
            if (index == 1) {
                //변수 activeMenu 에 첫번째 li 저장
                activeMenu= $("#menu").find("li").first();
            } else {
                activeMenu = $("#menu").find("li").eq(index - 1);
            }
            activeMenu.addClass("active").siblings().removeClass("active");
        },
    });
});