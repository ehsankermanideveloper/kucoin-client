import axios from 'axios';
axios.defaults.headers.common["Content-Type"] = 'application/json';

const client = axios.create({
    baseURL: "http://51.210.225.161:3000/api/v1/",
})

export const getAllCurrencies = async () => {
    const { data } = await client.get(`currencies/available/?isDepositEnabled=true&isWithdrawEnabled=true`);
    return data.data;
}

export const getCurrency = async (id) => {
    const { data } = await client.get(`currencies/available/${id}`);
    return data.data;
}

export const register = async(values) => {
    const {data} = await client.post(`auth/register`, values);
    return data;
}

export const login = async (values) => {
    const {data} = await client.post(`auth/login`, values);
    return data;
}

export const fetchDepositAddress = async ({queryKey : [_, id]}) => {
    const {data} = await client.get(`deposit/address/${id}`);
    return data.data;
}

export const checkDeposit = async ({queryKey : [_ , {address, id}]}) => {
    const {data} = await client.get(`deposit/check/${address}/${id}`);
    return data.data;
}

export const createDepositAddress = async (coin) => {
    const {data} = await client.post(`deposit/create/address/${coin}`);
    return data.data;
}

export const estimate = async ({sourceCurrency, destinationCurrency, destinationNetwork, sourceAmount}) => {
    const {data} = await client.get(`orders/estimate/${sourceCurrency}/${destinationCurrency}/${destinationNetwork}/${sourceAmount}`);
    return data.data;
}

export const trade = async ({tradeId, destinationCurrency, hashTransaction, amount}) => {
    const {data} = await client.post(`orders/trade/${tradeId}/${destinationCurrency}/${hashTransaction}/${amount}?withdrawAllEnable=true&depositAllEnable=true`);
    return data.data;
}

export const addTrade = async (values) => {
    const {data} = await client.post(`orders/add/trade`, values);
    return data.data;
}

export const getCommission = async () => {
    const token = localStorage.getItem("token");
    const {data} = await client.get(`admin/commission`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
        });
    return data.data;
}

export const updateCommission = async (percent) => {
    const token = localStorage.getItem("token");
    const {data} = await client.put(`admin/commission`, percent, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        })
    return data.data;
}

export const getDepositList = async () => {
    const token = localStorage.getItem("token");
    const {data} = await client.get(`admin/deposit`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        });
    return data.data;
}

export const getOrdersList = async () => {
    const token = localStorage.getItem("token");
    const {data} = await client.get(`admin/orders`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        });
    return data.data;
}

export const getTradesList = async () => {
    const token = localStorage.getItem("token");
    const {data} = await client.get(`admin/trades`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        });
    return data.data;
}

export const getAccountsList = async () => {
    const {data} = await client.get(`accounts/list`);
    return data.data;
}

export const createAccount = async (coin) => {
    const {data} = await client.post(`accounts/create/${coin}`);
    return data.data;
}
