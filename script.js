//Icon transform on hover
$(function () {
    $('.icon1').mouseover(function() {
        $('.icon1').css('width', '140px');
    });
    $('.icon1').mouseout(function() {
        $('.icon1').css('width', 'auto');
    });
    $('.icon2').mouseover(function() {
        $('.icon2').css('width', '140px');
    });
    $('.icon2').mouseout(function() {
        $('.icon2').css('width', 'auto');
    });
    $('.icon3').mouseover(function() {
        $('.icon3').css('width', '140px');
    });
    $('.icon3').mouseout(function() {
        $('.icon3').css('width', 'auto');
    });
    $('.icon4').mouseover(function() {
        $('.icon4').css('width', '140px');
    });
    $('.icon4').mouseout(function() {
        $('.icon4').css('width', 'auto');
    });
});
//Get and toggle GitHub Repo
function loadDoc () {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('loadInfo').innerHTML = this.responseText;
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/SO4J/repos', true);
    xhttp.send();

    let x = document.getElementById("loadInfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
};
