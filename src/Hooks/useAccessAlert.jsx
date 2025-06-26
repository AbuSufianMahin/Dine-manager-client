import React from 'react';
import Swal from "sweetalert2";
const useAccessAlert = () => {

    const showAccessAlert = (data, customMessage) => {
        if (data.errorCode === 401) {
            Swal.fire({
                icon: 'error',
                title: data.message,
                text: customMessage || "Unauthorized operation detected",
                confirmButtonText: 'Okay'
            })
        }
        else if (data.errorCode === 403) {
            Swal.fire({
                icon: 'error',
                title: data.message,
                text: customMessage || "You do not have permission to access this resource",
                confirmButtonText: 'Okay'
            })
        }
    }

    return  showAccessAlert;
}
export default useAccessAlert;