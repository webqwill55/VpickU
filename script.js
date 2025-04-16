
function bookRide() {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
  
    if (pickup && dropoff) {
      alert(`Your ride from ${pickup} to ${dropoff} is booked!`);
    } else {
      alert('Please enter both pickup and drop-off locations.');
    }
  }
  