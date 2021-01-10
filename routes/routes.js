const { Router } = require('express')
const express = require('express')
const router = require('express').Router()

router.get('/home', async (req, res) => {
   res.status(200).json({
      status: true,
      message: 'Hello World'
   })
})

module.exports = router