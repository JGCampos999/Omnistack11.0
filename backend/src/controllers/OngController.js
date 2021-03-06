const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },
    async create(request, response) {
        const { password, name, email, whatsapp, city, uf } = request.body
        const id = generateUniqueId()
        await connection('ongs').insert({
            id,
            password,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id })
    }
}