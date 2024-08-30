document.addEventListener('DOMContentLoaded', () => {
    fetch('./menu.json')
      .then(response => response.json())
      .then(data => {
        const menu = data;
        displayMenuItems(menu);
        displayMenuButtons(menu); 
      })
      .catch(error => console.error('Fetch operation failed:', error));
  });
  
  function displayMenuItems(menuItems) {
    const sectionCenter = document.querySelector('.section-center');
    
    let displayMenu = menuItems.map(item => {
      return `
        <div class="menu-items col-lg-6 col-sm-12">
          <img src="${item.img}" class="photo" alt="${item.title}">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
          </div>
        </div> 
      `;
    });
    sectionCenter.innerHTML = displayMenu.join('');
  }
   
  function displayMenuButtons(menuItems) {
    const btnContainer = document.querySelector('.btn-container');
    const categories = menuItems.reduce((values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    }, ['All']);
  
    const categoryBtns = categories.map(category => {
      return `<button class="btn-item filter-btn" data-id="${category}">${category}</button>`;
    }).join('');
    
    btnContainer.innerHTML = categoryBtns;
  
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menuItems.filter(menuItem => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === 'All') {
          displayMenuItems(menuItems);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }