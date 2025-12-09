             
             //About Me-section
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                contents.forEach(c => c.classList.add('hidden'));

                
                document.getElementById(tab.dataset.target).classList.remove('hidden');
            });
        });





        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', () => {

                cards.forEach(c => c.classList.remove('active'));

                card.classList.add('active');
            });
        });


             //submit-btn-message
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';

        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    } else {
        alert('Please fill all fields!');
    }
}




