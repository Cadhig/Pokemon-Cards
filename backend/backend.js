require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const getPokemon = require('./getPokemon')