document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const popup = document.getElementById('popupMessage');
  
    form.addEventListener('submit', function () {
      // 显示弹窗
      popup.style.display = 'block';
  
      // 3秒后自动隐藏弹窗
      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000);
    });
  });
  
