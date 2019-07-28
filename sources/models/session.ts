function status(){
    return Promise.resolve(true);
}

function login(user, pass){
    return Promise.resolve({
        name: "admin",
        role: "admin",
        email: "admin@webix.com"
    });
}

function logout(){
    return Promise.resolve();
}

export default {
    status, login, logout
}