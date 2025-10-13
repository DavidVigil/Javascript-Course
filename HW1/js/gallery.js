function upDate(previewPic){
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    */
    src = previewPic.src;
    alt = previewPic.alt;
    console.log("You hovered over me!");
    console.log("This is de src: " + src);
    console.log("This is de alt: " + alt);
    bigImg = document.getElementById("image");
    bigImg.style.backgroundImage = "url('" + src + "')";
    /*
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    bigImg.innerHTML = alt;
}

function unDo(){
    /* In this function you should 
1) Update the url for the background image of the div with the id = "image" 
back to the orginal-image.  You can use the css code to see what that original URL was
*/
    console.log("You left me!");
    bigImg = document.getElementById("image");
    bigImg.style.backgroundImage = "url('')";
/*
2) Change the text  of the div with the id = "image" 
back to the original text.  You can use the html code to see what that original text was
*/
    bigImg.innerHTML = "Hover over an image below to display here.";
}