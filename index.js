// 輪播圖
$(document).ready(function(){
    $('.carousel').slick({
        // 自動播放
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,


    });
});

// 批次展示照片
var countI = 0;
let picTemple = "";
for (i=1;i<=39;i++) {
    picTemple = picTemple + '<img class="pic" src="img/pic/' + i + '.webp"></img>'
    countI =+1;
}
document.querySelector(".picContainer").innerHTML = picTemple;