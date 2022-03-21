import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'

import { fetchStream, editStream } from '../../actions/index'
import StreamForm from './StreamForm'

const StreamEdit = (props) => {
   const { id } = useParams()
   const stream = useSelector((state) => state.streams[id])

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchStream(id))
   }, [id, dispatch])

   const onSubmit = (formValues) => {
      dispatch(editStream(id, formValues))
   }

   if (!stream) {
      return <div>Loading....</div>
   }

   return (
      <div>
         <h3>Edit a Stream</h3>
         <StreamForm
            onSubmit={onSubmit}
            initialValues={_.pick(stream, 'title', 'description')}
         />
      </div>
   )
}

export default StreamEdit
