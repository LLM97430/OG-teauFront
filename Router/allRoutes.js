import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Accueil", "pages/home.html"),
   new Route("/galerie", "Galerie", "/pages/galerie.html"),
   new Route("/carte", "Galerie", "/pages/carte.html"),
   new Route("/reservations", "Galerie", "/pages/reservations.html"),
   new Route("/account", "Galerie", "/pages/account.html"),
   new Route("/login", "Galerie", "/pages/login.html"),
];
   //Le titre s'affiche comme ceci : Route.titre - websitename
   export const websiteName = "Ô Gâteau";