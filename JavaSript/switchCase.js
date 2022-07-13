 
 
 
 function passCheck() {
            var password = document.myForm.pass.value;
switch (password){
case "1234":
    document.location.href="https://www.google.com/ "
    break;
case "6789":
    case"78654":
    document.location.href="https://www.youtube.com/"
    break;
case "12345678":
    document.location.href="https://www.facebook.com/"
    break;

    default:
        document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

  }

        }