// Add this JavaScript to your script.js file

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // First, add the menu toggle button to the header
  const header = document.querySelector('header');
  const nav = document.querySelector('header nav');
  
  // Create menu toggle button
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  
  // Insert it before the nav
  header.insertBefore(menuToggle, nav);
  
  // Toggle menu on click
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!header.contains(event.target)) {
      nav.classList.remove('active');
      menuToggle.innerHTML = '☰';
    }
  });
  
  // Close menu when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      nav.classList.remove('active');
      menuToggle.innerHTML = '☰';
    }
  });
});

// Book ride functionality
function bookRide() {
  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;
  
  if (!pickup || !dropoff) {
    alert('Please enter both pickup and drop-off locations');
    return;
  }
  
  // Here you would typically send this data to your server
  alert(`Booking a ride from ${pickup} to ${dropoff}`);
}