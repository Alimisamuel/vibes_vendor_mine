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

const editProfile = (
  logo,
  images,
  tags,
  backPhoneNumber,
  instagramLink,
  maxGuestSize
) => {
  const formData = new FormData();

  formData.append("logo", logo);
  images.slice(0, 10).forEach((image, index) => {
    formData.append(`images[${index}]`, image);
  });
  tags.forEach((tag, index) => {
    formData.append(`tags[${index}]`, tag);
  });
  formData.append("back_phone_number", backPhoneNumber);
  formData.append("instagram_link", instagramLink);
  formData.append("max_guest_size", maxGuestSize);

  return apiClient.put(`/merchant/contact-details/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
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

const editMenuClass = (id, name) => {
  return apiClient.put(`/merchant/menu-classification/${id}`, { name });
};
const deleteMenuClass = (id, name) => {
  return apiClient.delete(`/merchant/menu-classification/${id}`, { name });
};
const deleteMenuItem = (id, name) => {
  return apiClient.delete(`/merchant/menu-item/${id}`, { name });
};

const getAllMenuItem = () => {
  return apiClient.get("/merchant/menu-items");
};

const getClassificationMenu = (id) => {
  return apiClient.get(`/merchant/menu/${id}`);
};

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
  return apiClient.post("/merchant/menu", formData);
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
  return apiClient.post(`/merchant/menu-item/${id}?_method=PUT`, formData);
};

const relistMenu = (id) => {
  return apiClient.put(`/merchant/relist/menu-item/${id}`);
};
const delistMenu = (id) => {
  return apiClient.put(`/merchant/delist/menu-item/${id}`);
};

const getFaq = () => {
  return apiClient.get(`/merchant/faqs`);
};
const updateTax = (value_added_tax, consumption_tax) => {
  const payload = {
    value_added_tax,
    consumption_tax,
  };
  return apiClient.put("/merchant/update/tax", payload);
};

const updateOpeningHours = (openings) => {
  return apiClient.put("/merchant/opening-hours", { openings });
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
  deleteMenuItem,
  editProfile,
  getAllMenuItem,
  relistMenu,
  delistMenu,
  getFaq,
  updateTax,
  updateOpeningHours,
};
