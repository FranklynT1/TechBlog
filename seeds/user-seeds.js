const { User } = require('../models');

const userData = [
    {
        username: "Tina_bina",
        twitter: "Tinab",
        github: "Tinab",
        email: "Tina_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "john_a",
        twitter: "johna",
        github: "johna",
        email: "john_a@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "tom_t",
        twitter: "tom",
        github: "tom",
        email: "tom_t@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "bruce_j",
        twitter: "brucejunior",
        github: "brucejunior",
        email: "bruce_j@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "keny_t",
        twitter: "kenytom3",
        github: "kenytom3",
        email: "keny_t@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "xaiver",
        twitter: "xaiver_w",
        github: "xaiver",
        email: "xaiver_w@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;