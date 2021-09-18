import FarmLogo from "../../assets/logo.png";
import Tomate from "../../assets/frutas/Tomate.png";
import Brocolis from "../../assets/frutas/Brócolis.png";
import Batata from "../../assets/frutas/Batata.png";
import Pepino from "../../assets/frutas/Pepino.png";
import Abobora from "../../assets/frutas/Abóbora.png";

const basketPage = {
  top: {
    title: "Detalhe da cesta",
  },
  details: {
    basketName: "Cesta de Verduras",
    logoImage: FarmLogo,
    farmName: "Fazenda Recanto da Felicidade",
    description:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda para a sua cozinha",
    price: "R$ 40,00",
    button: "Comprar",
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: Tomate,
      },
      {
        name: "Brócolis",
        image: Brocolis,
      },
      {
        name: "Batata",
        image: Batata,
      },
      {
        name: "Pepino",
        image: Pepino,
      },
      {
        name: "Abóbora",
        image: Abobora,
      },
    ],
  },
};

export default basketPage;
