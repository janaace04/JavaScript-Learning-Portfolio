let username;

document.getElementById("b1").onclick = function(){
    username = document.getElementById("I1").value;
    document.getElementById("myh2").textContent = `Hi ${username}`;
    console.log(username);
}