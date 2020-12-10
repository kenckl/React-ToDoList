import {connect} from 'react-redux'
import DeleteLabel from '../components/DeleteLabel'
import {updateLabel} from '../actions'

const mapDispatchToProps = (dispatch)=>({
    deleteLabel: (todo)=> dispatch(updateLabel(todo))
})

const DeleteLabelContainer= connect(null, mapDispatchToProps)(DeleteLabel);

export default DeleteLabelContainer; 