document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('selection').style.display = 'block';
});

document.getElementById('kunsanUniversity').addEventListener('click', function() {
    document.getElementById('passwordInput').style.display = 'block';
});

document.getElementById('submitPassword').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password === '2003139') {
        window.location.href = '2메인화면.html';
    } else {
        alert('비밀번호가 틀렸습니다. 다시 시도해주세요.');
    }
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('submitPassword').click();
    }
});
