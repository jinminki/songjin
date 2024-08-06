document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGangForm = urlParams.get('selectedGangForm');
    const gangFormData = JSON.parse(decodeURIComponent(urlParams.get('gangFormData')));
    const notifications = gangFormData[selectedGangForm.split(' ')[1]].notifications;
    const notificationItems = document.getElementById('notificationItems');
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.textContent = notification.date + ' - ' + notification.message;
        notificationItems.appendChild(li);
    });
});
