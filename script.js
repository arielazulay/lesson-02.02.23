let fullname = prompt("הכנס שם מלא:");
let email = prompt("הכנס אימייל :");
let agetop = Number(prompt("הכנס גיל:"));
let gender = prompt(" הכנס מגדר :", "הכנס זכר או נקבה");

if (gender === "זכר" || "נקבה") {
  if (gender === "זכר") {
    alert("ברוך הבא :" + fullname);
  } else if (gender === "נקבה") {
    alert("ברוכה הבאה :" + fullname);
  } else gender = prompt("הכנס פרטים נכונים : זכר/ נקבה");
}

let subscribe = confirm("would you like to subscribe to our newsletter?");
if (subscribe === true) {
  alert(" ברוך הבא למועדון");
} else {
  alert(" להתראות לוזר");
}

if (agetop <= 12) {
  alert(" הגיל שלך הוא " + agetop + " ולכן את/ה ביסודי ");
} else if (agetop > 12 && agetop <= 16) {
  alert(" הגיל שלך הוא " + agetop + " ולכן את/ה חטיבה ");
} else if (agetop > 16 && agetop <= 18) {
  alert(" הגיל שלך הוא " + agetop + " ולכן את/ה בתיכון ");
} else if (agetop > 18 && agetop <= 21) {
  alert(" הגיל שלך הוא " + agetop + " ולכן את/ה בצבא ");
} else {
  alert(" את/ה לא בקבוצה הרצויה ! החוצה עברת תגיל");
}
