import {useDelivery} from "../useDelivery";
import {useFetch} from "../useFetch";

export const useGetFaq = ({ onSuccess, onError }: {
    onSuccess?: () => void
    onError?: () => void
}) => {
    const delivery = useDelivery()
    const {result, loading, execute} = useFetch({
        asyncFunction: delivery.CS.faqActions.getList,
        onSuccess,
        onError
    })
    return { result, loading, execute }
}