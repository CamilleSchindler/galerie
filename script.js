
// Fonction permettant de créer un overlay (une div semi-transparente qui recouvre toute la page web)
function setOverlay(number){

    // Création, paramétrage et insertion dans le DOM de l'overlay
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.querySelector('body').append(overlay);

    // Mise en place d'un écouteur d'évènement sur l'overlay, permettant de supprimer ce dernier en cliquant dessus
    overlay.addEventListener('click', function(){
        // removeOverlay() est la fonction créée plus bas dans le fichier pour supprimer l'overlay
        removeOverlay();
    });

    // Création, paramétrage et insertion dans l'overlay de l'image
    let image = document.createElement('img');
    // On sait quelle image charger car le paramètre 'number' contient le numéro de la vignette cliquée.
    image.setAttribute('src', 'images/'+ number +'.jpg');
    overlay.append(image);


    // Mise en place d'un écouteur d'évènement sur l'image pour empêcher la propagation du 'click' à l'overlay (empêcher l'overlay d'être supprimé en cas de clique sur l'image)
    image.addEventListener('click', function(e){
        e.stopPropagation();
    });


    // Création, paramétrage et insertion dans l'overlay du bouton de fermeture (croix).
    let closeButton = document.createElement('div');
    closeButton.classList.add('close');
    closeButton.textContent = 'X';
    overlay.append(closeButton);

    // NOTE : pas besoin de mettre un écouteur d'évènement sur la croix pour supprimer l'overlay, celui ci propagera déjà naturellement le clique à l'overlay qui lui même a déjà un tel écouteur d'évènement.

}

// Fonction permettant de supprimer l'overlay (et tout ce qu'il contient)
function removeOverlay(){
    document.querySelector('.overlay').parentElement.removeChild(document.querySelector('.overlay'));
}


// Mise en place d'un écouteur d'évènement sur toutes les vignettes dans la div principale de la galerie
document.querySelectorAll('.images img').forEach(function(image){

    image.addEventListener('click', function(){
        // image.id contient le numéro de la vignette cliquée (pour savoir quelle grande image doit être chargée)
        setOverlay(image.id);
    });
});

