import bcrypt from 'bcryptjs'


const users = [
    {
        name: "Admin User",
        email: 'admin@Shah.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Gary Jones",
        email: 'GaryJ94@Shah.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: " David Pisca ",
        email: 'DavidK94@Shah.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
]

export default users