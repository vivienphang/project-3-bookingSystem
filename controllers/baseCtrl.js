class BaseCtrl {
  constructor(model) {
    this.model = model
  }
  baseRoute(req, res) {
    console.log('Running base route')
    res.send('this is coming from base controller')
  }
}
module.exports = BaseCtrl;