import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from  './authOrApp'

const Routes = () =>{
    return(
        <>
            <Switch>
                <Route path='/' component={AuthOrApp} exact />
                {/* <Route path='/' component={Dashboard} exact /> */}
                <Route path='/billingCycle' component={BillingCycle} exact />
                <Redirect from='*' to='/' />
            </Switch>
        </>
    )
}

export default Routes