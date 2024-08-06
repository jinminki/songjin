document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGangForm = urlParams.get('selectedGangForm') || 'A-1'; // 기본값 설정
    const gangFormData = JSON.parse(decodeURIComponent(urlParams.get('gangFormData')));
    const events = gangFormData[selectedGangForm.split(' ')[1]].events || [];
    const eventList = document.getElementById('event-list').getElementsByTagName('tbody')[0];

    events.forEach(event => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${event.date}</td>
            <td>${event.message}</td>
            <td>${event.status}</td>
            <td>${event.remark}</td>
        `;
        eventList.appendChild(row);
    });
});
