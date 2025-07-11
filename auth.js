document.addEventListener("DOMContentLoaded", () => {
  const setStatus = (msg, color) => {
    const status = document.getElementById('status');
    status.textContent = msg;
    status.style.color = color;
  };

  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

 

  const register = async(e)=> {
  // async function register(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
      const userCreation = await auth.createUserWithEmailAndPassword(email, password);
      await db.ref("users/" + userCreation.user.uid).set({
        email: email,
        lastUpdated: new Date().toISOString()
      });
      setStatus("Registered successfully!", "green");
      setTimeout(() => {
        registerForm.reset();
      }, 1700);
    } catch (err) {
      setStatus(err.message, "red");
    }
  }
   const login = async(e)=> {
  // async function login(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      const logging = await auth.signInWithEmailAndPassword(email, password);
      setStatus("Logged in successfully!", "green");
      setTimeout(() => {
        loginForm.reset();
      }, 1700);
      window.location.href = "updatePass.html";
    } catch (err) {
      setStatus(err.message, "red");
    }
  }

   registerForm.addEventListener('submit', register);
  loginForm.addEventListener('submit', login);
});
