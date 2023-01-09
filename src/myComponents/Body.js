import React from 'react'
import PropTypes from 'prop-types'


export const Body = (props) => {
    return (
        
        <section>
            This is body
            <div className="container bg-dark text-light">
                {props.term}
            </div>
            <div className="card b-2">
                {props.t2}
            </div>
        </section>
    )
}

Body.propTypes = {
    t2: PropTypes.string
}