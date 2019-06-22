const userValidator = require("../Validators/userValidator");
const userHelper = require("../Helpers/userHelper");

class userController {
  async getUsers(req, res) {
    try {
      await userValidator.getUsersValidator(req.body);
      let data = await userHelper.getUsers(req.body);
    // //  res.writeHead(200, {'Content-Type': 'text/plain'});
     console.log('data is printer ',data);
  //   res.writeHead(200, {'Content-Type': 'text/html'});
    res.json({code:1,status:200,message:"user getting successfully",data:data});
  res.end();

    } catch (error) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('asasasasa');
    }
  }
}
module.exports = new userController();
