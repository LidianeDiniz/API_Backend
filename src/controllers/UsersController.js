const { hash } = require('bcryptjs')
const AppError = require('../utils/AppError')

const sqliteConection = require('../database/sqlite')
const { request, response } = require('express')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConection()
    const checkUserExists = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (checkUserExists) {
      throw new AppError('Este e-mail já está em uso.')
    }

    const hashedPassword = await hash(password, 8)
    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }

  async update(request, response) {}
}

module.exports = UsersController
