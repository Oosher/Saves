function generateTable(){
    var row =document.getElementById("row").value,col=document.getElementById("col").value;
  document.write(col);
document.write('<table border="2">');
    for (let i = 0; i < row ; i++) {
        document.write('<tr>');
        for (let i = 0; i < col ; i++){
        document.write('<td>Happy</td>');   
        }
      document.write('</tr>');
    }
    document.write('</table>');
}