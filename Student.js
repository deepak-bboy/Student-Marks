var rIndex,
        table = document.getElementById("table");

    var addStudentDetails = () => {
    var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5),
    cell7 = newRow.insertCell(6),
    cell8 = newRow.insertCell(7),
    studentName =document.getElementById("studentName").value,
    studentRollNumber =document.getElementById("studentRollNumber").value,
    tamilMark =document.getElementById("tamilMark").value,
    englishMark =document.getElementById("englishMark").value,
    mathematicsMark =document.getElementById("mathematicsMark").value,
    physicsMark =document.getElementById("physicsMark").value,
    chemistryMark =document.getElementById("chemistryMark").value,
    biologyMark =document.getElementById("biologyMark").value;

    cell1.innerHTML = studentName;
    cell2.innerHTML = studentRollNumber;
    cell3.innerHTML = tamilMark;
    cell4.innerHTML = englishMark;
    cell5.innerHTML = mathematicsMark;
    cell6.innerHTML = physicsMark;
    cell7.innerHTML = chemistryMark;
    cell8.innerHTML = biologyMark;

    getSelectedRow();
}

var getSelectedRow = () => {
  for(var i = 1; i<table.rows.length; i++){
    table.rows[i].onclick = function() {
      rIndex = this.rowIndex;
      // console.log(rIndex);
      document.getElementById("studentName").value = this.cells[0].innerHTML;
      document.getElementById("studentRollNumber").value = this.cells[1].innerHTML;
      document.getElementById("tamilMark").value = this.cells[2].innerHTML;
      document.getElementById("englishMark").value = this.cells[3].innerHTML;
      document.getElementById("mathematicsMark").value = this.cells[4].innerHTML;
      document.getElementById("physicsMark").value = this.cells[5].innerHTML;
      document.getElementById("chemistryMark").value = this.cells[6].innerHTML;
      document.getElementById("biologyMark").value = this.cells[7].innerHTML;
    };
  }
}
getSelectedRow();

var editValues = () => {

  var studentName = document.getElementById("studentName").value,
      studentRollNumber = document.getElementById("studentRollNumber").value,
      tamilMark = document.getElementById("tamilMark").value,
      englishMark = document.getElementById("englishMark").value,
      mathematicsMark = document.getElementById("mathematicsMark").value,
      physicsMark = document.getElementById("physicsMark").value,
      chemistryMark = document.getElementById("chemistryMark").value,
      biologyMark = document.getElementById("biologyMark").value;

  table.rows[rIndex].cells[0].innerHTML = studentName;
  table.rows[rIndex].cells[1].innerHTML = studentRollNumber;
  table.rows[rIndex].cells[2].innerHTML = tamilMark;
  table.rows[rIndex].cells[3].innerHTML = englishMark;
  table.rows[rIndex].cells[4].innerHTML = mathematicsMark;
  table.rows[rIndex].cells[5].innerHTML = physicsMark;
  table.rows[rIndex].cells[6].innerHTML = chemistryMark;
  table.rows[rIndex].cells[7].innerHTML = biologyMark;
}

var deleteValues = () => {
  table.deleteRow(rIndex);
}