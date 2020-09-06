import jquery from 'jquery'

declare global {
    interface Window { MyNamespace: any; $: any; jQuery:any }
}

window.MyNamespace = window.MyNamespace || {};

window.$ = window.jQuery = jquery

