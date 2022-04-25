function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("tail.jpeg")) {
      image.src = "head.jpeg";
    } else {
      image.src = "tail.jpeg";
    }
  }