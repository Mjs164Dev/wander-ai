// chat.js

document.addEventListener('DOMContentLoaded', function() {
  const chatContainer = document.getElementById('chat-container');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');

  // Retrieve the initial query from the URL parameters
  const params = new URLSearchParams(window.location.search);
  const initialMessage = params.get('query');

  if (initialMessage) {
      // Display the initial message as a sent message
      addMessage(initialMessage, 'sent');
      // Simulate assistant response
      simulateAssistantResponse(initialMessage);
  }

  // Event listener for sending new messages
  chatForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const message = chatInput.value.trim();
      if (message === '') {
          return;
      }

      // Display the sent message
      addMessage(message, 'sent');

      // Clear the input field
      chatInput.value = '';

      // Simulate assistant response
      simulateAssistantResponse(message);
  });

  // Function to add a message to the chat
  function addMessage(text, type) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', type);

      const messageContent = document.createElement('p');
      messageContent.textContent = text;

      // Optional: Add timestamp
      const timestamp = document.createElement('span');
      timestamp.classList.add('timestamp');
      timestamp.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

      messageElement.appendChild(messageContent);
      messageElement.appendChild(timestamp);

      chatContainer.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Function to simulate assistant response
  function simulateAssistantResponse(userMessage) {
      // Replace with actual assistant logic or API call
      let responseText = '';

      if (userMessage.toLowerCase().includes('hello')) {
          responseText = 'Hello! How can I assist you today?';
      } else if (userMessage.toLowerCase().includes('help')) {
          responseText = 'Sure, I am here to help. What do you need assistance with?';
      } else {
          responseText = 'I am sorry, I did not understand that. Could you please rephrase?';
      }

      setTimeout(function() {
          addMessage(responseText, 'received');
      }, 1000); // Delay of 1 second
  }
});