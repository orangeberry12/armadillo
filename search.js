var users = {
    0: "Lukas",
    1: "Jackie",
    2: "Dyson",
    3: "Jenny",
    4: "Tuo",
    5: "Rem",
    6: "Oscar",
    7: "Jason",
    8: "Andrew",
    9: "Jack",
    10: "Williams",
    11: "Jordan",
    12: "Horton",
    13: "Phillips",
    14: "Burris",
    15: "Willy",
    16: "Lynn",
    17: "Jaden",
    18: "Pearce"
}

document.addEventListener("DOMContentLoaded", function(event) {

    var leftPanel = document.getElementById("leftmain");

    for (var i=0;i<10;i++){
        var username = users[i];
        console.log(username);
        console.log(i+1);
        var sitter = document.createElement("div");

        var number = document.createElement("div");
        number.textContent = ""+(i+1);
        number.className = "number";
        var name = document.createElement("div");
        name.className = "sitter-name";
        name.textContent = username;
        var photo = document.createElement("div");
        photo.className = "sitter-image";
        var image = document.createElement("img");
        image.src = "image/"+username+ ".jpg";
        // console.log(image, image.naturalWidth, image.naturalHeight, image.width, image.height);
        resetImgSizeWH(image, image.naturalWidth, image.naturalHeight, 150,150);
        var rate = document.createElement("div");
        rate.className = "info";
        rate.textContent = "rate";
        var insurance = document.createElement("div");
        insurance.className = "info";
        insurance.textContent = "insurance";
        var certificated = document.createElement("div");
        certificated.className = "info";
        certificated.textContent = "certificated";
        var price = document.createElement("div");
        price.className = "info";
        price.textContent = "price";
        var arrow = document.createElement("div");
        arrow.className = "arrow";
        arrow.textContent = "arrow";
        // var empty = document.createElement("div");
        // empty.className = "empty";
        // empty.textContent = "empty";

        photo.appendChild(image);
        sitter.appendChild(number);
        sitter.appendChild(name);
        sitter.appendChild(photo);
        sitter.appendChild(rate);
        // sitter.appendChild(insurance);
        // sitter.appendChild(certificated);
        // sitter.appendChild(price);
        sitter.appendChild(arrow);
        // sitter.appendChild(empty);
        // sitter.appendChild(empty);
        // sitter.appendChild(empty);
        // sitter.appendChild(empty);
        leftPanel.appendChild(sitter);
        sitter.className = "sitter-info";
    }
});

function resetImgSizeWH(img, nw, nh, w, h) {
    var nwh = nw / nh;
    var wh = w / h;
    if (nwh > wh) {
        img.height = h;
        var width = parseInt(nwh * h);
        img.width = width;
        var left = parseInt((width - w) / 2) * -1;
        img.style.marginLeft = left + "px";
    } else if (nwh < wh) {
        img.width = w;
        var height = parseInt(1 / nwh * w);
        img.height = height;
        var top = parseInt((height - h) / 2) * -1;
        img.style.marginTop = top + "px";
    } else {
        img.height = h;
        img.width = w;
    }
}

// var splitter,cont1,cont2;
// var last_x,window_width;

// function init()
// {
//     window_width=window.innerWidth;
//     splitter=document.getElementById("splitter");
//     cont1=document.getElementById("div1");
//     cont2=document.getElementById("div2");
//     var dx=cont1.clientWidth;
//     splitter.style.marginLeft=dx+"px";
//     dx+=splitter.clientWidth;
//     cont2.style.marginLeft=dx+"px";
//     dx=window_width-dx;
//     cont2.style.width=dx+"px";
//     splitter.addEventListener("mousedown",spMouseDown);
// }
//
// function spMouseDown(e)
// {
//     splitter.removeEventListener("mousedown",spMouseDown);
//     window.addEventListener("mousemove",spMouseMove);
//     window.addEventListener("mouseup",spMouseUp);
//     last_x=e.clientX;
// }
//
// function spMouseUp(e)
// {
//     window.removeEventListener("mousemove",spMouseMove);
//     window.removeEventListener("mouseup",spMouseUp);
//     splitter.addEventListener("mousedown",spMouseDown);
//     resetPosition(last_x);
// }
//
// function spMouseMove(e)
// {
//     resetPosition(e.clientX);
// }
//
// function resetPosition(nowX)
// {
//     var dx=nowX-last_x;
//     dx+=cont1.clientWidth;
//     cont1.style.width=dx+"px";
//     splitter.style.marginLeft=dx+"px";
//     dx+=splitter.clientWidth;
//     cont2.style.marginLeft=dx+"px";
//     dx=window_width-dx;
//     cont2.style.width=dx+"px";
//     last_x=nowX;
// }