const scratchOverlay = document.getElementById('scratch-overlay');
const scratchImage = document.getElementById('scratch-image');

let isScratching = false;

function handleScratchStart(event) {
  isScratching = true;
}

function handleScratchMove(event) {
  if (isScratching) {
    const rect = scratchOverlay.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    scratchOverlay.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, black 50%)`;
  }
}

function handleScratchEnd(event) {
  isScratching = false;
}

scratchOverlay.addEventListener('mousedown', handleScratchStart);
scratchOverlay.addEventListener('mousemove', handleScratchMove);
scratchOverlay.addEventListener('mouseup', handleScratchEnd);
scratchOverlay.addEventListener('mouseleave', handleScratchEnd);
