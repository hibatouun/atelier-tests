const total = (items) => items.reduce((s, i) => s + i.prix * i.qte, 0);
module.exports = { total };