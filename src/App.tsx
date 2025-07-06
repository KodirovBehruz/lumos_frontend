import {AppRouter} from "./router/AppRouter";
import {MessagesProvider} from "./hooks/useMessages";
import {DeliveryProvider} from "./hooks/API/useDelivery";


export const App = () => {
    return (
        <DeliveryProvider>
            <MessagesProvider>
                <AppRouter />
            </MessagesProvider>
        </DeliveryProvider>
    )
}
