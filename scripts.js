// Function to navigate to chatbot.html
function navigateToform() {
    window.location.href = 'form.html';
}

// Get all buttons on the page
const buttons = document.querySelectorAll('button');

// Attach the navigateToChatbot function to the click event of each button
buttons.forEach(button => {
    button.addEventListener('click', navigateToform);
});
