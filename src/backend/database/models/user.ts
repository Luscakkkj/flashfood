import sequelize, {
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelizeDB from '.';
import * as bcrypt from 'bcrypt';

class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phone: string;
  declare cpf: string;
  declare password: string;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: sequelize.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: sequelize.STRING,
    },
    phone: {
      unique: true,
      allowNull: false,
      type: sequelize.STRING,
    },
    cpf: {
      unique: true,
      allowNull: false,
      type: sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: sequelize.STRING,
    },
  },
  {
    sequelize: sequelizeDB,
    modelName: 'User',
    hooks: {
      beforeCreate: async (model) => {
        const hashPassword = await bcrypt.hash(model.password, 8);
        model.password = hashPassword;
      },
    },
  },
);

export default User;
