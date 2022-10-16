import "bootstrap/dist/css/bootstrap.css";
import Detailhuile from "./Component/Detailhuile";
//import {useState} from 'react';
function App() {
  const parfums = [
    {
      id: 1,
      genre: "EXTRAIT CO2",
      titre: "  GRENADE BIO",
      pays: "Punica granatum -Turque",
      description:
        "Cette huile extraite par CO2 supercritique est particulièrement concentrée en acide punicique, connu pour ses propriétés apaisantes puissantes. C'est un actif précieux pour préparer des soins pour peaux sensibles et des soins anti-âge. ",
      contenance: ["100 ml – 3,96 €", "260 ml – 6,95 €", "1 L – 19,95 €"],
      quantite: [1, 2, 3, 4, 5],
      image: "grenade.png",
      prix: "4,95 €"
    },
    {
      id: 2,
      genre: "HUILE VEGETALE",
      titre: " ABRICOT",
      pays: "Prunus armeniaca-Pressage Maroc",
      description:
        "Extraite des noyaux d'abricot, cette huile est connue pour ses effets anti-âge et assouplissant. Elle donne une bonne mine et constitue un excellent ingrédient pour préparer des mélanges d'huiles essentielles ou des huiles de massage.",
      contenance: ["100 ml – 3,96 €", "260 ml – 6,95 €", "1 L – 19,95 €"],
      quantite: [1, 2, 3, 4, 5],
      image: "abricot.png",
      prix: "3,95 €"
    }
  ];

  return (
    <div>
      <Detailhuile data={parfums} />
    </div>
  );
}

export default App;
