import React from 'react';
import {Link} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";

class NuevoSubscriptor extends React.Component {

  firestore = this.props.firestore;
  history = this.props.history;

  state = {
    nombre: '',
    apellido: '',
    carrera: '',
    codigo: '',
  };

  agregarSubscriptor = e => {
    e.preventDefault();

    const nuevoSub = this.state;

    this.firestore.add({
      collection:'subscriptores'
    },nuevoSub)
      .then(() =>{
        this.history.push('/subscriptores')
      });
  };


  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  render() {
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
            <i className="fas fa-user-plus"></i>{' '}
            Nuevo subscriptor
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <form onSubmit={this.agregarSubscriptor}>
                <div className="form-group">
                  <label htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.nombre}
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
                    onChange={this.handleChange}
                    value={this.state.apellido}
                    name="apellido"
                    className="form-control"
                    placeholder="Apellido del subscriptor"
                    type="text"/>
                </div>

                <div className="form-group">
                  <label htmlFor="carrera">
                    Carrera
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.carrera}
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
                    onChange={this.handleChange}
                    value={this.state.codigo}
                    name="codigo"
                    className="form-control"
                    placeholder="Codigo del subscriptor"
                    type="text"/>
                </div>
                <input
                  className="btn btn-success btn-block"
                  value="Agregar Subscriptor"
                  type="submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default firestoreConnect()(NuevoSubscriptor);
