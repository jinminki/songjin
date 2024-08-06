document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var building = page.match(/\d+/)[0] + '동';
    document.getElementById('progress-title').innerText = building + ' 공정진행내역';
});
