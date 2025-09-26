
function updateClock(){
    const now = new Date(); // we can use the Date class to obtain the current time. this is something that already is on javascript, so we can just initialize a new object of this class.

    // we can get the hours, minutes and seconds with this object.
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString();
    const seconds = now.getSeconds().toString();

    // we now declare the days and months, as the Date class returns a number, so we can use that nomber to specify a month or day on our arrays.
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"];

    const months = ["January", "February", "March", "April", 
        "May", "June", "July", "August", "September", "October", 
        "November", "December"];


    // we declare the day name, day number, month and year variables. 
    const dayName = days[now.getDay() - 1]; // we have to make an adjustment here, as we get day number 4, but that would be 3 in our array. for some reason, this adjustment has not to be made in the months array.
    const day_number = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    // here we update the time of the time id. here we just put the hours and minutes, as we manage seconds differently.

      // in the seconds/minutes/hours, the Date class returns a number like 1, 2, etc., for the first numbers. as we want to have 00 in the hours, minutes and seconds respectively, we just add an extra zero if the minutes/hours/seconds const is less than ten, in any other case just put the normal number as it's two digits already.
    document.getElementById('time').textContent = `${hours}:`;

    if(minutes < 10)  document.getElementById('time').textContent += `0${minutes}:`;
    else document.getElementById('time').textContent += `${minutes}:`;

    if(seconds < 10)  document.getElementById('time').textContent += `0${seconds}`;
    else document.getElementById('time').textContent += `${seconds}`;


    document.getElementById('date').textContent = `${dayName}, ${month} ${day_number}, ${year}`;
}

setInterval(updateClock, 1000); // we can set to trigger a function every certain interval. in this case, we trigger the update clock function every 1000 miliseconds, so it's 1 second.

updateClock();

// this part is toggle/untoggle the light mode of the page. by default, dark mode is on. 

// we grab the elements of the page, like classes and, in this case, the body itself, and assign them to a variable.
const page_light_modes_button = document.getElementById('page_light_modes_button');

const body = document.querySelector("body");
const main_background = document.querySelector(".main_background");
const clock = document.querySelector(".clock");
const page_footer = document.querySelector(".page_footer");
const main_flex = document.querySelector(".main_flex");

// we add an event for when the page_light_modes_button is clicked, then toggle the "light_mode" class on the elements we declared previously. this will make that the elements that have this class (see styles) will toggle this mode, changing to that class and the colors and stuff we put there.
page_light_modes_button.addEventListener("click", () => {

    body.classList.toggle("light_mode");
    main_background.classList.toggle("light_mode");
    clock.classList.toggle("light_mode");
    page_footer.classList.toggle("light_mode");
    main_flex.classList.toggle("light_mode");

    // we can use an if an element of the above (we can choose whatever element, in this case we choose the body) hat the light_mode active. if so, then change the button text to dark mode, and if light mode is not active, change the text to dark mode.
    if(body.classList.contains("light_mode")) page_light_modes_button.textContent = "Dark mode";    
    else page_light_modes_button.textContent = "Light mode";
});