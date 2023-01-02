import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MainContext from '../../../context/MainContext'

const AdminPannelMoto = () => {
    const [moto, setMoto] = useState([])
    const navigate = useNavigate()
    const { alert, setAlert } = useContext(MainContext)

    const handleDelete = (id) => {
        axios.delete('/api/moto/delete/' + id)
        .then(resp => {
            // setAlert({
            //     message: resp.data,
            //     status: 'success'
            // })
        })
        .catch(error => {
            console.log(error)

            

            if (error.response.status === 401)
                navigate('/')
        })
    }

    useEffect(() => {
        axios.get('/api/moto/')
            .then(resp => setMoto(resp.data))
            .catch(error => console.log(error))
    }, [alert])

    return (
        <>
            <div className="d-flex justify-content-between page-heading">
                <h1>Motociklai</h1>
                <Link 
                    to="/admin/moto/new" 
                    className="btn btn-success"
                >
                    Pridėti naują motociklą
                </Link>
            </div>
            {moto ?
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Kaina</th>
                            <th>Markė</th>
                            <th>Modelis.</th>
                            <th>Metai.</th>
                            <th>Variklis</th>
                            <th>Aušinimas.</th>
                            <th>Rida.</th>
                            <th>Būklė.</th>
                            <th>Kuro Tipas.</th>
                            <th>Nuotraukos.</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {moto.map(moto =>
                            <tr key={moto.id}>
                                <td>{moto.id}</td>
                                <td>{moto.price}</td>
                                <td>{moto.marke}</td>
                                <td>{moto.model}</td>
                                <td>{moto.year}</td>
                                <td>{moto.engine}</td>
                                <td>{moto.cooling}</td>
                                <td>{moto.mileage}</td>
                                <td>{moto.condition}</td>
                                <td>{moto.fuelType}</td>
                                <td>{moto.photo}</td>
                                <td>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Link to={'/admin/moto/edit/' + moto.id} className="btn btn-primary">Redaguoti</Link>
                                        <button className="btn btn-warning" onClick={() =>  handleDelete(moto.id)}>Ištrinti</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                <h3>Nėra įkeltų motociklų</h3>
            }
        </>
    )
}

export default AdminPannelMoto