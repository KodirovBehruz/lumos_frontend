import {useDelivery} from "../useDelivery.tsx";
import {useFetch} from "../useFetch.tsx";
import {useEffect} from "react";
import {IQueryContract} from "../../../models/delivery/contracts/IQueryContract";

export const useGetProducts = ({ onSuccess, onError }: {
    onSuccess?: () => void
    onError?: () => void
}) => {
    const delivery = useDelivery()
    const {result, loading, execute} = useFetch({
        asyncFunction: (query: IQueryContract) =>
            delivery.CS.productsActions.getList(query),
        onSuccess,
        onError
    })

    useEffect(() => {
    }, [result])
    return { result, loading, execute }
}
