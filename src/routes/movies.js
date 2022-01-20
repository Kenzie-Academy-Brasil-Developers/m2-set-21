const {Router} = require("express");
const MovieController = require('../controllers/movie')

const router = Router();

router.get('/', (req, res) => {
  const data = MovieController.getAll()
  res.status(200).json(data)    
})

router.post('/', (req, res) => {
  if (Object.keys(req.body).length !== 0) {
      const data = MovieController.create(req.body)    
      res.status(201).json(data)
  }
  res.status(404).json({error: "Erro na criação"})
})

module.exports = router