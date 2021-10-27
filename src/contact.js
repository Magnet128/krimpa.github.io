const firebaseConfig = {
    apiKey: "AIzaSyDKkOKCT-hb68OEnzkLcEmGxqKqwB6MKIc",
    authDomain: "krimpa-fcb08.firebaseapp.com",
    projectId: "krimpa-fcb08",
    storageBucket: "krimpa-fcb08.appspot.com",
    messagingSenderId: "276850076529",
    appId: "1:276850076529:web:99f396fe3bcd8b0132e4d0",
    measurementId: "G-D4TW7KK9HJ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();

function writecontactData() {           
     var today = new Date();     

     var year = today.getFullYear();
     var month = ('0' + (today.getMonth() + 1)).slice(-2);
     var day = ('0' + today.getDate()).slice(-2);

     var dateString = year + month + day;  

     var hours = ('0' + today.getHours()).slice(-2); 
     var minutes = ('0' + today.getMinutes()).slice(-2);
     var seconds = ('0' + today.getSeconds()).slice(-2); 

     var timeString = hours + minutes + seconds;

     var name = document.getElementById("c_name").value;
     var phone = document.getElementById("c_phone").value;

     if(name == "")
     {
         alert("성함(업체명)을 입력하세요.");
     }
     if(phone == "")
     {
         alert("전화번호를 입력하세요.");
     }

     if(name != "" && phone != "")
     {
         db.ref('database/contactlist/'+dateString+timeString).set({
             name:name,
             phone:phone
         });

         alert("연락처를 보냈습니다.\n 빠른 시일 내에 연락드리겠습니다.");
     }        
}   