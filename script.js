//your JS code here. If required.
 function delay(seconds) {
      return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
      });
    }

    const promises = [
      delay(Math.floor(Math.random() * 3) + 1),
      delay(Math.floor(Math.random() * 3) + 1),
      delay(Math.floor(Math.random() * 3) + 1)
    ];

    Promise.all(promises)
      .then(() => {
        const loadingRow = document.getElementById("loading").parentNode;
        loadingRow.parentNode.removeChild(loadingRow);

        const tbody = document.getElementById("output");
        
        promises.forEach((promise, index) => {
          const newRow = document.createElement("tr");
          const operationCell = document.createElement("td");
          operationCell.textContent = `Promise ${index + 1}`;
          const timeCell = document.createElement("td");
          //console.log();
          timeCell.textContent = Math.floor(Math.random()*3)+1+" s";
          
          newRow.appendChild(operationCell);
          newRow.appendChild(timeCell);
          
          tbody.appendChild(newRow);
        });
      })
      .catch(error => {
        console.error(error);
      });