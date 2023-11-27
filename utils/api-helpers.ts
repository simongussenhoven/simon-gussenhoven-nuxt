export const paramsToQueryParamString = (params: any) => {
    const queryArray = Object.entries(params).map((param, index) => {
        if (!param[1] || param[1] == "") return ""
        return `${param[0]}=${param[1]}`
    })

    return `?${queryArray.filter((par) => par !== "").join("&")}`
}