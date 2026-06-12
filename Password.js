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
lucide.createIcons();

function togglePassword(fieldId, span) {
    const input = document.getElementById(fieldId);
    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";

    // Remplacer par SVG direct
    span.innerHTML = isHidden
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
           </svg>`;
}

lucide.createIcons();

// Toggle mot de passe
function togglePassword(fieldId, span) {
    const input = document.getElementById(fieldId);
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    span.innerHTML = isHidden
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
           </svg>`;
}

// Switch entre client et artisan
function switchType(type) {
    const metierGroup = document.getElementById('metier-group');
    const typeCompte = document.getElementById('type_compte');
    const metierSelect = document.getElementById('metier');
    const btns = document.querySelectorAll('.type-btn');

    // Mettre à jour les boutons actifs
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (type === 'artisan') {
        metierGroup.style.display = 'block';
        metierSelect.required = true;
        typeCompte.value = 'artisan';
    } else {
        metierGroup.style.display = 'none';
        metierSelect.required = false;
        typeCompte.value = 'client';
    }
}