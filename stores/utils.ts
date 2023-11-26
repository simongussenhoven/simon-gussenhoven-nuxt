export const paramsToQueryParams = (params: any) => {

    const queryArray = Object.entries(params).map((param: any, index: number) => {
        if (index > 0) return `&${param[0]}=${param[1]}`
        else return `${param[0]}=${param[1]}`

    })
    // const queryParams = Object.entries(params).map((param, index) => {
    //     index == 0 ? `?${param[0]}=${param[1]}` : `&${param[0]}=${param[1]}`
    // })
    return `?${queryArray.join("")}`
}