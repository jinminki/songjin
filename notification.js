document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGangForm = urlParams.get('selectedGangForm');
    const gangFormData = JSON.parse(decodeURIComponent(urlParams.get('gangFormData')));
    const notifications = gangFormData[selectedGangForm.split(' ')[1]].notifications;
    const notificationList = document.getElementById('notification-list').getElementsByTagName('tbody')[0];

    notifications.forEach(notification => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${notification.date}</td>
            <td>${notification.message}</td>
            <td>${notification.status}</td>
            <td>${notification.remark}</td>
        `;
        notificationList.appendChild(row);
    });
});
