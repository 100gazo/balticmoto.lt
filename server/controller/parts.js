import express  from 'express'
import db from '../database/connect.js'

const Router = express.Router()

Router.get('/', async (req, res) => {
    const options = {}
    try {
        const part = await db.Parts.findAll(options)
        res.json(part)
    }catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida');
    }

})

Router.get('/single/:id', async (req, res) => {
    try {
        const part = await db.Parts.findByPk(req.params.id)
        res.json(part)
    } catch(error) {
        console.log(error)
        res.status(500).send('Objektas nerastas')
    }
})

Router.post('/new', async (req, res) => {
    try {
        await db.Parts.create(req.body)
        res.send('Objektas išsaugotas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida išsaugant objektą') 
    }
})

Router.put('/edit/:id', async (req, res) => {
    try{ 
        const part = await db.Parts.findByPk(req.params.id)
        await part.update(req.body) 
        res.send('Objektas sėkmingai atnaujintas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida atnaujinant objektą') 
    }
})

Router.delete('/delete/:id', async (req, res) => {
    try{ 
        const part = await db.Parts.findByPk(req.params.id)
        await part.destroy() 
        res.send('Objektas sėkmingai ištrintas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida ištrinant objektą') 
    }
})

export default Router