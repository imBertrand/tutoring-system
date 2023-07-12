
    document.getElementById('popup-button').addEventListener('click', function() {
      document.getElementById('popup-overlay').style.display = 'block';
    });
    
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
    
      // Perform any additional logic or AJAX request here
      
      // Reset form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('feedback').value = '';
      
      // Close the popup
      document.getElementById('popup-overlay').style.display = 'none';
    });
    document.getElementById('close-button').addEventListener('click', function() {
        document.getElementById('popup-overlay').style.display = 'none';});