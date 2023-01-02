import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MainContext from '../../../context/MainContext'

const AdminPannelTrips = () => {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate()
    const { alert, setAlert } = useContext(MainContext)

    const handleDelete = (id) => {
        axios.delete('/api/trips/delete/' + id)
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
        axios.get('/api/trips/')
            .then(resp => setTrips(resp.data))
            .catch(error => console.log(error))
    }, [alert])

    return (
        <>
            <div className="d-flex justify-content-between page-heading">
                <h1>Dalys</h1>
                <Link 
                    to="/admin/trips/new" 
                    className="btn btn-success"
                >
                    Pridėti naują kelionę
                </Link>
            </div>
            {trips ?
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pavadinimas</th>
                            <th>Foto/Video</th>
                            <th>Turinys</th>
                            
                          
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {trips.map(trips =>
                            <tr key={trips.id}>
                                <td>{trips.id}</td>
                                <td>{trips.name}</td>
                                <td>{trips.media}</td>
                                <td>{trips.text}</td>
                                
                                
                                <td>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Link to={'/admin/trips/edit/' + trips.id} className="btn btn-primary">Redaguoti</Link>
                                        <button className="btn btn-warning" onClick={() =>  handleDelete(trips.id)}>Ištrinti</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                <h3>Nėra įkeltų kelionių</h3>
            }
        </>
    )
}

export default AdminPannelTrips