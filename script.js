// ToolCart Main Logic
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const toolCards = document.querySelectorAll('.tool-card');
    const modal = document.getElementById('calcModal');
    const closeBtn = document.querySelector('.close');
    const calcBtn = document.querySelector('.calc-btn');
    const resultDiv = document.getElementById('result');

    // Search Filtering
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        toolCards.forEach(card => {
            const title = card.querySelector('.tool-title').textContent.toLowerCase();
            const desc = card.querySelector('.tool-desc').textContent.toLowerCase();
            if (title.includes(term) || desc.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Open Modal (Demo for Compound Interest)
    toolCards.forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'flex';
            resultDiv.innerHTML = '';
        });
    });

    // Close Modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Compound Interest Calculation Logic
    calcBtn.addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value) / 100;
        const years = parseFloat(document.getElementById('years').value);

        if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
            resultDiv.innerHTML = 'Please enter valid numbers.';
            return;
        }

        // Formula: A = P(1 + r/n)^(nt) - assuming n=1 (compounded annually)
        const amount = principal * Math.pow((1 + rate), years);
        const interest = amount - principal;

        resultDiv.innerHTML = `
            <div>Total Amount: $${amount.toFixed(2)}</div>
            <div style="color: var(--primary); margin-top: 0.5rem;">Total Interest: $${interest.toFixed(2)}</div>
        `;
    });
});
