export function fetchRate() {
    fetch('/api/rate')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Current USD to UAH Rate: ' + data.rate);
        })
        .catch(error => alert('Error fetching data: ' + error));
}

export function subscribeEmail(event) {
    event.preventDefault(); // This stops the form from submitting normally
    const email = document.getElementById('email').value;
    fetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => {
        if (response.ok) {
            alert('Email successfully subscribed');
        } else {
            alert('You are already subscribed with this email.');
        }
    })
    .catch(error => alert('Error subscribing email: ' + error));
}
