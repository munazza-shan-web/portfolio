const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduced) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}), {threshold:.08});
 document.querySelectorAll('.section h2,.project,.skill-rows>div,.about-layout,.more-work').forEach(el => {el.classList.add('reveal');observer.observe(el)});
}
const progress = document.querySelector('.scroll-progress');
function updateProgress(){const total=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(total>0?window.scrollY/total*100:0)+'%'}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const navLinks = [...document.querySelectorAll('nav a')];
if('IntersectionObserver' in window){const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id))}}),{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main>.section').forEach(el=>navObserver.observe(el))}
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('munazzawebdeveloperr@gmail.com');status.textContent='Email copied';}catch{status.textContent='Please select and copy the email above.'}});
document.querySelector('#year').textContent=new Date().getFullYear();
const heroVideo = document.getElementById("hero-video");
const videoToggle = document.getElementById("video-toggle");

if (heroVideo && videoToggle) {
  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  function updateVideoButton() {
    videoToggle.textContent = heroVideo.paused
      ? "Play animation"
      : "Pause animation";
  }

  heroVideo.muted = true;

  heroVideo.addEventListener("play", updateVideoButton);
  heroVideo.addEventListener("pause", updateVideoButton);

  if (motionPreference.matches) {
    heroVideo.autoplay = false;
    heroVideo.pause();
  } else {
    heroVideo.play().catch(updateVideoButton);
  }

  videoToggle.addEventListener("click", () => {
    if (heroVideo.paused) {
      heroVideo.play().catch(updateVideoButton);
    } else {
      heroVideo.pause();
    }
  });

  motionPreference.addEventListener("change", (event) => {
    if (event.matches) {
      heroVideo.pause();
    }
  });

  updateVideoButton();
}
