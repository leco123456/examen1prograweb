const Boton = document.getElementById('but');
        const menu = document.getElementById('menu');
        const optionsList = document.getElementById('optionsList');
        const newOptionInput = document.getElementById('newOption');
        const addOptionButton = document.getElementById('but1');

        Boton.addEventListener('click', () => {
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });

      
        addOptionButton.addEventListener('click', () => {
            const newOptionText = newOptionInput.value.trim();
            if (newOptionText) {
                const newOption = document.createElement('li');
                newOption.textContent = newOptionText;
                optionsList.appendChild(newOption);
                newOptionInput.value = '';
            }
        });