// Select the Yes and No buttons
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

// Initialize a variable to track the size multiplier
let scaleFactor = 1; // Start at the default size

// Add a click event listener to the No button
noButton.addEventListener('click', () => {
  // Increment the scale factor
  scaleFactor += 0.2; // Increase by 20% each click

  // Apply the new scale to the Yes button
  yesButton.style.transform = `scale(${scaleFactor})`;

  // Optional: Add a smooth transition
  yesButton.style.transition = 'transform 0.3s ease-in-out';
});

yesButton.addEventListener('click', () =>{
    scaleFactor = 1;

  // Reset the scale of the Yes button
  yesButton.style.transform = `scale(${scaleFactor})`;

  // Add a smooth transition
  yesButton.style.transition = 'transform 0.3s ease-in-out';

   // Show the popup
 popup.classList.remove('hidden');
});


closePopupButton.addEventListener('click', () => {
    // Hide the popup
    popup.classList.add('hidden');
  });

