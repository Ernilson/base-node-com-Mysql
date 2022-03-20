import Sequelize from 'sequelize';

const sequelize = new Sequelize('celke', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    quoteIdentifier: false,
     define:{
         syncOnAssociation: true,
         timestamps: false,
         underscored: true,
         underscoredAll: true,
         freezeTableName: true,
     },  
 });

 // Teste
sequelize.authenticate()
.then(function(){
    console.log('Conexão realizada com sucesso');
}).catch(function(){
    console.log('a conexão falhou!!');
});

export default sequelize;