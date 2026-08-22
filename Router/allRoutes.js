import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Accueil", "pages/home.html"),
   new Route("/galerie", "Galerie", "/pages/galerie.html"),
   new Route("/carte", "Carte", "/pages/carte.html"),
   new Route("/reservations", "Mes réservations", "/pages/reservations.html"),
   new Route("/account", "Mon compte", "/pages/auth/account.html"),
   new Route("/login", "Connexion", "/pages/auth/login.html"),
   new Route("/signup", "Inscription", "/pages/auth/signup.html"),
   new Route("/editpassword", "Changement de mot de passe", "/pages/auth/editpassword.html"),
   new Route("/allresas", "Vos réservations", "/pages/reservations/allresas.html"),

];
   //Le titre s'affiche comme ceci : Route.titre - websitename
   export const websiteName = "Ô Gâteau";