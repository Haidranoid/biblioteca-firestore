import React from 'react';
import {compose} from "redux";
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Link} from "react-router-dom";

class EditarSubscriptor extends React.Component {

  nombreInput = React.createRef();
  apellidoInput = React.createRef();
  codigoInput = React.createRef();
  carreraInput = React.createRef();

  editarSubscriptor = e => {
    e.preventDefault();

    const subscriptorActualizado = {
      nombre: this.nombreInput.current.value,
      apellido: this.apellidoInput.current.value,
      codigo: this.codigoInput.current.value,
      carrera: this.carreraInput.current.value,
    };

    const {subscriptor, firestore, history} = this.props;


    firestore.update({
      collection: 'subscriptores',
      doc: subscriptor.id
    }, subscriptorActualizado)
      .then(history.push('/subscriptores'));

  };

  render() {

    const {subscriptor} = this.props;

    if (!subscriptor) {
      return (
        <div className="container text-center">
          <CircularProgress/>
        </div>)
    }

    return (
      <div className="row">
        <div className="col-12 mb-4">
          <Link
            className="btn btn-secondary"
            to="/subscriptores">
            <i className="fas fa-arrow-circle-lef"></i>{' '}
            Volver al listado
          </Link>
        </div>
        <div className="col-12">
          <h2>
            <i className="fas fa-user"></i>{' '}
            Editar subscriptor
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <form onSubmit={this.editarSubscriptor}>
                <div className="form-group">
                  <label htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    ref={this.nombreInput}
                    defaultValue={subscriptor.nombre}
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre del subscriptor"
                    type="text"/>
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">
                    Apellido
                  </label>
                  <input
                    ref={this.apellidoInput}
                    name="apellido"
                    className="form-control"
                    placeholder="Apellido del subscriptor"
                    defaultValue={subscriptor.apellido}
                    type="text"/>
                </div>

                <div className="form-group">
                  <label htmlFor="carrera">
                    Carrera
                  </label>
                  <input
                    ref={this.carreraInput}
                    defaultValue={subscriptor.carrera}
                    name="carrera"
                    className="form-control"
                    placeholder="Carrera del subscriptor"
                    type="text"/>
                </div>

                <div className="form-group">
                  <label htmlFor="codigo">
                    Codigo
                  </label>
                  <input
                    ref={this.codigoInput}
                    defaultValue={subscriptor.codigo}
                    name="codigo"
                    className="form-control"
                    placeholder="Codigo del subscriptor"
                    type="text"/>
                </div>
                <input
                  className="btn btn-success btn-block"
                  defaultValue="Editar Subscriptor"
                  type="submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
)(EditarSubscriptor);
