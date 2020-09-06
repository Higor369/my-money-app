import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.post(`${BASE_URL}/billingCycle/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}