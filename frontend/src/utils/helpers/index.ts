import Swal from 'sweetalert2';

export const copy = (toCopy: string) => {
  navigator.clipboard.writeText(toCopy);

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Copied!',
    showConfirmButton: false,
    timer: 750,
  });
};
