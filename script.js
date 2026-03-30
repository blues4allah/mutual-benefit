<script>
const links = document.querySelectorAll('.clickable-section');
const video = document.getElementById('preview-video');

// Hover behavior
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const src = link.getAttribute('data-video');

    // Skip if already playing this video
    if (video.src.includes(src)) return;

    video.classList.remove('active');

    setTimeout(() => {
      video.src = src;
      video.load();
      video.play();

      video.classList.add('active');
    }, 150);
  });
});

// Pause when leaving the list
document.querySelector('.work-list').addEventListener('mouseleave', () => {
  video.pause();
  video.classList.remove('active');
});
</script>
