document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const dateInput = document.getElementById("date").value;
    const date = new Date(dateInput);
    const day = date.getDay();
    const holidays = ["2024-01-01", "2024-07-04", "2024-12-25"]; // Add more holidays here

    if (day === 3 || day === 5 || day === 7 || day === 0 || holidays.includes(dateInput)) {
        alert("Booking is not allowed on this date.");
        return;
    }

    const formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbwgE3kaWlh5ZVdbzMHrmLYdfsVMKPwZ4MC5UhPUzw2WZvXrDTBfhvGxCxjpFM9DcAKqog/exec', {
        method: 'POST',
        body: formData,
        redirect: "follow"
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
