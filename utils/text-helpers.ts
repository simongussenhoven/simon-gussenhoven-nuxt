export const splitParagraphs = (string: string) => {
    const splitPars = string.split('</p>')
    return splitPars.map((par: string) => {
        return par.replace('<p>', "")
    })
}