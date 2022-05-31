module.exports = (sequelize,dataTypes) => {
    let alias = "Producto";
    let cols = {
        idproductos : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreproducto: {
            type: dataTypes.STRING(255)
        },
        descripcion: {
            type: dataTypes.STRING(255)
        },
        precio: {
            type: dataTypes.REAL
        }
    };
    let config = {
        
        timestamps: false,
        deletedAt: false,
    }

    const Producto = sequelize.define(alias,cols,config);
    Producto.associate = function(models){
        Producto.hasMany(models.Pedido,{
            as: "Pedidos",
            foreignKey: "idproductos"
        })
    }
   
   

    return Producto;
}