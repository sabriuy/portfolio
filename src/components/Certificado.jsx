import React, { useState } from 'react';

function Certificado(props) {
  const [isOpen, setIsOpen] = useState(false);

  const abrirFoto = () => {
    setIsOpen(true);
  };

  const cerrarFoto = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <img
          className='foto'
          onClick={abrirFoto}
          src={props.certificado}
          style={{
            width: '140px',
            height: '100px',
            marginLeft: '80px',
            padding: '10px',
            cursor: 'pointer',
          }}
          alt='Certificado'
        />
        <p style={{ padding: '20px', color: 'white' }}>{props.textodiploma}</p>
      </div>

      {isOpen && (
        <div style={overlayStyle}>
          <img
            src={props.certificado}
            style={largeImageStyle}
            onClick={cerrarFoto}
            alt='Certificado Grande'
          />
        </div>
      )}
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const largeImageStyle = {
  maxWidth: '90%',
  maxHeight: '90%',
  cursor: 'pointer',
};

export default Certificado;
