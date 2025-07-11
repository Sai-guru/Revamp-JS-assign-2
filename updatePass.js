
auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html"; 
  }
});
const setStatus = async(msg, color)=>{
  const status = document.getElementById('status');
  status.textContent = msg;
  status.style.color = color;
}

const updatePassword = async() =>{
  const user = auth.currentUser;
  const newPassword = document.getElementById('newPassword').value;

  if (!newPassword) {
    setStatus("Enter a new password.", "red");
    return;
  }

  try {
    await user.updatePassword(newPassword);
    await db.ref("users/" + user.uid).update({
      password: newPassword,
      lastUpdated: new Date().toISOString()
    });
    setStatus("Password updated successfully.", "green");
    document.getElementById('newPassword').value = "";

  } catch (error) {
    setStatus(error.message, "red");
  }
}
