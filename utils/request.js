// axios 公共配置
// 基地址

axios.defaults.baseURL='http://geek.itheima.net'

// 请求拦截器
axios.interceptors.request.use(function(config){
    const token=localStorage.getItem('token')
    token&&(config.headers.Authorization=`Bearer ${token}`)

    return config;
},function(error){
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function(response){
   const result=response.data
    return result;
},function(error){
    
    // ?.是可选链运算符
    if(error?.response?.status===401){
        alert('登陆状态过期，请重新登陆')
        localStorage.clear()
        location.href='../login/index.html'
    }
    return Promise.reject(error);
});
