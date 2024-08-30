document.addEventListener('DOMContentLoaded', () => {
    fetch('./menu.json')
      .then(response => response.json())
      .then(data => {
        const menu = data;
        displayMenuItems(menu); // Menü öğelerini sayfada gösteriyoruz
        displayMenuButtons(menu); // Filtre butonlarını dinamik olarak oluşturuyoruz
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
  
  