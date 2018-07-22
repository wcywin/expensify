import moment from "moment";

export default [
    {
        id: '1',
        description: 'Hector',
        note: '',
        amount: 1950,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Photo',
        note: '',
        amount: 250000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 450000,
        createdAt: moment(0).add(4, 'days').valueOf()
    }];