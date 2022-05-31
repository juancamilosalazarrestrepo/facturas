module.exports = (sequelize,dataTypes) => {
    let alias = "Cliente";
    let cols = {
        idclientes : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255)
        },
        apellido: {
            type: dataTypes.STRING(255)
        },
        cedula: {
            type: dataTypes.STRING(255)
        },
        celular: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        
        timestamps: false,
        deletedAt: false,
    }

    const Cliente = sequelize.define(alias,cols,config);
   
    Cliente.associate = function(models) {
        Cliente.hasMany(models.Factura,{
           as: "factura",
           foreignKey:"idclientes"
        }),
        Cliente.belongsToMany(models.Pedido,{
            as:'pedidos',
            through:'cliente_pedidos',
            foreignKey:'idclientes',
            otherKey:'idpedidos',
            timestamps:false,
        }),
        Cliente.hasMany(models.Cliente_pedido,{
            as: "cliente_pedido",
            foreignKey:"idclientes"
         })
        
    }

    return Cliente;
}