import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'node_modules_react-redux-toastr/lib/css/react-redux-toastr.css'

 const Mgs: React.FC = props => (
    <ReduxToastr 
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
 )

 export default Mgs