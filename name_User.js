function name_User() {
    let name_user = localStorage.getItem("nameUser");
    document.getElementById("nameUser").innerHTML = name_user;
    if (name_user !== null){
        document.getElementById("logout").hidden = false;
        document.getElementById("icon").hidden = true;
    }
}
name_User();
function logOut() {
    localStorage.removeItem("nameUser")
    document.getElementById("nameUser").innerHTML = "";
    document.getElementById("logout").hidden = true;
    document.getElementById("icon").hidden = false;
}
