function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    const chatBody = document.getElementById("chatBody");

    // Append user message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = userInput;
    chatBody.appendChild(userMessage);

    // Clear input
    document.getElementById("userInput").value = "";

    // Determine bot response based on user input
    let botResponse;

    if (userInput.toLowerCase().includes("job")) {
        botResponse = "What type of job are you looking for? We have opportunities in software development, data science, and more.";
    } else if (userInput.toLowerCase().includes("apply")) {
        botResponse = "You can apply directly through our platform. Please provide your email, and I'll send you the application link.";
    } else if (userInput.toLowerCase().includes("interview")) {
        botResponse = "Are you interested in scheduling an interview? Please let me know your availability.";
    } else if (userInput.toLowerCase().includes("location")) {
        botResponse = "We have job openings in various locations. Could you specify your preferred location?";
    } else if (userInput.toLowerCase().includes("salary")) {
        botResponse = "Our salary packages vary depending on the role and experience. What role are you interested in?";
    } else if (userInput.toLowerCase().includes("benefits")) {
        botResponse = "We offer competitive benefits, including health insurance, paid time off, and more. Would you like details on specific benefits?";
    } else {
        botResponse = "Thank you for your message! A recruiter will get back to you shortly.";
    }

    // Append bot response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.textContent = botResponse;
        chatBody.appendChild(botMessage);

        // Scroll to the bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}
