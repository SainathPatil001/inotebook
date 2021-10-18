import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
       {props.message}
      </div>
    )
}


Alert.defaultProps={
    type:"secondary",
    message:"this is ALert"
}
Alert.propTypes={
    type:PropTypes.string
}
