const user = require('../models/users')

let users = [
    {id:1, name: 'Fenny', email: 'fnny04@gmail.com'},
    {id:2, name: 'Maul', email: 'maulanasodiqin1@gmail.com'}
]

module.exports = {
    index: function(request, response){
        if(users.length > 0) {
            response.json({
                status: true,
                data: users,
                method: request.method,
                url: request.url
            })
        } else {
            response.json({
                status : false,
                message: 'Data user kosong'
            })
        }
            
        },
        store:function(request, response){
            users.push(request.body)
            response.send({
                status: true,
                data: users,
                message: 'Data berhasil disimpan',
                method: request.method,
                url: request.url
            })
        },
        update:function(request, response){
            const id = request.params.id
            users.filter(user => {
                if(user.id == id) {
                    user.id = id
                    user.name = request.body.name
                    user.email = request.body.email
        
                    return user
                }
            })

        response.json({
            status: true,
            data: users,
            message: 'Data berhasil diedit',
            method: request.method,
            url: request.url
        })
    },
        delete:function(request, response){
            let id = request.params.userid
            users = users.filter(user => user.id != id)
        response.send({
            status: true,
            data: users,
            message: 'Data berhasil diedit',
            method: request.method,
            url: request.url
        })
   }
}