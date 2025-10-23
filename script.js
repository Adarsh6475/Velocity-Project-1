function closeModal() {
            document.querySelector('.modal').style.display = 'none';
            document.body.style.background = '#fff';
        }

        function toggleCities() {
            const section = document.getElementById('otherCities');
            const btn = document.getElementById('toggleCitiesBtn');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                btn.textContent = 'Hide Cities';
            } else {
                section.style.display = 'none';
                btn.textContent = 'Show All Cities';
            }
        }