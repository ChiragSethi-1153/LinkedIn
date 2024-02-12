const {postsService} = require('../services')


exports.posts = async (req, res) => {
    try{
    const response = await postsService.posts(req)
    return res.status(201).json(response)
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}



exports.post = async (req, res) => {
    try{
        const response = await postsService.post(req)
        return res.status(200).json(response)
    }catch(err){
        console.log(err)
        return res.status(404).send(err)
    }
}

exports.postUpdate = async (req, res) => {
    try{
        const response  = await postsService.postUpdate(req)
        return res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}