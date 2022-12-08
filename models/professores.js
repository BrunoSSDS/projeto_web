module.exports = (sequelize, DataTypes) => {
    const professor = sequelize.define('professor', {
        nomeprofessor: DataTypes.STRING,
        contato: DataTypes.STRING,
        endereco: DataTypes.STRING,
        cargo: DataTypes.STRING
        
    }, {});
    
    return professor;
};