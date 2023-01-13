import React from 'react'
import QRreader from 'react-qr-scanner';

const QRCodeScanner = (props) => {

    const errorHandler = (err) => {
        console.log(err)
    }

    const scanHandler = (data) => { 
        if(data!==null){
            props.onScan(data);
        }
    }

  return (
    <div className='flex flex-auto justify-center my-4'>
        <QRreader
            delay={100}
            className="h-60 w-80"
            facingMode="front"
            onError={errorHandler}
            onScan={scanHandler}
        />
    </div>
  )
}

export default QRCodeScanner