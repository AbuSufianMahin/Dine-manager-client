import Swal from "sweetalert2";

const errorAlert = (message) => {
    return Swal.fire({
        icon: "error",
        title: "Something Went wrong",
        text: message,
        confirmButtonText: "Retry",

    });
}

const successAlert = (title, message) => {
    return Swal.fire({
        icon: "success",
        title: title,
        text: message,
        confirmButtonText: "Ok",

    });
}



export { errorAlert, successAlert };