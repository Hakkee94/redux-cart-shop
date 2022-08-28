import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchData = () => {
    return async (dispatch) => {

        const fetchHandler =  () => {
            const data = window.localStorage.getItem('data') && JSON.parse(window.localStorage.getItem('data'))
            return data
        }
        try {
            const cartData = await fetchHandler()
            dispatch(cartActions.replaceData(cartData))
        } catch (err) {
            dispatch(uiActions).showNotification({
                open: true,
                message: 'Sending Request failed',
                type: 'error'
            })
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: 'Sending Request',
                type: 'warning'
            })
        )

        try {
            window.localStorage.setItem('data', JSON.stringify(cart))
        } catch (err) {
            dispatch(uiActions).showNotification({
                open: true,
                message: 'Sending Request failed',
                type: 'error'
            })
        }
    }
}