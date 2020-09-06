import {combineReducers} from 'redux'
import tabReducers from '../common/tab/tabReducers';
import BCRecuders from '../billingCycle/billingCycleReducers'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import authReducer from '../auth/authReducer'

import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducers =combineReducers({
    dashboard: DashboardReducer,
    tab: tabReducers,
    billingCycle: BCRecuders,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducers>

console.log('passei aqui ', rootReducers);

export default rootReducers;