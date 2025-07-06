import {useDelivery} from "../useDelivery";
import {useFetch} from "../useFetch";
import {useEffect} from "react";

export const useGetDiscountProducts = ({ onSuccess, onError}: {
    onSuccess?: () => void
    onError?: () => void
}) => {
    const delivery = useDelivery()
    const {result, loading, execute} = useFetch({
        asyncFunction: delivery.CS.productsActions.getDiscountList,
        onSuccess,
        onError
    })

    useEffect(() => {
    }, [result])
    return { result, loading, execute }
}