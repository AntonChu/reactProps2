import PropTypes from 'prop-types';
import AssemblyItem from './AssemblyItem';

const AssemblyAll = (props) => {
    return (
        <div className='item-list'>
            <>{props.items.map(el => AssemblyItem(el))} </>
        </div>
    )
    
}

AssemblyAll.propTypes = {
    items: PropTypes.array,
};

AssemblyAll.defaultProps = {
    items: [],
};

export default AssemblyAll;