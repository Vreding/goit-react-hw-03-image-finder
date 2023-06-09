import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Oval
          height={80}
          width={80}
          color="#4d5ea9"
          wrapperStyle={{}}
          wrapperClass=""
          visible="true"
          ariaLabel="oval-loading"
          secondaryColor="#4d5ea9"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
