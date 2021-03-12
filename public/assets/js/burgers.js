document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const createBurgerBtn = document.getElementById('input-field');

  
    createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("button works")
        
        const newBurger = {
            burger_name: document.getElementById('create_burger').value.trim(),
        };

        console.log(newBurger);
        fetch('/api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBurger),
        }).then(() => {
            document.getElementById('create_burger').value = '';
            location.reload();
            console.log(newBurger);
        });
    })


})