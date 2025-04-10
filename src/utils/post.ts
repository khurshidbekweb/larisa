import axios from 'axios'

interface postOrder{
    firstName:string,
    lastName:string,
    phone:string,
    service: string
}


export const orderPost = {
    postOrder: async ({firstName, lastName, phone, service}:postOrder) => {
        const {data} = await axios.post('https://api.larisa.bot.imed.uz.result-me.uz/api/client', {
            firstName, lastName, phone, service
        }, {
            headers: {
                "auth-key": "5b2e083fb8814b6798ce3a0c1cf51449ba26a09a815642acf0bfa1c3b2ce1568"
            }
        })
        return data
    },
}