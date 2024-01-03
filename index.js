// Array to store appointments
/*const appointments = [];

// Function to book a new appointment
function bookAppointment() {
  // Get form data
  const name = document.querySelector('[name="name"]').value;
  const emailAddress = document.querySelector('[name="email_address"]').value;
  const location = document.querySelector('[name="location"]').value;
  const phone = document.querySelector('[name="phone"]').value;
  const date = document.querySelector('[name="date"]').value;
  const message = document.querySelector('[name="message"]').value;

  // Validate data
  if (!name || !emailAddress || !location || !phone || !date || !message) {
    alert('Please fill in all required fields!');
    return;
  }

  // Add appointment to the array
  appointments.push({
    name,
    emailAddress,
    location,
    phone,
    date,
    message,
  });

  // Clear form and show notification
  document.querySelector('.appoin-form').reset();
  showNotification('Appointment booked successfully!');

  // Update the appointment list (replace with your actual UI update logic)
  updateAppointmentList();
}

// Function to edit an existing appointment
function editAppointment() {
  // Get selected appointment ID (replace with your actual selection logic)
  const appointmentId = 1; // For example

  // Get appointment data
  const appointment = appointments.find((appointment) => appointment.id === appointmentId);

  // Populate form with retrieved data
  document.querySelector('[name="name"]').value = appointment.name;
  document.querySelector('[name="email_address"]').value = appointment.emailAddress;
  document.querySelector('[name="location"]').value = appointment.location;
  document.querySelector('[name="phone"]').value = appointment.phone;
  document.querySelector('[name="date"]').value = appointment.date;
  document.querySelector('[name="message"]').value = appointment.message;

  // Show edit form (replace with your actual UI logic)
  // ...

  // Update appointment data after editing (replace with your actual logic)
  // ...
}

// Function to delete an existing appointment
function deleteAppointment() {
  // Get selected appointment ID (replace with your actual selection logic)
  const appointmentId = 1; // For example

  // Confirmation message
  if (!confirm('Are you sure you want to delete this appointment?')) {
    return;
  }

  // Remove appointment from the array
  appointments.splice(appointments.findIndex((appointment) => appointment.id === appointmentId), 1);

  // Show notification and update UI (replace with your actual logic)
  showNotification('Appointment deleted successfully!');
  updateAppointmentList();
}

// Function to update the displayed appointment list (replace with your actual UI logic)
function updateAppointmentList() {
  // ...
}

// Function to display notification messages
function showNotification(message) {
  const notificationElement = document.getElementById('notifications');
  notificationElement.innerHTML = `<p>${message}</p>`;

  setTimeout(() => {
    notificationElement.innerHTML = '';
  }, 5000);
}*/
/// Array to store appointments
const appointments = [];

// Function to book a new appointment
function bookAppointment() {
  // Get form data
  const name = document.querySelector('[name="name"]').value;
  const emailAddress = document.querySelector('[name="email_address"]').value;
  const location = document.querySelector('[name="location"]').value;
  const phone = document.querySelector('[name="phone"]').value;
  const date = document.querySelector('[name="date"]').value;
  const message = document.querySelector('[name="message"]').value;

  // Validate data
  if (!name || !emailAddress || !location || !phone || !date || !message) {
    alert('Please fill in all required fields!');
    return;
  }

  // Add appointment to the array
  const newAppointment = {
    id: generateUniqueId(), // Assign a unique ID (replace with your actual logic)
    name,
    emailAddress,
    location,
    phone,
    date,
    message,
  };

  appointments.push(newAppointment);

  // Clear form and show notification
  document.querySelector('.appoin-form').reset();
  showNotification('Appointment booked successfully!');

  // Update the appointment list (replace with your actual UI update logic)
  updateAppointmentList();
}

// Function to edit an existing appointment
function editAppointment() {
  // Get selected appointment ID (replace with your actual selection logic)
  const appointmentId = 1; // For example

  // Get appointment data
  const appointment = appointments.find((appointment) => appointment.id === appointmentId);

  // Populate form with retrieved data
  document.querySelector('[name="name"]').value = appointment.name;
  document.querySelector('[name="email_address"]').value = appointment.emailAddress;
  document.querySelector('[name="location"]').value = appointment.location;
  document.querySelector('[name="phone"]').value = appointment.phone;
  document.querySelector('[name="date"]').value = appointment.date;
  document.querySelector('[name="message"]').value = appointment.message;

  // Show edit form (replace with your actual UI logic)
  // ...

  // Update appointment data after editing (replace with your actual logic)
  // ...
}

// Function to delete an existing appointment
function deleteAppointment() {
  // Get selected appointment ID (replace with your actual selection logic)
  const appointmentId = 1; // For example

  // Confirmation message
  if (!confirm('Are you sure you want to delete this appointment?')) {
    return;
  }

  // Remove appointment from the array
  appointments.splice(appointments.findIndex((appointment) => appointment.id === appointmentId), 1);

  // Show notification and update UI (replace with your actual logic)
  showNotification('Appointment deleted successfully!');
  updateAppointmentList();
}

// Function to update the displayed appointment list
function updateAppointmentList() {
  const appointmentsContainer = document.getElementById('appointments-container');
  appointmentsContainer.innerHTML = '';

  appointments.forEach((appointment) => {
    const appointmentElement = document.createElement('div');
    appointmentElement.textContent = `${appointment.name} - ${appointment.date}`;

    // Add more details or actions as needed

    appointmentsContainer.appendChild(appointmentElement);
  });
}

// Function to generate a unique ID
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to display notification messages
function showNotification(message) {
  const notificationElement = document.getElementById('notifications');
  notificationElement.innerHTML = `<p>${message}</p>`;

  setTimeout(() => {
    notificationElement.innerHTML = '';
  }, 5000);
}

// Function to navigate to the calendar page
function navigateToCalendar() {
  window.location.href = 'calendar.html';
}

// Add event listeners
document.querySelector('.right .btn:nth-child(3)').addEventListener('click', navigateToCalendar);

// Array to store appointments
