import express  from 'express'
import cors from 'cors'
import session from 'express-session'
import  { Moto, TyresNew, TyresUsed, Trips, Users , PartsNew, PartsUsed }  from './controller/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('trust proxy', 1)
app.use(session({
    secret: 'A07398B04C6065521472B432D2CE9BD27C6D63C28C71E0FFD9C0B8993FACC04D',
    resave: false,
    saveUninitialized: false,
    cookie: {
            secure: false,
            maxAge: 3600000

    }
}))

app.use('/api/moto/', Moto)
app.use('/api/new-tyres', TyresNew)
app.use('/api/used-tyres', TyresUsed)
app.use('/api/trips/', Trips)
app.use('/api/users/', Users)
app.use('/api/new-parts/', PartsNew)
app.use('/api/used-parts/', PartsUsed)


app.listen(3000)