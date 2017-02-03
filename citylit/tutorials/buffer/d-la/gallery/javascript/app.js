// json with gallery info
var gallery = {
    "gallery": [
        {"thumb": "images/img1-thumb.jpg", "large": "images/img1-lg.jpg", "type": "img"},
        {"thumb": "images/img2-thumb.jpg", "large": "videos/mov_bbb.mp4", "type": "video"},
        {"thumb": "images/img3-thumb.jpg", "large": "images/img3-lg.jpg", "type": "img"},
        {"thumb": "images/img4-thumb.jpg", "large": "images/img4-lg.jpg", "type": "img"}
    ]
};

// Carousel class
var Carousel = function(g) {

    var self = this;
    var gallery = g;
    var thumbs = document.getElementsByClassName("thumbs")[0];
    var galleryArray = gallery["gallery"];

    // init: display thumb images and first item large image
    this.init = function(){
        displayThumbs();
        showLarge(0);
    };

    // display images thumbnails
    var displayThumbs = function(){
        for (var i = 0; i < galleryArray.length; i++) {

            var thumb = document.createElement("a");
            thumb.addEventListener("click", function(e){
                showLarge(e.target.getAttribute("data-id"));
            });
            thumb.title = "Image " + (i + 1);

            var image = document.createElement("img");
            image.setAttribute("data-id" , i);
            image.src = galleryArray[i]["thumb"];
            thumb.appendChild(image);
            thumbs.appendChild(thumb);
        }
    };

    // display large image/video according to type
    var showLarge = function (index) {
        if (galleryArray[index]["type"] == "img") {
            showLargeImage(index);
        }
        else {
            showLargeVideo(index);
        }
    };

    // display large image
    var showLargeImage = function(index){
        var anchor = document.getElementById("largeImg");
        var imageSource = galleryArray[index]["large"];

        var image = document.createElement("img");
        image.src = imageSource;
        image.setAttribute("id", "largeImg");
        anchor.parentNode.replaceChild(image, anchor);
        image.setAttribute("data-id", index);
    };

    // display video
    var showLargeVideo = function(index){
        var anchor = document.getElementById("largeImg");

        var video = document.createElement("video");
        video.setAttribute("id", "largeImg");
        video.setAttribute("width", "500px");
        video.setAttribute("height", "500px");
        video.setAttribute("autoplay", "true");

        var videoSource = galleryArray[index]["large"];
        video.innerHTML = '<source src="' + videoSource + '" type="video/mp4">';
        anchor.parentNode.replaceChild(video, anchor);
        video.setAttribute("data-id", index);
    };

    // show "next" image
    this.showNext = function() {
        var currentIndex = parseInt(document.getElementById("largeImg").getAttribute("data-id"));
        showLarge(++currentIndex % galleryArray.length);
    };

    // show "Prev" image
    this.showPrev = function() {
        var currentIndex = parseInt(document.getElementById("largeImg").getAttribute("data-id"));
        showLarge(galleryArray.length * (Math.floor((galleryArray.length - currentIndex) / galleryArray.length)) + currentIndex - 1);
    };

    // set "Prev" button event handler
    this.setPrevButton = function(el){
        el.addEventListener("click", function(e){
            self.showNext();
        });
    };

    // set "Next" button event handler
    this.setNextButton = function(el){
        el.addEventListener("click", function(e){
            self.showPrev();
        });
    }
};

// instantiate carousel, set "next" and "prev" buttons and initialize carousel
var myCarousel = new Carousel(gallery);
myCarousel.setPrevButton(document.getElementById("right-arrow"));
myCarousel.setNextButton(document.getElementById("left-arrow"));
myCarousel.init();
