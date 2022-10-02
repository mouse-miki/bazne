
const soundfiles = [
/* 1 */ "audio/1.mp3",
/* 2 */ "audio/2.mp3",
/* 3 */ "audio/3.mp3"
];


const divIds = ["d1", "d2", "d3"];
     
     
     const els = soundfiles.map((filename, index) => {
       const el = document.createElement("audio");
       el.src = "/" + filename;
       document.body.appendChild(el);
       return el;
     })
     const playing = new Array(divIds.length).fill(false);
     window.addEventListener('scroll', (e) => {
       const scroll = e.target.body.scrollTop;
       const rects = divIds.map(id => document.getElementById(id).getBoundingClientRect());
       const tops = rects.map(rect => rect.top);
       tops.forEach((top, ind) => {
         if (!playing[ind] && top <= rects[ind].height * 1 / 4 && top > - rects[ind].height * 3 / 4) {
           els[ind].play();
           playing[ind] = true;
         } else if (playing[ind] && (top > rects[ind].height * 1 / 4 || top < -rects[ind].height * 3 / 4)) {
           els[ind].pause();
           playing[ind] = false;
         }
       });
     });