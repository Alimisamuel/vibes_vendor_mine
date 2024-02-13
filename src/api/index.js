import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
console.log(baseUrl)

const apiClient = axios.create({
    baseURL: baseUrl,
    timeout: 120000,
  });

  apiClient.interceptors.request.use(
    function (config) {

      const userToken = JSON.parse(window.localStorage.getItem("userInfo"));
   
      config.headers.Authorization = `Bearer ${userToken?.access_token}`;
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


  const login = (email, password) =>{
    const payload ={
        email, password
    }
    return apiClient.post('/merchant/login', payload)
  }
  const team_login = (email, password) =>{
    const payload ={
        email, password
    }
    return apiClient.post('/merchant/team/login', payload)
  }
  const onboarding = (id, password, password_confirmation) =>{
    const payload = {
      password,
      password_confirmation
    }
    console.log(id)
    return apiClient.post(`/merchant/signup/${id}`, payload)
  }

  const onboardingDetails = (token) => {
    return apiClient.get(`/merchant/onboarding-details/?token=${token}`)
  } 

  const forgotPassword = (email) =>{
    return apiClient.post("/merchant/forgot-password", {email})
  }

  const resetPassword = (id, password, password_confirmation) =>{

    const payload = {
     password, password_confirmation
    }
    return apiClient.post(`/merchant/reset-password/${id}`, payload)
  }

  

  export {
    login,
    team_login,
    onboarding,
    onboardingDetails,
    forgotPassword,
    resetPassword,
  }