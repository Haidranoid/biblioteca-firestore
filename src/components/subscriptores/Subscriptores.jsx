import React from 'react';
import {compose} from "redux";
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {Link} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from 'prop-types'

const Subscriptores = ({subscriptores, firestore}) => {

  if (!subscriptores) {return (
      <div className="container text-center">
        <CircularProgress/>
      </div>)}

  const handleSubmit = id => {
    console.log(id);

    firestore.delete({
      collection: 'subscriptores',
      doc:id
    });

  };

  return (
    <div className="row">
      <div className="col-md12 mb-4">
        <Link
          to="/subscriptores/nuevo"
          className="btn btn-primary"
        >
          <i className="fas fa-plus"></i>{' '}
          Nuevo subscriptor
        </Link>
      </div>
      <div className="col-md-8">
        <h2>
          <i className="fas fa-users"></i> Subscriptores
        </h2>
      </div>
      <table className="table table-striped mt-4">
        <thead className="text-alight bg-primary">
        <tr>
          <th>Nombre</th>
          <th>Carrera</th>
          <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
        {subscriptores.map(s =>
          <tr key={s.id}>
            <td>{s.nombre} {s.apellido}</td>
            <td>{s.carrera}</td>
            <td>
              <Link
                className="btn btn-success btn-block"
                to={`/subscriptores/${s.id}`}>
                <i className="fas fa-angle-double-right"></i>{' '}
                Mas informacion
              </Link>
              <button
                onClick={() => handleSubmit(s.id)}
                className="btn btn-danger btn-block"
                type="button">
                <i className="fas fa-trash-alt"></i>{' '}
                Eliminar
              </button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

Subscriptores.propTypes = {
  subscriptores: PropTypes.array,
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect([{
    collection: 'subscriptores'
  }]),
  connect((state, dispatch) => ({
    subscriptores: state.firestore.ordered.subscriptores
  }))
)(Subscriptores);
