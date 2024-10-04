let sName = document.getElementById("sName");
let sUrl = document.getElementById("sUrl");
let ProductNameAlert = document.getElementById("ProductNameAlert");

let arr;
if (localStorage.getItem("products") != null) {
    arr = JSON.parse(localStorage.getItem("products"))
    show();
}
else {
    arr = [];
}

function add() {
    if (sName.value == "" || sUrl.value == "") {
        alert("Please fill all the fields");
        return;
    }
    if (validate() == true) {
        ProductNameAlert.style.display = "none";
        sName.classList.remove("is-invalid");
        let arrobj = {
            name: sName.value,
            url: sUrl.value
        }
        // console.log(arrobj);
        arr.push(arrobj);
        localStorage.setItem("products", JSON.stringify(arr));
        show();
        clear();
        // console.log(arr);
    }
}

function clear() {
    sName.value = "";
    sUrl.value = "";
}

function show() {
    let data = '';
    for (let i = 0; i < arr.length; i++) {
        data += `
        <tr>
            <td>${arr[i].name}</td>
            <td>
                <button onclick="VisitLink(${i})" class="btn btn-outline-info"> Visit</button>
            </td>
            <td>
                <button onclick="DeleteLink(${i})" class="btn btn-outline-danger"> Delete</button>
            </td>
        </tr>`;
    }
    document.getElementById("bodydata").innerHTML = data;
}

function VisitLink(index) {
    window.open(arr[index].url, '_blank');
}

function DeleteLink(index) {
    arr.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(arr));
    show();
}
ProductNameAlert.style.display = "none";

function validate() {
    if (sName.value.length == 0 || sUrl.value.length == 0) {
        alert("Name is required");
        return false;
    }
    let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/
    if (!reg.test(sUrl.value)) {
        sName.classList.add("is-invalid")
        ProductNameAlert.style.display = "block";
        return false;
    }
    else {
        sName.classList.remove("is-invalid")
        ProductNameAlert.style.display = "none";
        return true;
    }


}

function VisitLink(index) {
    window.open(arr[index].url, '_blank');
}