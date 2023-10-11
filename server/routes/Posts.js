const express = require('express')

const postsSchema = require('../models/Posts')

const router = express();

//Get All
router.get('/api/posts/', async (req, res) => {
    const findPosts = await postsSchema.find();
    res.json(findPosts)
})

//Get Single
router.get('/api/posts/:id', async (req, res) => {
    const findPosts = await postsSchema.findById(req.params.id);
    res.json(findPosts)
})

//Update
router.put('/api/posts/:id', async (req, res) => {
    const { id } = req.params.id
    await postsSchema.updateOne({id} , req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Create
router.post('/api/posts', async (req, res) => {
    const posts = new postsSchema({ ...req.body });
    await posts.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/posts/:id', async (req, res) => {
    const { id } = req.params.id
    await postsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router