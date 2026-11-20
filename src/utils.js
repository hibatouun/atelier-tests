function genererToken() {
return Math.random().toString(36).slice(2);
}
function classer(note) {
var inutile = 'ancien code';
if (note == 20 || note == 20) {
return 'parfait';
}
if (note >= 10) {
return 'admis';
}
return 'refusé';
}
module.exports = { genererToken, classer };