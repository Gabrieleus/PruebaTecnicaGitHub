import React, {useEffect, useState} from 'react'
import LinkFrom from './LinkFrom'
import {db} from './firebase/Firebase'
import {Button} from 'react-bootstrap'

const Info = () => {

    const [info, setInfo] = useState([])

    const addOrEditInfo = async (infoObject) => {
        await db.collection('Info').doc().set(infoObject);
        console.log('new task added')
    }

    const onDeleteInfo = async (id) => {
        if(window.confirm('¿Estas seguro de que quieres eliminar este usuario?')) {
          await db.collection('Info').doc(id).delete();
          console.log('Task Deleted')
        }
    }

    const getInfo = async () => {
        db.collection("Info").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setInfo(docs);
        })
    };

    useEffect(() => {
        getInfo();
    }, [])

    return (
        <div>
            <div className="row">
                {info.map(info => (
                    <div className="card col" key={info.id}>
                        <div className="card-body ">
                            <h6>Nombre: {info.nombre}</h6>
                            <h6>Cedula: {info.cedula}</h6>
                            <h6>Fecha de Nacimiento: {info.fechadenacimiento}</h6>
                            <h6>Correo Electronico: {info.correoelectronico}</h6>
                            <h6>Usuario de Github: {info.usuariodegithub}</h6>
                            <div><Button type="button" variant="danger" onClick={() => onDeleteInfo(info.id)}>Borrar</Button></div>
                        </div>
                    </div>
                ))}
            </div>
            <br></br>
            <div className="">
            <LinkFrom addOrEditInfo={addOrEditInfo}/>
            </div>
        </div>
    )
}

export default Info
