import React, {Component} from 'react';
import Imagen from '../components/Imagen'

class Resultado extends Component {

    mostrarImagenes = (e) => {
        const imagenes = this.props.imagenes;
        if (imagenes.length === 0) return null;

        // console.log(imagenes);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}

export default Resultado;
