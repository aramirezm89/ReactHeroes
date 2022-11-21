import Swal from "sweetalert2";

export const confirmDialog = () => {
 return Swal.fire({
    title: "¿Deseas realmente eliminar el registro?",
    text: "La operación es irreversible!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  })
};
