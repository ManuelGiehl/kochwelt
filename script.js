document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('cheesecakeBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            window.open('cheesecake.html', '_blank');
        });
    }
});
