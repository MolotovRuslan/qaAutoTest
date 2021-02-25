$ (document).ready(
    function getNameFormHtml() {
        let getName = document.querySelectorAll("div");

            if (getName.length === 8) {
                let url = "https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_" +
                    "ga0duoo/sendMessage?chat_id=218858759&text=";
                let xhttp = new XMLHttpRequest();
                xhttp.open("GET", url + " GradesFixer 'Divs ' " + getName.length + " Test Passed", true);
                xhttp.send();

            } else if ( getName.length < 8 || getName.length > 8) {
                let url = "https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_" +
                    "ga0duoo/sendMessage?chat_id=218858759&text=";
                let xhttp = new XMLHttpRequest();
                xhttp.open("GET", url + " GradesFixer 'Divs ' " + getName.length + " Test Failed ", true);
                xhttp.send();
            }
    }
);

$ (document).ready (
    function testForTitle () {
        let title_test = document.querySelector('.test1').outerHTML;
        if (title_test.length === 234) {
            let url = "https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_" +
                "ga0duoo/sendMessage?chat_id=218858759&text=";
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", url + "GradesFixer 'Title ' " + title_test.length + " Test Passed ", true);
            xhttp.send();

        } else if ( title_test.length < 234 || title_test.length > 234) {
            let url = "https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_" +
                "ga0duoo/sendMessage?chat_id=218858759&text=";
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", url + " GradesFixer 'Title ' " + title_test.length + " Test 'Failed' ", true);
            xhttp.send();
        }
    }

);



    //https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/getUpdates
    //https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=hi



// function getNameFormHtml() {
//     let getName = document.getElementsByTagName("div");
//     if (getName.length === 6){
//         alert("True! " + "There is 6 div elements at the DOM")
//     } else if (getName.length !== 6){
//         alert("False!" + " " + "There is only" + " " + getName.length + "!");
//     }
//
// }



// let url = "https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=;";
// let xhttp = new XMLHttpRequest();
// xhttp.open("GET", url + message, true);
// xhttp.send();



// for (let i = 0; i < getName.length; i++); /** Цикл
// if (getName.length === 2) {
//     alert("Right, there is 2 elements")
// } else if (getName.length === 1 || getName.length === null){
//     alert("Error there in 1 or less")
// }