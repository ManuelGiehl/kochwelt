document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('cheesecakeBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'cheesecake.html';
        });
    }

    var portionInput = document.getElementById('portionInput');
    var portionBtn = document.getElementById('portionBtn');
    var ingredientsList = document.querySelectorAll('.cheesecake-ingredients-list li');
    var defaultPortion = 4;

    

    if (portionBtn && portionInput && ingredientsList.length) {
        portionBtn.addEventListener('click', updateIngredients);
    }
});
