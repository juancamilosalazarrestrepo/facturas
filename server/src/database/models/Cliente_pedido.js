module.exports = (sequelize,dataTypes) => {
    let alias = "Cliente_pedido";
    let cols = {
        idcliente_pedido : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idclientes: {
            type: dataTypes.INTEGER
        },
        idpedidos: {
            type: dataTypes.INTEGER
        },
        idfacturas:{
            type: dataTypes.INTEGER
        },
        numerofactura:{
            type: dataTypes.INTEGER
        },
    };
    let config = {
        
        timestamps: false,
        deletedAt: false,
    }

    const Cliente_pedido = sequelize.define(alias,cols,config);
   
    Cliente_pedido.associate = function(models) {
        Cliente_pedido.belongsToMany(models.Cliente,{
            as:'clientes',
            through:'cliente_pedidos',
            foreignKey:'idclientes',
            otherKey:'idclientes',
            timestamps:false,
        }),
        Cliente_pedido.belongsToMany(models.Pedido,{
            as:'pedidos',
            through:'cliente_pedidos',
            foreignKey:'idpedidos',
            otherKey:'idpedidos',
            timestamps:false,
        }),
        Cliente_pedido.belongsTo(models.Cliente,{
            as: "cliente",
            foreignKey:"idclientes"
         })
        
    }
   

    return Cliente_pedido;
}