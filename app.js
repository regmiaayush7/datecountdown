//Adding Click Event Listener to submit Button 
let submitbtn = document.getElementById('enter').addEventListener('click', calculateDate);

//Function to calculate the date
function calculateDate(e){
  //Getting Value from form input
  let formDate = document.getElementById('currentdate').value;
  if(formDate === ''){
    alert("please fill in the fields");
  }else{
 //Setting the Count down Date
 let countdownDate = new Date(formDate).getTime();
 //Update the countdown every 1 second
  let x = setInterval(function(){
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countdownDate - now;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //Display the Date in its respective fields
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  },1000);
  }
  e.preventDefault();
}

