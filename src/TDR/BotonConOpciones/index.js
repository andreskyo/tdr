import React, {Component, Fragment} from 'react';
//import './BotonConOpciones.css';
//import plus from "../static/images/combined-shape.svg";
import PropTypes from 'prop-types';
import ButtonLink from "../ButtonLink/index";


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: props.open?props.open:false,
        };

    }

    static getDerivedStateFromProps = (props) =>{
        return {open : props.open}
    };

    render() {
        const {open} = this.state;
        if(this.props.botones.length === 0)
            return null;

        if(open){
           return (
               <Fragment>
                    <div className="contenedorBotones" >
                        { 
                            this.props.botones.map((boton, i) =>{
                                return (
                                    <ButtonLink key={i} onClick={boton.Accion?eval(boton.Accion):()=>{}}>
                                        {boton.texto}
                                    </ButtonLink>
                                );
                            })
                        }
                    </div>
               </Fragment>
           );
        }else{
            return (
                <Fragment>
                    <div className="contenedorBotones2">
                        <button id="BtnVerDetalle"><img alt="" src={plus}/></button>
                    </div>
                </Fragment>
            );
        }
    }
}


Index.propTypes = {
    botones: PropTypes.array,
    open:PropTypes.bool

};

export default Index;