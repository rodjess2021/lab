const data = [{
    id: 1,
    name: "Pepe",
    last_name: "Perez",
  },
  {
    id:2,
    name: "Pedro",
    last_name:"Gomez"
  }
];
let constid = 0;
export const findAll = () => {
    return data;
};
export const findOne = (id) => {
    const user = data.find((u) => u.id === Number(id));
    return user;
};
export const store = (user) => {
    user.id = constid + 1;
    data.push(user);
    constid = user.id;
};
export const update = (id, user) => {
    const index = data.findIndex((u) => u.id === Number(id));

    data[index] = {
        ...data[index],
        ...user,
    };
};
export const remove = (id) => {
    const users = data.filter((u) => u.id !== Number(id));
    data.length = 0;
    data.push(...users);
};