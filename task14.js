// Function to throttle auto-save actions
function throttle(func, delay) {
    let timeout = null;
    return function() {
      if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(this, arguments);
          timeout = null;
        }, delay);
      }
    };
  }
  
  // Function to save form data to localStorage
  function saveFormData() {
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  
  // Function to restore form data from localStorage
  function restoreFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      document.getElementById('name').value = formData.name;
      document.getElementById('email').value = formData.email;
      document.getElementById('message').value = formData.message;
    }
  }
  
  // Add event listeners to form fields to trigger auto-save
  const formFields = document.querySelectorAll('#myForm input, #myForm textarea');
  formFields.forEach(field => {
    field.addEventListener('input', throttle(saveFormData, 1000)); // Throttle to one save per second
  });
  
  // Restore form data from localStorage on page load
  document.addEventListener('DOMContentLoaded', restoreFormData);
  