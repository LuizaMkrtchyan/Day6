// Define tab content as JavaScript objects
const tabContent = {
    tab1: '<h2>Content for Tab 1</h2><p>This is the content for Tab 1.</p>',
    tab2: '<h2>Content for Tab 2</h2><p>This is the content for Tab 2.</p>',
    tab3: '<h2>Content for Tab 3</h2><p>This is the content for Tab 3.</p>'
  };
  
  // Function to handle tab click
  function handleTabClick(event) {
    const tab = event.target.dataset.tab;
    const content = tabContent[tab];
    document.getElementById('tab-content').innerHTML = content;
  }
  
  // Add event listeners to tab links
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
  });
  