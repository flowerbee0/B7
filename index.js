function scoreGoal() {
    document.getElementById('goalModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('goalModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('goalModal')) {
        closeModal();
    }
}
