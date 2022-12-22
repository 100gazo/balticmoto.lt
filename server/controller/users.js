import express  from 'express'
import db from '../database/connect.js'

const Router = express.Router()

Router.get('/', async (req, res) => {
    const options = {}
    try {
        const users = await db.Users.findAll(options)
        res.json(users)
    }catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida');
    }

})

Router.get('/single/:id', async (req, res) => {
    try {
        const user = await db.Users.findByPk(req.params.id)
        res.json(user)
    } catch(error) {
        console.log(error)
        res.status(500).send('Objektas nerastas')
    }
})

Router.post('/new', async (req, res) => {
    try {
        await db.Users.create(req.body)
        res.send('Objektas išsaugotas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida išsaugant objektą') 
    }
})

Router.put('/edit/:id', async (req, res) => {
    try{ 
        const user = await db.Users.findByPk(req.params.id)
        await user.update(req.body) 
        res.send('Objektas sėkmingai atnaujintas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida atnaujinant objektą') 
    }
})

Router.delete('/delete/:id', async (req, res) => {
    try{ 
        const user = await db.Users.findByPk(req.params.id)
        await user.destroy() 
        res.send('Objektas sėkmingai ištrintas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida ištrinant objektą') 
    }
})


export default Router