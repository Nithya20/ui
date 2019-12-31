users = [
    { "name": "Krish", "age": 30 },
    { "name": "Manoj", "age": 38 },
    { "name": "Ramesh", "age": 33 },
    { "name": "Suresh", "age": 34 },
    { "name": "Jayesh", "age": 40 }

]
if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify(users));
}

addUser = function (name, age) {
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
        users.push({ "name": name, "age": age });
        localStorage.setItem("users", JSON.stringify(users));
    }
}
removeUser = function (name) {
    //
}

incrementAge = function (name) {
    //
}
updateAge = function (name, age) {

}
getUsers = function () {
    //
}

getUsers = function () {
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
        return users;
    }
}

searchUsers = function (name) {
    ulist = getUsers();
    ulist = ulist.filter(e=>e.name.toUpperCase().includes(name.toUpperCase()));
    return ulist;
}


showUsers = function (usersData) {
    showusers = document.querySelector("#showusers");
    if (usersData.length > 0) {
        str = "<h5 class='text-muted'>User Details</h5>";
        for (user of usersData) {
            str += `<div class="card">
        <div class="card-body">
                ${user.name} - ${user.age}
        </div>
      </div>`
        }
    } else {
        str = "There no users to show....";
    }
    showusers.innerHTML = str;
}


searchstr = document.querySelector("#searchstr");

searchstr.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        searchResult = searchUsers(e.target.value);
        showUsers(searchResult);
    }
})

showUsers(getUsers());