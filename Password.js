function verifierMotDePasse(){
    let mdp=
  document.getElementById("password").value;
    let confirmMdp=
  document.getElementById("Confirm_password").value;
    let message=document.getElementById("message");

    if (mdp!==confirmMdp){
        message.textContent="Les mots de passe ne correspondent pas.Réssaie.";

        document.getElementById("confirm_password").value="";
        return false;
    }
        return true;
}