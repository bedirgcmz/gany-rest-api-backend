import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("gany", "root", "63.Sweden", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

const Material = sequelize.define(
  "material",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    mainCategory: { type: DataTypes.STRING, allowNull: false },
    subCategory: { type: DataTypes.STRING, allowNull: false },
    descreption: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
    min_age: { type: DataTypes.INTEGER, allowNull: true },
    //max_age: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    timestamps: false,
    tableName: "material",
  }
);

const Organisation = sequelize.define(
  "organisation",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    descreption: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
  },
  {
    timestamps: false,
    tableName: "organisation",
  }
);

const Group = sequelize.define(
  "group",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    level: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "group",
  }
);

const Category = sequelize.define(
  "category",
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "category",
  }
);

const Subcategory = sequelize.define(
  "subcategory",
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "subcategory",
  }
);

const Student = sequelize.define(
  "student",
  {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    class: { type: DataTypes.INTEGER, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    mentor: { type: DataTypes.STRING, allowNull: false, defaultValue: "belirtilmedi" },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
    role: { type: DataTypes.STRING, defaultValue: "student" },
  },
  {
    timestamps: false,
    tableName: "student",
  }
);

const Mentor = sequelize.define(
  "mentor",
  {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
    role: { type: DataTypes.STRING, defaultValue: "mentor" },
  },
  {
    timestamps: false,
    tableName: "mentor",
  }
);

const Admin = sequelize.define(
  "admin",
  {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN },
    role: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: "admin",
  }
);

const Task = sequelize.define(
  "task",
  {
    task_name: { type: DataTypes.STRING, allowNull: false },
    materialId: { type: DataTypes.INTEGER, allowNull: false },
    added_mentor: { type: DataTypes.STRING, allowNull: false },
    add_date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    task_state: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  },
  {
    tableName: "task",
  }
);

const Feedback = sequelize.define(
  "feedback",
  {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "feedback",
  }
);

Organisation.hasMany(Material);
Subcategory.hasMany(Material);
Category.hasMany(Subcategory);
Organisation.hasMany(Group);
Organisation.hasMany(Admin);
Organisation.hasMany(Mentor);
Mentor.hasMany(Group);
Group.hasMany(Student);
Organisation.hasMany(Student);
Group.hasMany(Task);
Student.hasMany(Task);
Mentor.hasMany(Task);

await sequelize.sync({ alter: true });

export {
  Material,
  Organisation,
  Group,
  Category,
  Subcategory,
  Student,
  Mentor,
  Admin,
  Task,
  Feedback,
};

/*

{
    "question": "Bir haftada kac gun vardir?",
		"answer_options": [
				{ "answer_text": "7 gun", "isCorrect": true },
				{ "answer_text": "12 gun", "isCorrect": false },
				{ "answer_text": "30 gon", "isCorrect": false },
				{ "answer_text": "365 gun", "isCorrect": false }
			]
    }
    "materialId": 12,



*/
