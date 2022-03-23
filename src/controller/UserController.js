const express = require('express');
import User from '../model/User';
const app = express();

app.use(express.json());

class UserController{

    async findAll(req, res){
        await User.findAll()
        .then((users) => {
            return res.json({       
                users,
            }); 
        }).catch(() => {
            return res.status(400).json({       
                erro: true,
                message: "Usuario não cadastrado!"
            });
        });
    }

    async findById(req, res) {
        const { id } = req.params;       
       await User.findByPk(id)
        .then((user) => {
            return res.json({  
                erro: false,
                user: user,

                message: "Usuario cadastrado!"
            }); 
        }).catch(() => {
            return res.status(400).json({       
                erro: true,
                message: "Usuario não cadastrado!"
            });
        });
    }
        /*
      async update(req, res){
        const { id } = req.body;
        await User.update(req.body, { where: { id} })
        .then(() => {
            return res.json({  
                erro: false,     
                message: "Registro alterado com sucesso!"
            }); 
        }).catch(() => {
            return res.status(400).json({       
                erro: true,
                message: "Erro!"
            });
        });
      }
      
      async create(req, res){
          const {name, email, password} = req.body;
         //await User.create(req.body)
         return res.json({  
            erro: false, 
            name: name, 
            email: email, 
            password: password
           
        });
      } 
    
    */

}

export default new UserController();