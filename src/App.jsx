
import { Container } from './Components/Container.style';
import Checkbox from "./Components/Checkbox/Checkbox"
import { GlobalStyle } from './Components/Global.style';

let pakkeliste = [
"Pas",
"Flybillet",
"Penge (kreditkort)",
"Computer + oplader + headset",
"HDMI (muligvis kan I smide computeren på TV’et på værelset)",
"Mobil",
"Powerbank til opladning",
"USB Hub til hotellet - så kan I oplade flere ting på én gang",
"Sovemaske (også god på flyet)",
"Ørepropper (Las Palmas kan larme)",
"Gode vandresko",
"Toiletsager",
"Badetøj + briller + snorkel (det er fedt at snorkle hvis I har grejet)",
"Campingkit (Hvis I f.eks. har de fikse rejseglas og dimser er de guld værd på stranden)",
"Viskestykker + karklude",
"Læreromsorg! (I’m gonna need it 😀)"
]

function App() {
  
  return (
<>
<GlobalStyle />
<Container>
  <h1>Gran Canaria Pakkeliste</h1>
  {pakkeliste.map((item,index) => {
    console.log(item);
    return (
      <Checkbox key={index} item={item} />
    )
  })}
  
</Container>
</>
  );
}

export default App;
