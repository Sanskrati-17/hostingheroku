const express=require('express')
const router= express.Router()
const db=require('../database')

router.get('/',(req,res,next)=>
{
    res.render('home')
    db.promise().query('Create table t(id varchar(200));');
})

router.get('/days',(req,res,next)=>
{
    res.render('day')
})
router.get('/week',(req,res,next)=>
{
    res.render('week')
})
router.get('/home',(req,res,next)=>
{
    res.render('home')
})
module.exports=router