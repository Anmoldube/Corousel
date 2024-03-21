let arr = ["video.mp4", "video1.mp4", "video2.mp4"];
// let arr = ['download.jpeg','images.jpeg','image1.jpeg','images2.jpeg']
let video = document.querySelector("video");
let n = 0;
setInterval(() => {
  video.setAttribute("src", arr[n]);
  n++;
  if (n == arr.length) {
    n = 0;
  }
}, 3000);
