var item = document.getElementsByClassName('img-item');
var bigOne = document.getElementById('big-one');

Array.prototype.forEach.call(item, function (img) {
    img.onmouseover = function () {
        bigOne.src = this.src;
    }
})