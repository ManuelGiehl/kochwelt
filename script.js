document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('cheesecakeBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'cheesecake.html';
        });
    }

    // Zutatenrechner-Logik für cheesecake.html
    var portionInput = document.getElementById('portionInput');
    var portionBtn = document.getElementById('portionBtn');
    var ingredientsList = document.querySelectorAll('.cheesecake-ingredients-list li');
    var defaultPortion = 4;

    // Speichere das ursprüngliche Label in data-label (ohne Menge und Einheit)
    ingredientsList.forEach(function(li) {
        if (!li.getAttribute('data-label')) {
            var base = li.getAttribute('data-base-amount');
            var unit = li.getAttribute('data-unit') || '';
            // Entferne Menge und Einheit am Anfang UND ggf. eine weitere Zahl/Einheit am Anfang (z.B. "3 Eier" -> "Eier")
            var regex = new RegExp('^' + base + '\\s*' + (unit ? unit + '\\s*' : ''));
            var label = li.textContent.replace(regex, '').trim();
            // Entferne ggf. führende Zahl und Einheit im Label (z.B. "3 Eier" -> "Eier")
            label = label.replace(/^\d+\s*(Stk|Pck|EL)?\s*/i, '').trim();
            li.setAttribute('data-label', label);
        }
    });

    function updateIngredients() {
        var portionCount = parseInt(portionInput.value) || 1;
        if (portionCount < 1) {
            portionCount = 1;
            portionInput.value = 1;
        }
        ingredientsList.forEach(function(li) {
            var base = parseFloat(li.getAttribute('data-base-amount'));
            var unit = li.getAttribute('data-unit') || '';
            var label = li.getAttribute('data-label') || '';
            var newAmount = (base / defaultPortion) * portionCount;
            // Für ganze Stücke/Eier/Päckchen runden, sonst auf 1 Nachkommastelle
            if (unit === 'Stk' || unit === 'Pck' || unit === 'EL') {
                newAmount = Math.round(newAmount * 100) / 100;
                if (Math.abs(newAmount - Math.round(newAmount)) < 0.01) {
                    newAmount = Math.round(newAmount);
                }
                // Einheit NICHT anzeigen
                li.textContent = newAmount + (label ? ' ' + label : '');
            } else {
                newAmount = Math.round(newAmount * 10) / 10;
                li.textContent = newAmount + (unit ? ' ' + unit : '') + (label ? ' ' + label : '');
            }
        });
    }

    if (portionBtn && portionInput && ingredientsList.length) {
        portionBtn.addEventListener('click', updateIngredients);
    }
});
