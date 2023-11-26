const baseUrl = 'https://api.politie.nl/v4/nieuws'
import axios from 'axios'
import { paramsToQueryParams } from '~/stores/utils'

export const handler = async (event: any) => {
    console.log('Query paraneters')
    console.log(baseUrl + paramsToQueryParams(event.queryStringParameters))
    try {
        const { data } = await axios.get(baseUrl + paramsToQueryParams(event.queryStringParameters))
        return { statusCode: 200, body: JSON.stringify(data) }
    }
    catch (error: any) {
        const { status, statusText, headers, data } = error.response
        return {
            statusCode: status,
            body: JSON.stringify({
                status,
                statusText,
                headers,
                data
            })
        }
    }
}
