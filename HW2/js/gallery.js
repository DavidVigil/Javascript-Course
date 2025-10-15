function upDate(previewPic){
    src = previewPic.src;
    alt = previewPic.alt;
    console.log("You hovered over me!");
    console.log("This is de src: " + src);
    console.log("This is de alt: " + alt);
    bigImg = document.getElementById("image");
    bigImg.style.backgroundImage = "url('" + src + "')";
    bigImg.innerHTML = alt;
}

function unDo(){
    console.log("You left me!");
    bigImg = document.getElementById("image");
    bigImg.style.backgroundImage = "url('')";
    bigImg.innerHTML = "Hover over an image below to display here.";
}
function addTabFocus(){
    console.log("LOAD event!");
    let images = document.querySelectorAll(".preview");
    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}