import axios from 'axios'
export const orderPost = {
    postOrder: async () => {
        const {data} = await axios.post('http://172.16.176.160:8086')
        return data
    }
        
}