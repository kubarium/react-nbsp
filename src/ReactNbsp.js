import React, {PropTypes} from 'react';

const Space = props => {
    let count = props.count
    let space = ""
    do {
        space = space.concat('\u00A0')
    } while (--count);
    return (
        <span>{space}</span>
    )
};

Space.propTypes = {
    count: PropTypes.number
};

export default Space;