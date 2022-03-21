import React from 'react'
import { connect } from 'react-redux'

import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {

   onSubmit = (formValues) => {
      // console.log(formValues) // - these vales passed in by redux form instead of event object
		this.props.createStream(formValues)
   }

   render() {
      return (
        <div>
			  <h3>Create a Stream</h3>
			  <StreamForm onSubmit={this.onSubmit}/>
		  </div>
      )
   }
}


export default connect(null, { createStream })(StreamCreate)
