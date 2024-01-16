const appointments = [];

function bookAppointment() {
    const name = document.querySelector('[name="name"]').value;
    const emailAddress = document.querySelector('[name="email_address"]').value;
    const location = document.querySelector('[name="location"]').value;
    const phone = document.querySelector('[name="phone"]').value;
    const date = document.querySelector('[name="date"]').value;
    const message = document.querySelector('[name="message"]').value;

    if (!name || !emailAddress || !location || !phone || !date || !message) {
        alert('Please fill in all required fields!');
        return;
    }

    const newAppointment = {
        id: generateUniqueId(),
        name,
        emailAddress,
        location,
        phone,
        date,
        message,
    };

    appointments.push(newAppointment);

    document.querySelector('.appoin-form').reset();
    showNotification('Appointment booked successfully!');
    updateAppointmentList();
}

function updateAppointmentList() {
    const appointmentsListContainer = document.getElementById('appointments-list');
    if (!appointmentsListContainer) {
        console.error("Element with id 'appointments-list' not found.");
        return;
    }

    // Clear existing content
    appointmentsListContainer.innerHTML = '';

    if (appointments.length === 0) {
        const noAppointmentsMessage = document.createElement('p');
        noAppointmentsMessage.textContent = 'No appointments available.';
        appointmentsListContainer.appendChild(noAppointmentsMessage);
        return;
    }

    // Create table
    const table = document.createElement('table');
    table.classList.add('appointments-table');

    // Create table header
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Message</th>
        </tr>
    `;
    table.appendChild(tableHeader);

    // Create table body
    const tableBody = document.createElement('tbody');
    appointments.forEach((appointment) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.emailAddress}</td>
            <td>${appointment.location}</td>
            <td>${appointment.phone}</td>
            <td>${appointment.date}</td>
            <td>${appointment.message}</td>
        `;
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);

    appointmentsListContainer.appendChild(table);
}
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function showNotification(message) {
    const notificationElement = document.getElementById('notifications');
    notificationElement.innerHTML = `<p>${message}</p>`;

    setTimeout(() => {
        notificationElement.innerHTML = '';
    }, 5000);
}

function navigateToCalendar() {
    window.location.href = 'calendar.html';
}

document.querySelector('.right .btn:nth-child(3)').addEventListener('click', navigateToCalendar);

// Pre-populate some sample data for testing
appointments.push({
    id: generateUniqueId(),
    name: 'John Doe',
    emailAddress: 'john@example.com',
    location: 'Gym',
    phone: '1234567890',
    date: '2024-01-31',
    message: 'Sample appointment'
});

updateAppointmentList();
