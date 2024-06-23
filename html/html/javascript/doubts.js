        // Function to handle form submission
        function submitQuestion(event) {
            event.preventDefault(); // Prevent form submission to a server

            // Get the question from the form
            const question = document.getElementById('question').value;

            // Create a new list item to display the question on the dashboard
            const listItem = document.createElement('li');
            listItem.innerText = question;

            // Append the list item to the dashboard
            const dashboard = document.getElementById('dashboard');
            dashboard.appendChild(listItem);

            // Clear the form input field
            document.getElementById('question').value = '';
        }

        // Attach the submitQuestion function to the form's submit event
        const form = document.getElementById('questionForm');
        form.addEventListener('submit', submitQuestion);