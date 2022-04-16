import { useQuery, useMutation } from "react-query"
import {getAllCurrencies, 
    getCurrency, 
    login, 
    register, 
    getAccountsList, 
    fetchDepositAddress, 
    checkDeposit, 
    estimate, 
    getCommission, 
    updateCommission, 
    getDepositList, 
    getOrdersList,
    getTradesList,
    createAccount,
    createDepositAddress,
    trade,
    addTrade} from "../Api";

export const useCurrencies = () => {
    return useQuery("currencies", getAllCurrencies)
}

export const useCurrency = (id) => {
    return useMutation(getCurrency);
}

export const useRegister = (values) => {
    return useMutation(register);
}

export const useLogin = (values) => {
    return useMutation(login)
}

export const useFetchDepositAddress = (id) => {
    return useQuery(["depositAddress", id], fetchDepositAddress);
}

export const useCheckDeposit = (address, id) => {
    return useQuery(["checkDeposit", address, id], checkDeposit);
}

export const useCreateDepositAddress = (coin) => {
    return useMutation(createDepositAddress);
}

export const useEstimate = (values) => {
    return useMutation(estimate);
}

export const useTrade = (params) => {
    return useMutation(trade);
}

export const useAddTrade = (formValues) => {
    return useMutation(addTrade);
}

export const useGetCommission = () => {
    return useQuery("commission", getCommission);
}

export const useUpdateCommission = (percent) => {
    return useMutation(updateCommission);
}

export const useDepositList = () => {
    return useQuery("depositList", getDepositList);
}

export const useGetOrderList = () => {
    return useQuery("orderList", getOrdersList);
}

export const useGetTradeList = () => {
    return useQuery("tradeList", getTradesList);
}

export const useAccountList = () => {
    return useQuery("accountList", getAccountsList);
}

export const useCreateAccount = (coin) => {
    return useMutation(createAccount);
}