import React from 'react';

import { useNavigate } from "react-router";
import Swal from "sweetalert2";


const useAccessAlert = () => {

    const navigate = useNavigate();

    const showAccessAlert = (data) => {
        if (data.errorCode === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Unauthorized',
                text: data.message,
                confirmButtonText: 'Okay'
            })
            navigate(-1);
        }
        else if (data.errorCode === 403) {
            Swal.fire({
                icon: 'error',
                title: data.message,
                text: "You do not have permission to access this resource",
                confirmButtonText: 'Okay'
            })
            navigate(-1);
        }
    }
    
    return  showAccessAlert;

}
export default useAccessAlert;