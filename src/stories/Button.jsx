import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';





  
  return (
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
  );
};
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
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
