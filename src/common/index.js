const backendDomain = import.meta.env.VITE_BACKEND_URL;

const SummaryAPI = {
  signUp: {
    url: `${backendDomain}api/signup`,
    method: "post",
  },
  logIn: {
    url: `${backendDomain}/api/login`,
    method: "post",
  },
  currentUser: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  logoutUser: {
    url: `${backendDomain}/api/userLogout`,
    method: "get",
  },
  editUser: {
    url: `${backendDomain}/api/edit-user`,
    method: "post",
  },
  changePassword: {
    url: `${backendDomain}/api/change-password`,
    method: "post",
  },
  verifyUser: {
    url: `${backendDomain}/api/verify`,
    method: "get",
  },
  verifyEmail: {
    url: `${backendDomain}/api/verify-email`,
    method: "post",
  },
  forgotPassword: {
    url: `${backendDomain}/api/forgot-password`,
    method: "post",
  },
  resetPassword: {
    url: `${backendDomain}/api/reset-password/:token`,
    method: "post",
  },
};

export default SummaryAPI;
