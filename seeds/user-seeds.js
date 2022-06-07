const { User } = require('../models');

const userData = [
    {
        username: "Tina_bina",
        instagram: "Tinab",
        github: "Tinab",
        email: "Tina_bina@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "john_a",
        instagram: "johna",
        github: "johna",
        email: "john_a@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "tom_t",
        instagram: "tom",
        github: "tom",
        email: "tom_t@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "bruce_j",
        instagram: "brucejunior",
        github: "brucejunior",
        email: "bruce_j@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "keny_t",
        instagram: "kenytom3",
        github: "kenytom3",
        email: "keny_t@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "xaiver",
        instagram: "xaiver_w",
        github: "xaiver",
        email: "xaiver_w@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;