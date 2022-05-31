const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const {op} = require("sequelize");
const productsFilePath = path.join(__dirname, '../database/productos.JSON');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const Cliente = db.Cliente;


const bCrypt = require('bcryptjs');
let productosRefresh;

module.exports = {
    home: async (req,res)=>{
		//productosRefresh = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //fs.writeFileSync(productsFilePath, JSON.stringify(productosRefresh, null, ' '));
        //productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //console.log(productosRefresh);
        
        const clientes = await Cliente.findAll();

       
        
        res.render(("main/home"),{
           
            clientes,

            toThousand
        });
    },
    cart: (req,res)=>{
        res.render("main/cart")
    },
    create: async (req,res) =>{
        try {
           
            return res.render('main/createUsers.ejs');         
        } catch (error) {
        console.log(error); 
        }
    },
    store: async (req,res) => {
        try {
           
            
           
           
           
           
          
           
            return res.redirect('/users/login')
        } catch (error) {
            return res.send(error);
        }

    }
}