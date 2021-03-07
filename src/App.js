import React, {Component} from 'react';
import Search from './components/Search'
import Resultado from './components/Resultado'
import Paginacion from './components/Paginacion';

class App extends Component {

    state = {
        termino: '',
        pagina: '',
        imagenes: []
    }

    scroll = () => {
        // cuando pinchas en los botones de pagina q aparecen al final, este metodo te lleva a la parte inferior del div jumbotron
        const elemento = document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth', 'end');
    }

    paginaAnterior = () => {
        //    leer el state de la pagina actual
        let pagina = this.state.pagina;

        // si la pagina es 1 no ir hacia atras
        if (pagina === 1) return null;

        //    restar 1  a la pagina actual
        pagina -= 1;

        //    agregar el cambio al state
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
            this.scroll();
        })
    }

    paginaSiguiente = () => {
    //    leer el state de la pagina actual
        let pagina = this.state.pagina;

    //    sumar 1  a la pagina actual
        pagina += 1;

    //    agregar el cambio al state
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
            this.scroll();
        })
    }

    consultarApi = () => {
        const termino = this.state.termino;
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=20560523-a8481b182c94c13379b97b95e&q=${termino}&per_page=10&page=${pagina}`;
        // console.log(termino, pagina, url);
        // Utilizamos fetch pq viene por defecto en javascript......podiamos haber utilizado axios
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({imagenes: resultado.hits}))
            .catch(error => console.log('Upsss, hubo algún error ...'))
    }

    datosBusqueda = (termino) => {
        this.setState({
            termino: termino,
            pagina: 1,
        }, () => {
            this.consultarApi();
        })
    }

    render() {
        return (
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">Buscador de imágenes</p>

                    <Search datosBusqueda={this.datosBusqueda}/>
                </div>

                <div className="row justify-content-center">
                    {
                        this.state.imagenes.length > 0 ?
                            <Paginacion paginaAnterior={this.paginaAnterior}
                                        paginaSiguiente={this.paginaSiguiente}/> : ''
                    }

                    {
                        this.state.imagenes.length > 0 ?
                            <Resultado imagenes={this.state.imagenes}/> : 'No hay imágenes para mostrar ...'
                    }

                    {
                        this.state.imagenes.length > 0 ?
                            <Paginacion paginaAnterior={this.paginaAnterior}
                                        paginaSiguiente={this.paginaSiguiente}/> : ''
                    }
                </div>

            </div>
        );
    }
}

export default App;
