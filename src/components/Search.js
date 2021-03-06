import React, {Component} from 'react';

class Search extends Component {

    BusquedaRef = React.createRef();

    handleData = (e) => {
        e.preventDefault();

        // tomamos el valor del input
        const termino = this.BusquedaRef.current.value;
        // lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }

    render() {
        return(
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.BusquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ej: Futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-danger btn-lg btn-block" value="Buscar..."/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;
