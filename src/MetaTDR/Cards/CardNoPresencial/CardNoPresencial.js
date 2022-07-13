import React from 'react'
import styled from "styled-components";


const ComponentCardNoPresencial = styled.div`
  &&{ 
    padding:20px;
    border-radius:0px 0px 70px 0px ;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    display:flex;
  }

.contentImg{
  position:relative;
  .img{
  position:absolute;
  top:-60px;
  }
}  

.text{
  padding-top:40px;
  display:flex;
  flex-direction:column ;

  .titulo{
    display:flex;
    justify-content:space-between ;
    width:100%;
  }

  .textTitulo{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #27272A;
    width:80%;
    margin:0px;
  }

 .hr{
  border: 1px solid #E7E5E4;
  }
.sub{
  display:flex;
  flex-direction:column;
  .textSub{
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #78716C;
   }
 }
}

`

const CardNoPresencial = (props) => {
    
    const renderData = () => {
        let resultado = props.datos.redes ? props.datos.redes.map ((res,i) => {
    
          return <div className="link">
          {res.label}
          </div>
    
        })
        : null
        return resultado;
        
      }
     
    return (
        <ComponentCardNoPresencial>

            {props.img ?

                <div className="contentImg">
                    <div className="img">
                        {props.img}
                    </div>
                </div>

                : null}

            <div className="text">

                <div className="titulo">

                    <p className="textTitulo">
                        {props.datos.titulo ? props.datos.titulo : null}
                    </p>

                    {props.button ?
                        <div className="containerButton">
                            {props.button}
                        </div>
                        : null}
                </div>

                <hr className="hr" />

                <div className="sub">

                  <p className="textSub">
                    {props.datos.sub ? props.datos.sub : null}
                   </p>

                    {renderData()}

                    {props.datos.link ? props.datos.link : null}
                </div>

            </div>



        </ComponentCardNoPresencial>
    )
}

export default CardNoPresencial