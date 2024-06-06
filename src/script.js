const data = [
    { name: "ann", 
      room: "19", 
      pic: "", 
      teln: "817001", 
      descript: "ann is a manager" },

    { name: "bob", 
        room: "24", 
        pic: "", 
        teln: "", 
        descript: "bob is a cat" },

    { name: "cat",
         room: "", 
         pic: "https://maaiyedun.blob.core.windows.net/assignment1/car.jpg?sp=r&st=2024-06-06T15:40:09Z&se=2024-06-06T23:40:09Z&spr=https&sv=2022-11-02&sr=b&sig=paQ9gq2%2FPfVuIowert3bcxhWDTJCDXa%2FibMcrHJE0Bk%3D", 
         teln: "817005", 
         descript: "cat is also a cat" },

    { name: "dan", 
        room: "108", 
        pic: "https://maaiyedun.blob.core.windows.net/assignment1/dan.jpg?sp=r&st=2024-06-06T16:03:52Z&se=2024-06-07T00:03:52Z&spr=https&sv=2022-11-02&sr=b&sig=5EVXIpn9AQs3bWaJ33oGL%2FKJu5Zb38AY2OuEWJ7%2BaSk%3D", 
        teln: "816005", 
        descript: "" },

    { name: "eve", 
        room: "95", 
        pic: "", 
        teln: "0", 
        descript: "eve is a computer" },


    { name: "finn", 
        room: "42", 
        pic: "", 
        teln: "", 
        descript: "finn is no one important" },
   
        { name: "gary", 
        room: "", 
        pic: "", 
        teln: "888001", 
        descript: "gary can fly" },
  
        { name: "hank", 
        room: "80", 
        pic: "", 
        teln: "901901", 
        descript: "hank can not fly" },
   
        { name: "ima", 
        room: "60", 
        pic: "jpg/ima.jpg", 
        teln: "202020", 
        descript: "" },
    
        { name: "jan",
         room: "61", 
         pic: "", 
         teln: "", 
         descript: "president jan is amazing" },
    { name: "ken", 
        room: "", 
        pic: "", 
        teln: "817005", 
        descript: "" },

    { name: "lem", 
        room: "5", 
        pic: "https://maaiyedun.blob.core.windows.net/assignment1/lem.jpg?sp=r&st=2024-06-06T16:04:24Z&se=2024-06-07T00:04:24Z&spr=https&sv=2022-11-02&sr=b&sig=KWEOAf8SC6cS8p0uxdJbCR2qIJMBjYRgorcqttLiZlk%3D", 
        teln: "818000", 
        descript: "no way lem can fly" }
    ];

        function lookupRoom() {
            const room = document.getElementById("room").value;
            const result = data.filter(person => person.room === room);
            displayResult(result);
        }
        
        function lookupTeln() {
            const teln = document.getElementById("teln").value;
            const result = data.filter(person => person.teln === teln);
            displayResult(result);
        }
        
        function updateDescription() {
            const teln = document.getElementById("telnUpdate").value;
            const newDescript = document.getElementById("newDescript").value;
            const person = data.find(person => person.teln === teln);
            if (person) {
                person.descript = newDescript;
                displayResult([person]);
            } else {
                document.getElementById("result").innerText = "No person found with the given telephone number.";
            }
        }
        
        function displayResult(result) {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";
            if (result.length === 0) {
                resultDiv.innerText = "No matching information found.";
            } else {
                result.forEach(person => {
                    const personDiv = document.createElement("div");
                    personDiv.classList.add("person");
                    personDiv.innerHTML = `
                        <h2>${person.name}</h2>
                        <p>Room: ${person.room}</p>
                        <p>Telephone: ${person.teln}</p>
                        <p>Description: ${person.descript}</p>
                        ${person.pic ? `<img src="${person.pic}" alt="${person.name}'s picture">` : ""}
                    `;
                    resultDiv.appendChild(personDiv);
                });
            }
        }




