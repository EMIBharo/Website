$(document).ready(function () {
  $('.accordion-content').hide();
  var click = false;
  $('#accordion-btn-1').on('click', () => {
    $('#accordion-content-1').toggle();
    var spin1 = document.getElementById("up1");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-2').on('click', () => {
    $('#accordion-content-2').toggle();
    var spin1 = document.getElementById("up2");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-3').on('click', () => {
    $('#accordion-content-3').toggle();
    var spin1 = document.getElementById("up3");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-4').on('click', () => {
    $('#accordion-content-4').toggle();
    var spin1 = document.getElementById("up4");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-5').on('click', () => {
    $('#accordion-content-5').toggle();
    var spin1 = document.getElementById("up5");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-6').on('click', () => {
    $('#accordion-content-6').toggle();
    var spin1 = document.getElementById("up6");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-7').on('click', () => {
    $('#accordion-content-7').toggle();
    var spin1 = document.getElementById("up7");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-8').on('click', () => {
    $('#accordion-content-8').toggle();
    var spin1 = document.getElementById("up7");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-9').on('click', () => {
    $('#accordion-content-9').toggle();
    var spin1 = document.getElementById("up8");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })

  $('#accordion-btn-10').on('click', () => {
    $('#accordion-content-10').toggle();
    var spin1 = document.getElementById("up9");
    if(!click){
      spin1.style.transform = "rotate(180deg)";
      click=true;
     }else{
      click=false;
      spin1.style.transform = "rotate(0deg)";
     }
  })
})