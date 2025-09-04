async function login(){
  const u = document.getElementById('login-user').value;
  const p = document.getElementById('login-pass').value;

  try {
    const res = await fetch("https://your-backend.onrender.com/api/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({username: u, password: p})
    });

    if(res.ok){
      const data = await res.json();
      sessionStorage.setItem("token", data.token);
      alert("Login successful! Ready to use Invoice Generator.");
    } else {
      document.getElementById("login-err").style.display = "block";
    }
  } catch (err) {
    alert("Server not reachable");
  }
}