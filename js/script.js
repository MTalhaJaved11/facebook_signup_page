// function confirmAndGeneratePDF() {
//     const userConfirmed = confirm("Are you sure you want to generate a PDF?");
//     if (userConfirmed) {
//         generatePDF();
//     }
// }



let button = document.getElementById('btn')
button.addEventListener('click' , ()=>{


    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const birthMonth = document.getElementById("birth_month").value;
    const birthDay = document.getElementById("birth_day").value;
    const birthYear = document.getElementById("birth_year").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if(firstName===""||lastName===""||email===""||birthMonth==""||!gender){
        alert("All field are required")
    }
    else{

        alert("Data entered Successfully\nData export to PDF")
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Facebook Signup Form", 20, 20);

    doc.setFontSize(12);
    doc.text("First Name: " + firstName, 20, 40);
    doc.text("Last Name: " + lastName, 20, 50);
    doc.text("Email: " + email, 20, 60);
    doc.text("Birthday: " + birthMonth + " " + birthDay + ", " + birthYear, 20, 70);
    doc.text("Gender: " + gender, 20, 80);

    doc.save("facebook_signup.pdf");
    }


})
