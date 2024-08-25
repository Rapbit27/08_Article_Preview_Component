document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.querySelector('.share-btn');
    const author = document.querySelector('.author');
    const shareLinks = document.querySelector('.share-links');
    const bottomLane = document.querySelector('.bottom-lane');
  
    function showAuthor() {
      author.style.display = 'flex';
      shareLinks.style.display = 'none';
      bottomLane.style.backgroundColor = 'hsl(0, 0%, 100%)';
    }
  
    function showShareLinks() {
      author.style.display = 'none';
      shareLinks.style.display = 'flex';
      bottomLane.style.backgroundColor = 'hsl(214, 17%, 51%)';
    }
  
    // Toggle between showing author and share-links
    if (shareBtn && author && shareLinks && bottomLane) {
      shareBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from closing the share-links
        if (shareLinks.style.display === 'flex') {
          showAuthor();
        } else {
          showShareLinks();
        }
      });
  
      // Hide share-links and show author when clicking outside bottom-lane
      document.addEventListener('click', (event) => {
        if (!bottomLane.contains(event.target) && shareLinks.style.display === 'flex') {
          showAuthor();
        }
      });
  
      // Prevent clicks inside bottom-lane from propagating to document
      bottomLane.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }
  });
  