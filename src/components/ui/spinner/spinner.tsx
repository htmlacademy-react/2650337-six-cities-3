import {ReactElement} from 'react';

function Spinner(): ReactElement {
  return (
    <div>
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100px',
        marginTop: '500px',
      }}
      >
        <div style={{textAlign: 'center'}}>
          <h1 style={{
            fontSize: '30px',
            lineHeight: '1.1875',
            fontWeight: '400',
            fontStyle: 'oblique',
          }}
          >
            Загружаем для вас лучшие предложения...
          </h1>
        </div>
      </main>
    </div>
  );
}

export default Spinner;
