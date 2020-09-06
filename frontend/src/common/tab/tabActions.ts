export function selectTab(tabID:string){
    
    return {
        type: 'TAB_SELECTED',
        payload: tabID
    }
}

export function showTabs(...tabIds : string[]) {
    const tabsToShow: any = {}
    tabIds.forEach((e: any )=> tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}