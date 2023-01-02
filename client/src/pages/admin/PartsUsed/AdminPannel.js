import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MainContext from '../../../context/MainContext'

const AdminPannelPartsUsed = () => {
    const [part, setPart] = useState([])
    const navigate = useNavigate()
    const { alert, setAlert } = useContext(MainContext)

    const handleDelete = (id) => {
        axios.delete('/api/used-parts/delete/' + id)
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
        axios.get('/api/used-parts/')
            .then(resp => setPart(resp.data))
            .catch(error => console.log(error))
    }, [alert])

    return (
        <>
            <div className="d-flex justify-content-between page-heading">
                <h1>Dėvėtos Dalys</h1>
                <Link 
                    to="/admin/used-parts/new" 
                    className="btn btn-success"
                >
                    Pridėti naują dalį
                </Link>
            </div>
            {part ?
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Kaina</th>
                            <th>Markė</th>
                            <th>Modelis.</th>
                            <th>Metai.</th>
                            <th>Variklis</th>
                          
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {part.map(part =>
                            <tr key={part.id}>
                                <td>{part.id}</td>
                                <td>{part.price}</td>
                                <td>{part.name}</td>
                                <td>{part.description}</td>
                                <td>{part.photo}</td>
                                <td>{part.condition}</td>
                                
                                <td>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Link to={'/admin/used-parts/edit/' + part.id} className="btn btn-primary">Redaguoti</Link>
                                        <button className="btn btn-warning" onClick={() =>  handleDelete(part.id)}>Ištrinti</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                <h3>Nėra įkeltų dalių</h3>
            }
        </>
    )
}

export default AdminPannelPartsUsed