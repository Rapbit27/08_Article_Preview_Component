const shareBtn = document.querySelector('.share-btn');
const author = document.querySelector('.author');
const shareLinks = document.querySelector('.share-links');
const bottomLane = document.querySelector('.bottom-lane'); // Line added to select the .card element

if (author.style.display === 'none') {
    bottomLane.style.backgroundColor = 'hsl(214, 17%, 51%)'; // Line added to set initial background color
}


shareBtn.addEventListener('click', () => {
    if (author.style.display === 'none' || !author.style.display) {
        author.style.display = 'flex';
        shareLinks.style.display = 'none';
        bottomLane.style.backgroundColor = 'hsl(0, 0%, 100%)'; // Change background color to default
    } else {
        author.style.display = 'none';
        shareLinks.style.display = 'flex';
        bottomLane.style.backgroundColor = 'hsl(214, 17%, 51%)'; // Change background color when share-links is visible
    }
});