// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前标签页信息
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    
    // 更新网站标题
    document.getElementById('title').textContent = currentTab.title || '';

    // 生成二维码
    const qrcodeElement = document.getElementById('qrcode');
    qrcodeElement.innerHTML = ''; // 清除旧的二维码

    new QRCode(qrcodeElement, {
      text: currentTab.url || '',
      width: 200,
      height: 200,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  });
}); 