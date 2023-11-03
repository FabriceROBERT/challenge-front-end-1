// fetch api github
fetch("https://api.github.com/users/FabriceROBERT") // Remplacez "votreNomUtilisateur" par le nom d'utilisateur GitHub que vous souhaitez interroger.
  .then((response) => {
    if (!response.ok) {
      throw new Error("Réponse du serveur non OK");
    }
    return response.json();
  })
  .then((data) => {
    // Obtenez l'URL de l'image de profil de l'utilisateur
    console.log(data);
    const imageUrl = data.avatar_url;
    const nom = data.name;

    // Créez une balise h1 et attribuez-lui l'URL de l'<h1></image>

    const h1 = document.createElement("h1");
    h1.textContent = nom;
    const nomTitre = document.getElementById("nomTitre");
    nomTitre.appendChild(h1);

    // Créez une balise d'image et attribuez-lui l'URL de l'<image></image>
    const img = document.createElement("img");
    img.src = imageUrl;

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.appendChild(img);
  })
  .catch((error) => {
    console.error(error);
  });
