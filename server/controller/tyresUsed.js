import express  from 'express'
import db from '../database/connect.js'

const Router = express.Router()

Router.get('/', async (req, res) => {
    const options = {}
    try {
        const tyresUsed = await db.TyresUsed.findAll(options)
        res.json(tyresUsed)
    }catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida');
    }

})

Router.get('/single/:id', async (req, res) => {
    try {
        const usedTyres = await db.TyresUsed.findByPk(req.params.id)
        res.json(usedTyres)
    } catch(error) {
        console.log(error)
        res.status(500).send('Objektas nerastas')
    }
})

Router.post('/new', async (req, res) => {
    try {
        await db.TyresUsed.create(req.body)
        res.send('Objektas išsaugotas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida išsaugant objektą') 
    }
})

Router.put('/edit/:id', async (req, res) => {
    try{ 
        const usedTyres = await db.TyresUsed.findByPk(req.params.id)
        await usedTyres.update(req.body) 
        res.send('Objektas sėkmingai atnaujintas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida atnaujinant objektą') 
    }
})

Router.delete('/delete/:id', async (req, res) => {
    try{ 
        const usedTyres  = await db.TyresUsed.findByPk(req.params.id)
        await usedTyres.destroy() 
        res.send('Objektas sėkmingai ištrintas')
    } catch(error) {
        console.log(error)
        res.status(500).send('Įvyko klaida ištrinant objektą') 
    }
})


export default Router