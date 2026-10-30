const total = (items) => {
    return items.reduce((s, i) => {
        return s + i.prix * i.qte;
    }, 0);
};

module.exports = { 
    total };