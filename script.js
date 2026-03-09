let seats = [
  ["Empty", "Empty", "Empty", "Empty"],
  ["Empty", "Empty", "Empty", "Empty"],
  ["Empty", "Empty", "Empty", "Empty"],
  ["Empty", "Empty", "Empty", "Empty"],
];

let selectedRow = -1;
let selectedCol = -1;
let mode = "assign";

let display = document.getElementById("grid");
function drawCart() {
  let html = "<table>";

  for (let i = 0; i < seats.length; i++) {
    html += "<tr>";
    for (let j = 0; j < seats[i].length; j++) {
        let cellClass = ""
        if(seats[i][j] == "Empty"){
            cellClass = "empty"
        }else{
            cellClass = "filled"
        }

      if (selectedRow == i && selectedCol == j) {
        html += `<td class="selected ${cellClass}" onclick = "cellClick(this, ${i}, ${j})">${seats[i][j]}</td>`;
      } else {
        html += `<td class="${cellClass}"  onclick = "cellClick(this, ${i}, ${j})">${seats[i][j]}</td>`;
      }
    }

    html += "</tr>";
  }

  html += "</table>";
  display.innerHTML = html;
}
drawCart();

function cellClick(cell, row, col) {
  selectedRow = row;
  selectedCol = col;

  if (mode == "assign") {
        let name = document.getElementById("studentName").value;
    if (name !== "") {
        seats[selectedRow][selectedCol] = name;
        document.getElementById("message").innerHTML = `<p>✅ Assigned</p>`;
    }else{
        document.getElementById("message").innerHTML = `<p>⚠️ Please type something</p>`;
    }
}
//remove the name/replace with empty
    else if(mode === "remove"){
        seats[row][col] = "Empty";
        document.getElementById("message").innerHTML = `<p>🗑️ ${name} Removed </p>`;
    }
    drawCart();
  }

  function assignMode(){
        mode = "assign";
  }

    function removeMode(){
        mode = "remove";
}

function resetChart(){
    selectedRow = -1;
    selectedCol = -1;
    mode = "assign";
    drawCart();
}