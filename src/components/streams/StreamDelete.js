import React, { useEffect } from 'react'
import Modal from '../Modal'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = () => {

   const { id } = useParams()
   const dispatch = useDispatch()
   const stream = useSelector((state) => state.streams)[id]

   useEffect(() => {
      dispatch(fetchStream(id))
   }, [])

   const actions = (
      <>
         <button onClick={() => dispatch(deleteStream(id))} className='ui button negative'>
            Delete
         </button>
         <Link to={'/'} className='ui button'>
            Cancel
         </Link>
      </>
   )

   const renderContent = () => {
      if (!stream) {
         return 'Are you sure you want to delete this stream?'
      }
      return `Are you sure you want to delete the stream with title: ${stream.title}`
   }

   return (
      <Modal
         title='Delete Stream'
         content={renderContent()}
         actions={actions}
         onDismiss={() => history.push('/')}
      />
   )
}

// if you are using connect and react router v5
// const mapStateToProps = (state, ownProps) => {
// 	return {stream: state.streams[ownProps.match.params.id]}
// }

export default StreamDelete
