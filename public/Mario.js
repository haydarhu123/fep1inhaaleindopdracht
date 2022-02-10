const API_URL = `https://www.amiiboapi.com/api/amiibo`;
    fetch(API_URL)
    .then(
        res => {
          res.json().then(
            data => {
             displayData(data.amiibo)
             const searchBar = document.getElementById('searchBar');

// hier word alles omgezet naar kleine letters wat de gebruiker intoetst.
             searchBar.addEventListener('keyup', (e) => {
                 const searchString = e.target.value.toLowerCase();
                 
                 // hier filter ik op karakter, gameserie en amiboserie
                 const filteredCharactersandseries = data.amiibo.filter((c) => {
                     return (
                       // hier worden de karakters en de series die worden opgehaald ook omgezet naar lowercase dus kleine letters.
                         c.character.toLowerCase().includes(searchString) ||
                         c.amiiboSeries.toLowerCase().includes(searchString) ||
                         c.gameSeries.toLowerCase().includes(searchString)
                     );
                 });
                 // hier word worden de gefilterde keuzes weergeven.
                 displayData(filteredCharactersandseries);
             });
            }
          )
        }
      )

// voor het openen en sluiten van de pop-up geef ik de image mee als parameter, 
// dit is het enige wat bij iedere object binnen de api verschillend is overal.

// functie voor het openen van de pop-up zodra er geklikt wordt op de button 'Meer Informatie'.
function openInformatie(image){
  const informatie = document.getElementById(image);
    informatie.style.display = "block";
}
     
// functie voor het sluiteb van de pop-up zodra er geklikt wordt op de button 'Sluiten' binnen de pop-up.
function closeInformatie(image){
        const toelichting = document.getElementById(image);
        toelichting.style.display = "none";
    }

   
// dit is een funcie die alle data uit de api toont.
function displayData(data){
  console.log(data);
              
  if (data.length > 0) {

    var temp = "";
    data.forEach((itemData) => {
      temp += "<tr>";
      temp += '<td><img src="'+itemData.image+'"></td>';
      temp += "<td>" + itemData.amiiboSeries + "</td>";
      temp += "<td>" + itemData.character + "</td>";
      temp += '<td><button onclick ="openInformatie(\''+itemData.image+'\')" ">Meer informatie</td></tr>';

      temp += '<tr class =popup id="'+itemData.image+'" >';
      temp += '<td>Foto: <img src="'+itemData.image+'"></td>';
      temp += "<td>Amibo serie: " + itemData.amiiboSeries + "</td>";
      temp += "<td>Karakter:" + itemData.character + "</td>";
      temp += "<td>Game serie: " + itemData.gameSeries + "</td>";
      temp += "<td>Releasedatum Europa: " + itemData.release.eu + "</td>";
      temp += "<td>Type: " + itemData.type + "</td>";
      
      temp += '<td><button onclick =" closeInformatie(\''+itemData.image+'\')" ">Sluiten</td></tr>';


    });
    document.getElementById('data').innerHTML = temp;
    
  }
}