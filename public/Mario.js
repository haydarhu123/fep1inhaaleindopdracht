const API_URL = `https://www.amiiboapi.com/api/amiibo`;
    fetch(API_URL)
    .then(
        res => {
          res.json().then(
            data => {
              console.log(data.amiibo);
              
              if (data.amiibo.length > 0) {

                var bt = document.getElementById("alledata").cloneNode();
                var temp = "";
                data.amiibo.forEach((itemData) => {
                  temp += "<tr>";
                  temp += '<td><img src="'+itemData.image+'"></td>';
                  temp += "<td>" + itemData.amiiboSeries + "</td>";
                  temp += "<td>" + itemData.character + "</td>";
                  temp += '<td><button onclick ="openInformatie(\''+itemData.image+'\')" ">Meer informatie</td></tr>';

                  temp += '<tr class =popup id="'+itemData.image+'" >';
                  temp += '<td>foto: <img src="'+itemData.image+'"></td>';
                  temp += "<td>amibo serie: " + itemData.amiiboSeries + "</td>";
                  temp += "<td>karakter:" + itemData.character + "</td>";
                  temp += "<td>game serie: " + itemData.gameSeries + "</td>";
                  temp += "<td>releasedatum Europa: " + itemData.release.eu + "</td>";
                  temp += "<td>type: " + itemData.type + "</td>";
                  
                  temp += '<td><button onclick =" closeInformatie(\''+itemData.image+'\')" ">Sluiten</td></tr>';

                //   document.getElementById(itemData.image).addEventListener("click", openInformatie(itemData.image));
                });
                document.getElementById('data').innerHTML = temp;
                
              }
            }
          )
        }
      )

      function openInformatie(image){

  const informatie = document.getElementById(image);
  if(informatie !== null){
      console.log("clicked")
    informatie.style.display = "block";
  }

}
     
function closeInformatie(image){
        const toelichting = document.getElementById(image);

        toelichting.style.display = "none";
    }
