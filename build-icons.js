const sharp = require('sharp');
const fs = require('fs');

// 确保 images 目录存在
if (!fs.existsSync('./images')) {
  fs.mkdirSync('./images');
}

// 定义需要生成的图标尺寸
const sizes = [16, 48, 128];

// 为每个尺寸生成 PNG
sizes.forEach(size => {
  sharp('./images/icon.svg')
    .resize(size, size)
    .toFile(`./images/icon${size}.png`)
    .then(info => console.log(`Generated ${size}x${size} icon`))
    .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
}); 