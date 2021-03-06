//get the url from client side and send them to the BL layer

const express = require('express');

const router = express.Router();

const MoviesBL = require('../bl/moviesbl');


router.route('/').get(async function(req,resp)
{
   let movies = await MoviesBL.getAllMovies()
   return resp.json(movies)
})

router.route('/:id').get(async function(req,resp)
{
   let movie = await MoviesBL.GetMovie(req.params.id)
   return resp.json(movie)
})

router.route('').post(async function(req,resp)
{
   let obj = req.body
   let status = await MoviesBL.AddMovie(obj)
   return resp.json(status)
})


router.route('/:id').put(async function(req,resp)
{
   let obj = req.body
   let id = req.params.id
   let status = await MoviesBL.UpdateMovie(id,obj)
   return resp.json(status)
})

router.route('/:id').delete(async function(req,resp)
{
   let id = req.params.id
   let status = await MoviesBL.DeleteMovie(id)
   return resp.json(status)
})

module.exports = router;