import {toast} from "react-toastify";

const ShowToast = (type, message) => {
    switch (type) {
        case 0:
            toast.info(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        case 1:
            toast.success(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break
        case 2:
            toast.warning(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,

            });
            break;
        case 3:
            toast.error(message, {
                position: 'top-center',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true
            });
            break;
        default:
            break;

    }
}

export default ShowToast