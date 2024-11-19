const skills = {
 "Microsoft Software":  {
  logo: "faMicrosoft",
  items: [
   { name: "Word", note: 4 },
   { name: "Excel", note: 4 },
   { name: "Access", note: 4 },
   { name: "Powerpoint", note: 4 },
  ],
 },
 "Front-End": {
  logo: "faLaptopCode",
  items: [
   { name: "HTML", note: 4 },
   { name: "CSS/SASS", note: 4 },
   { name: "JavaScript", note: 3 },
   { name: "Git", note: 2 },
   { name: "JSON", note: 3 },
   { name: "jQuery", note: 3 },
   { name: "React", note: 2 },
  ],
 },
 "Back-End": {
  logo: "faServer",
  items: [
   { name: "PHP", note: 4 },
   { name: "node.js", note: 3 },
   { name: "SQL", note: 4 },
  ],
 },
 "Media": {
  logo: "faPhotoVideo",
  items: [
   { name: "Photoshop", note: 3 },
   { name: "Vegas Video", note: 4 },
   { name: "Blender", note: 1 },
  ],
 },
 "Kielet": {
  logo: "faLanguage",
  items: [
   { name: "Ranska", note: 5 },
   { name: "Suomi", note: 3 },
   { name: "Englanti", note: 2 },
  ],
 },
};

let explanations = {
 "Miksi en ole merkinnyt täydellistä pistettä ?": [
   "Tietotekniikan alalla oppiminen on jatkuva prosessi. Teknologiat, standardit ja parhaat käytännöt kehittyvät nopeasti, mikä vaatii taitojeni päivittämistä säännöllisesti. Vaikka hallitsen vankasti ne taidot ja työkalut, joita käytän, on tärkeää ymmärtää, että erinomaisuus ei ole päämäärä, vaan jatkuva matka.",
   "En siis merkitse 5/5 pistettä joillakin alueilla, koska haluan kuvata tämän todellisuuden. Sitoutumiseni on kuunnella teknologian kehitystä ja varmistaa, että työskentelen aina uusimpien standardien mukaisesti, enkä koskaan tyydy paikalleen jääneeseen tietoon. Tämä valinta osoittaa haluni oppia jatkuvasti ja parantaa taitojani, samalla kun olen tietoinen siitä, että innovaatiot eivät koskaan lopu.",
   "Tämä valinta antaa myös mahdollisuuden säilyttää rehellisen ja läpinäkyvän lähestymistavan, korostaen, että verkkokehityksen kaltaisessa dynaamisessa ympäristössä nöyryys ja uteliaisuus ovat elintärkeitä, jotta pystytään pysymään ajan tasalla ja tarjoamaan parhaat ratkaisut."
 ],
 "Taitojen vahvistamisen merkitys työpaikalla tai koulutuksessa": [
   "Teorian ja jatkuvan koulutuksen lisäksi on minulle erittäin tärkeää vahvistaa taitojani todellisessa ammatillisessa ympäristössä, joko työpaikallani tai koulutustilaisuuksissa. Vasta silloin, kun voin soveltaa taitojani käytännössä päivittäin, voin todella hiouttaa osaamistani. Työskentely todellisessa tilanteessa ei ainoastaan vahvista oppimaani, vaan auttaa myös kohtaamaan konkreettisia haasteita ja sopeuttamaan käytäntöjäni kunkin projektin erityisvaatimuksiin. Tämä käytännön oppiminen on olennaista, jotta voin kehittyä ja varmistaa, että taitoni pysyvät ajankohtaisina ja tehokkaina."
 ]
};

export {skills, explanations}