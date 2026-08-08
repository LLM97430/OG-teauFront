import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Accueil", "/pages/home.html"),
   new Route("/Galerie", "Galerie", "/pages/galerie.html"),
   new Route("/Galerie", "Galerie", "/pages/carte.html"),
   new Route("/Galerie", "Galerie", "/pages/reservations.html"),
   new Route("/Galerie", "Galerie", "/pages/account.html"),
   new Route("/Galerie", "Galerie", "/pages/login.html"),
];
   //Le titre s'affiche comme ceci : Route.titre - websitename
   export const websiteName = "Ô Gâteau";