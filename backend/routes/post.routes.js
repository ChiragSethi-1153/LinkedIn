const {postsController} = require('../controller')

const router = require('express').Router()

router.post('/posts/:id', postsController.posts)
router.get('/post', postsController.post)
router.put('/post/:id', postsController.postUpdate)


module.exports = router