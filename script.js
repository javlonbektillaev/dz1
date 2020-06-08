let age = +prompt('Foydalanuvchi oz yoshini raqamlarda kiritishi kerak')

if (age >= 0 && age < 18) {
    console.log('Yoshsiz. Oqishingiz kerak');

} else if (age <= 50) {
    console.log('Ishlashingiz kerak');

} else if (age <= 59) {
    console.log('Yaqinda pensiyaga chiqasiz');

} else if (age <= 150) {
    console.log('Pensionerga oxshaysiz, hali tirik bolsangiz');

} else {
    console.log('Nimadir notogri ketib qoldi');

}