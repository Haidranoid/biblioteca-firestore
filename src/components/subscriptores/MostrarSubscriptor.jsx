import React from 'react';
import {compose} from "redux";
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Link} from "react-router-dom";

const MostrarSubscriptor = ({subscriptor}) => {

  if (!subscriptor) {
    return (
      <div className="container text-center">
        <CircularProgress/>
      </div>)
  }

  return (
    <div className="row">
      <div className="col-md-6 mb-4">
        <Link
          className="btn btn-secondary"
          to="/subscriptores"
        >
          <i className="fas fa-arrow-circle-left"></i>{' '}
          Volver al listado
        </Link>
      </div>
      <div className="col-md-6">
        <Link
          className="btn btn-primary float-right"
          to={`/subscriptores/editar/${subscriptor.id}`}>

          <i className="fas fa-pencil-alt"></i>{' '}
          Editar subscriptor
        </Link>
      </div>
      <hr className="mx-5 w-100"/>

      <div className="col-12">
        <h2 className="mb-4">
          {subscriptor.nombre} {subscriptor.apellido}
        </h2>

        <p>
          <span className="font-weight-bold">
            Carrera:
          </span>{' '}
          {subscriptor.carrera}
        </p>
        <p>
          <span className="font-weight-bold">
            Codigo:
          </span>{' '}
          {subscriptor.codigo}
        </p>
      </div>
    </div>
  );
};

export default compose(
  firestoreConnect(props => [
    {
      collection: 'subscriptores',
      storeAs: 'subscriptor',
      doc: props.match.params.id
    }
  ]),
  connect(({firestore: {ordered}}, props) => ({
    subscriptor: ordered.subscriptor && ordered.subscriptor[0]
  }))
)(MostrarSubscriptor);
