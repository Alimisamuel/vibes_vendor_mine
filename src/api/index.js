import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
console.log(baseUrl);

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 120000,
});

apiClient.interceptors.request.use(
  function (config) {
    const userToken = JSON.parse(window.localStorage.getItem("vendorInfo"));

    console.log(userToken);

    config.headers.Authorization = `Bearer ${userToken}`;
    //   config.headers.apiKey = apiKey;
    // config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

const login = (email, password) => {
  const payload = {
    email,
    password,
  };
  return apiClient.post("/merchant/login", payload);
};
const team_login = (email, password) => {
  const payload = {
    email,
    password,
  };
  return apiClient.post("/merchant/team/login", payload);
};
const onboarding = (id, password, password_confirmation) => {
  const payload = {
    password,
    password_confirmation,
  };
  console.log(id);
  return apiClient.post(`/merchant/signup/${id}`, payload);
};

const onboardingDetails = (token) => {
  return apiClient.get(`/merchant/onboarding-details/?token=${token}`);
};

const forgotPassword = (email) => {
  return apiClient.post("/merchant/forgot-password", { email });
};

const resetPassword = (id, password, password_confirmation) => {
  const payload = {
    password,
    password_confirmation,
  };
  return apiClient.post(`/merchant/reset-password/${id}`, payload);
};

const getProflie = () => {
  return apiClient.get("/merchant/profile");
};

const changePassword = (password, password_confirmation) => {
  const payload = {
    password,
    password_confirmation,
  };
  return apiClient.post("/merchant/change-password", payload);
};

const addTeam = (name, email) => {
  const payload = {
    name,
    email,
  };
  return apiClient.post("/merchant/team", payload);
};

const deleteTeam = (id) => {
  return apiClient.delete(`/merchant/team/${id}`);
};

const createHouseRules = (title, description) => {
  const payload = {
    title,
    description,
  };
  return apiClient.post("/merchant/create/house-rule", payload);
};

const deleteHouseRules = (id) => {
  return apiClient.delete(`/merchant/delete/house-rule/${id}`);
};

const getMenuList = () => {
  return apiClient.get("/merchant/menu-classification");
};
const addMenuClassification = (name) => {
  return apiClient.post("/merchant/menu-classification", { name });
};

const editMenuClass = (id, name) =>{
  return apiClient.put(`/merchant/menu-classification/${id}`, {name})
}
const deleteMenuClass = (id, name) => {
  return apiClient.delete(`/merchant/menu-classification/${id}`, {name})
}
const deleteMenuItem = (id, name) => {
  return apiClient.delete(`/merchant/menu-item/${id}`, {name})
}

const getClassificationMenu = (id) =>{
  return apiClient.get(`/merchant/menu/${id}`)
}

const addMenuItem = (
  name,
  menu_classification_id,
  max_guest_serving,
  image,
  unit_price,
  description
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("menu_classification_id", menu_classification_id);
  formData.append("max_guest_serving", max_guest_serving);
  formData.append("image", image);
  formData.append("unit_price", unit_price);
  formData.append("description", description);
  return apiClient.post('/merchant/menu', formData)
};
const editMenuItem = (
  id,
  name,
  menu_classification_id,
  max_guest_serving,
  image,
  unit_price,
  description
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("menu_classification_id", menu_classification_id);
  formData.append("max_guest_serving", max_guest_serving);
  formData.append("image", image);
  formData.append("unit_price", unit_price);
  formData.append("description", description);
  return apiClient.post(`/merchant/menu-item/${id}?_method=PUT`, formData)
};



export {
  login,
  team_login,
  onboarding,
  onboardingDetails,
  forgotPassword,
  resetPassword,
  getProflie,
  changePassword,
  addTeam,
  deleteTeam,
  createHouseRules,
  deleteHouseRules,
  getMenuList,
  addMenuClassification,
  editMenuClass,
  deleteMenuClass,
  getClassificationMenu,
  addMenuItem,
  editMenuItem,
  deleteMenuItem
};
