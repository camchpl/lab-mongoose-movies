const index = require('./routes/index');
const router = express.Router();
const Celebrity = require ('../models/Celebrity')

router.get('/', (req, res, next) => {
    res.render('index');
  });
  
  router.get('/celebrities', (req, res, next) => {
    res.render('index');
  });

  router.get('/celebrity/:celebrityId/edit', (req, res, next) => {
    Celebrity.findOne({ _id: req.params.bookId }).then((document) => {
      res.render("celebrity-edit", { celebrity: document });
    })
  });

  module.exports = router;