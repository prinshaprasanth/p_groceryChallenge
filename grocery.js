
function makeTable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var groList = response;
            var output = "";
            
            for (var i = 0; i < groList.length; i++) {
                output += `
               
                <tr>
                <td>${groList[i].SNo}</td>
                <td>${groList[i].Name}</td>
                <td>${groList[i].Quantity}</td>
                <td>${groList[i].Unit}</td>
                <td>${groList[i].Department}</td>
                <td>${groList[i].Notes}</td>
              </tr>`;
            }
            var head = `<thead>
            <tr>
                <th>
                    <h1>SNo</h1>
                </th>
                <th>
                    <h1>Name</h1>
                </th>
                <th>
                    <h1>Quantity</h1>
                </th>
                <th>
                    <h1>Unit</h1>
                </th>
                <th>
                    <h1>Department</h1>
                </th>
                <th>
                    <h1>Notes</h1>
                </th>
            </tr>
        </thead>`;
            document.getElementById("cont").innerHTML = head;
            document.getElementsByClassName("table-inner")[0].innerHTML = output;
        }
    };
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}