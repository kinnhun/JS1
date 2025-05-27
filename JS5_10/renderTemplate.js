const fs = require('fs');
const path = require('path');
const templateString = require('./templateString');

// Bước 1: Đọc template từ file
const template = fs.readFileSync('template.html', 'utf-8');

// Bước 2: Truyền vào các params
const params = {
title: 'Search of skill',
pageTitle: 'Home page',
content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consectetur.'
};

// Bước 3: Thay thế nội dung
const result = templateString(template, params);

// Bước 4: Ghi ra file mới
fs.writeFileSync('output.html', result, 'utf-8');

console.log('File HTML đã tạo: output.html');
