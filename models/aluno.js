module.exports = (sequelize, DataTypes) => {
    const alunos = sequelize.define('alunos', {
        nomealunos: DataTypes.STRING,
        materias: DataTypes.STRING,
        notas: DataTypes.STRING,
        professorID: DataTypes.INTEGER
    }, {});

    alunos.associate = (models)=>{
        alunos.belongsTo(models.professor, 
        {foreignKey: 'professorId'})
    }

    return alunos;
}