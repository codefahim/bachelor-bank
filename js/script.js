const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function() {
    const sectionhide = document.getElementById('loginSection');
    sectionhide.style.display = 'none';
    const transectionArea = document.getElementById('transaction');
    transectionArea.style.display = 'block';
});