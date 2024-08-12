import toast from 'react-hot-toast';

const showToastError = error => toast.error(error.message);
export default showToastError;
