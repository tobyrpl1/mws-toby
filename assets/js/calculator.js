function tambah(){
    var num1   = document.myform.angka1.value;
    var num2   = document.myform.angka2.value;
    var tambah = parseInt(num1) + parseInt(num2);
    document.getElementById('add').value = tambah;}
function kurang(){
    var num1   = document.myform.angka1.value;
    var num2   = document.myform.angka2.value;
    var kurang = parseInt(num1) - parseInt(num2);
    document.getElementById('add').value = kurang;}
function kali(){
    var num1 = document.myform.angka1.value;
    var num2 = document.myform.angka2.value;
    var kali = parseInt(num1) * parseInt(num2);
    document.getElementById('add').value = kali;}
function bagi(){
    var num1 = document.myform.angka1.value;
    var num2 = document.myform.angka2.value;
    var bagi = parseInt(num1) / parseInt(num2);
    document.getElementById('add').value = bagi;}

/*function calculator() {
    let angka = document.querySelectorAll('input');
    let i1 = angka[0].value;
    let i2 = angka[1].value;
    angka[2].value= parseInt(i1) + parseInt(i2);
}
let tombol = document.querySelector('button');
tombol.addEventListener('click', calculator);*/