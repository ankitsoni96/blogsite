const Joi = require('joi');

class userValidator{
    getUsersValidator(body){
        const schema = Joi.object().keys({
            page:Joi.number().integer().required(),
            pageCount:Joi.number().integer().required()
        });
        return Joi.validate(body,schema);
    }
}
module.exports = new userValidator()