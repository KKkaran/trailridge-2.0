const Homies = require('./Homies')
const Purchase = require('./Purchase')

Homies.hasMany(Purchase,{
    foreignKey:'shopper_id'
})

Purchase.belongsTo(Homies,{
    foreignKey:'shopper_id'
})

module.exports = {Homies,Purchase}