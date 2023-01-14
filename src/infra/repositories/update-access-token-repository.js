const MissingParamError = require('../../utils/errors/missing-param-error')
const MongoHelper = require('../helpers/mongo-helper')

module.exports = class UpdateAccessTokenRepository {
  async update (userId, accessToken) {
    if (!userId) {
      throw new MissingParamError('userId')
    }
    if (!accessToken) {
      throw new MissingParamError('accessToken')
    }
    const userModel = await MongoHelper.getColletion('users')
    await userModel.updateOne({
      _id: userId
    }, {
      $set: {
        accessToken
      }
    })
  }
}
