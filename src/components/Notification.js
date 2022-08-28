import React from 'react';
import {Alert, stepClasses} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../store/ui-slice";

const Notification = ({type, message}) => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.ui.notification)
    const handleClose = () => {
        dispatch(uiActions.showNotification({
                open: false
            })
        )
    }
    return (
        <div>
            {notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}
        </div>
    );
};

export default Notification;