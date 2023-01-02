import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MainContext from '../../../context/MainContext'

const AdminPannelTyresNew = () => {
    const [part, setPart] = useState([])
    const navigate = useNavigate()
    const { alert, setAlert } = useContext(MainContext)

    const handleDelete = (id) => {
        axios.delete('/api/new-tyres/delete/' + id)
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
        axios.get('/api/new-tyres/')
            .then(resp => setPart(resp.data))
            .catch(error => console.log(error))
    }, [alert])

    return (
        <>
            <div className="d-flex justify-content-between page-heading">
                <h1>Naujos Padangos</h1>
                <Link 
                    to="/admin/new-tyres/new" 
                    className="btn btn-success"
                >
                    Pridėti 
                </Link>
            </div>
            {part ?
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Kaina</th>
                            <th>Markė</th>
                            <th>Kameros Tipas</th>
                            <th>Matmenys</th>
                            <th>Greičio indeksas</th>
                            <th>Greičio indeksas2</th>
                            <th>Konstrukcijos Tipas</th>
                            <th>Apkrovos indeksas</th>
                            <th>Apkrovos indeksas 2</th>
                            <th>Protektorius</th>
                            <th>Paskirtis</th>
                            <th>DEV Kodas</th>
                            <th>Plotis</th>
                            <th>Diametras</th>
                            <th>Rūšis</th>
                            <th>EAN Kodas</th>

                          
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {part.map(part =>
                            <tr key={part.id}>
                                <td>{part.id}</td>
                                <td>{part.price}</td>
                                <td>{part.marke}</td>
                                <td>{part.wheelcamera}</td>
                                <td>{part.dimension}</td>
                                <td>{part.speedindex}</td>
                                <td>{part.speedindex2}</td>
                                <td>{part.constructiontype}</td>
                                <td>{part.loadindex}</td>
                                <td>{part.loadindex2}</td>
                                <td>{part.protector}</td>
                                <td>{part.purpose}</td>
                                <td>{part.devcode}</td>
                                <td>{part.width}</td>
                                <td>{part.diameter}</td>
                                <td>{part.type}</td>
                                <td>{part.eancode}</td>
                                
                                
                                <td>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Link to={'/admin/new-tyres/edit/' + part.id} className="btn btn-primary">Redaguoti</Link>
                                        <button className="btn btn-warning" onClick={() =>  handleDelete(part.id)}>Ištrinti</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                <h3>Nėra įkeltų objektų</h3>
            }
        </>
    )
}

export default AdminPannelTyresNew