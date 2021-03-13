document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const createBurgerBtn = document.getElementById('input-field');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("button works")
            
            const newBurger = {
                burger_name: document.getElementById('create_burger').value.trim(),
            };

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
            });
        })
    }


    const devouredBtns = document.querySelectorAll('.devourBtn');

  // Set up the event listener for the create button
    if (devouredBtns) {
        devouredBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
            // Grabs the id of the element that goes by the name, "id"
            const id = e.target.getAttribute('data-id');

            const nowDevoured = {
                devoured: true,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(nowDevoured),
            }).then((response) => {
                // Check that the response is all good
                // Reload the page so the user can see the new quote
                if (response.ok) {
                console.log(`changed devoured to true`);
                location.reload('/');
                } else {
                alert('something went wrong!');
                }
            });
            });
        });
    }

})