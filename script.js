document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const dateInput = document.getElementById("date").value;
    const date = new Date(dateInput);
    const day = date.getDay();
    const holidays = ["2024-01-01", "2024-07-04", "2024-12-25"]; // Add more holidays here

    if (day === 2 || day === 4 || day === 6 || day === 0 || holidays.includes(dateInput)) {
        alert("Booking is not allowed on this date.");
        return;
    }

    const formData = new FormData(this);
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Booking successful!');
            this.reset();
        } else {
            alert('Booking failed, please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Booking failed, please try again.');
    });
});
