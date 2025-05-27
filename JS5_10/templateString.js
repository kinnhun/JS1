function templateString(template, params) {
let result = template;
Object.keys(params).forEach(key => {
const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
result = result.replace(regex, params[key]);
});
return result;
}

module.exports = templateString;
