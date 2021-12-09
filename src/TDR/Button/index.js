import React, {Fragment} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";


class Button extends React.Component {

    constructor (props) {
        super(props);
        this.state = {hasValue: false, hasError: false};

        this.onClick = this.onClick.bind(this);

    }

    onClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {type, id, name, disabled, value, outline } = this.props;
        let buttonClasses;

        if(outline){
            let classes = "btnLogin btn btn-outline-success";
            if(this.props.small){
                classes = "btnLogin btn btn-outline-success btn-outline-small ";
            }

         buttonClasses = classNames(classes, {'disabled': disabled }, {'': disabled });
}else{
            let classes = "btnLogin btn btn-success";
            if(this.props.small){
                classes = "btnLogin btn btn-success btn-small ";
            }

         buttonClasses = classNames(classes, {'disabled': disabled }, {'': disabled });
}

        return (
        <Fragment>
            <Fragment>
                <button
                    style={this.props.stilo?this.props.stilo.container:null}
                    type={type}
                    disabled={disabled}
                    className={buttonClasses}
                    id={id}
                    name={name}
                    onClick={this.onClick}
                >
                    {value}
                </button>

            </Fragment>
            {/* language=CSS*/}
            <style jsx>{`
                .btnLogin {
                    border-radius: 1.5rem !important;
                    padding-top: 11px;
                    padding-bottom: 11px;
                    padding-left: 61px;
                    padding-right: 61px;
                    text-align: center;
                    letter-spacing: 0.1px;
                    text-align: center;
                    font-stretch: normal;
                    font-style: normal;
                    font-size: 14px;
                    font-weight: 500;
                    white-space: nowrap;
                }

                .btn-success {
                    background-color: #7aac39;
                }

                .btn-outline-success {
                    color: #7aac39 ;
                    /*border-radius: 20px!important;*/
                    border: solid 2px #7aac39 ;
                    font-size: 14px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1;
                    letter-spacing: 0.1px;
                    text-align: center;

                }

                .btn-outline-small {
                 height: 70%;
                 width: 70%;
                 display: flex;
                 justify-content: center;
                 margin-right: 1px;
                  margin-bottom: 15px;
                    /*border-radius: 20px!important;*/

                }

                  .btn-small {
                 height: 70%;
                 width: 70%;
                 display: flex;
                 justify-content: center;
                  margin-right: 1px;
                   margin-bottom: 15px;
                    /*border-radius: 20px!important;*/

                }

                .btn-outline-success:hover {
                    color: ${this.props.estiloHover ? this.props.estiloHover.hoverfontColor : "white!important"} ;
                    background-color: ${this.props.estiloHover ? this.props.estiloHover.hoverBack : "#7aac39"} ;
                }

                .btnLogin:hover {
                    box-shadow: 1px 1px 10px 0 rgba(219, 219, 219, 1);
                    border-color: white;
                    color: white;
                }

                .btnLogin:focus {
                    box-shadow: 1px 1px 10px 0 rgba(219, 219, 219, 1);
                    border-color: #7aac39;
                    color: white;
                }

                .btnLogin.disabled {
                    background-color: #e8e8e8!important;
                    border-color: white!important;
                    color: #4a4a4a!important;
                }
            `}</style>
        </Fragment>

        );
    }
}

Button.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    outline: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    estiloHover:PropTypes.any,
    stilo:PropTypes.any,
    small:PropTypes.bool
  }

export default Button;