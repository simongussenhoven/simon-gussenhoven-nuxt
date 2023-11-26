export const paramsToQueryParamString = (params: any): string => {
    const queryArray = Object.entries(params).map((param: any, index: number) => {
        if (!param[1]) return ""
        if (index > 0) return `&${param[0]}=${param[1]}`
        else return `${param[0]}=${param[1]}`

    })
    return `?${queryArray.join("")}`
}