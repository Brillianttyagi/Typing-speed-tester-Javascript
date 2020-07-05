//Brillianttyagi Day 21 last day javascript Project


const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const accuracyLabel = document.querySelector(".accuracy");
const wordsPerMinuteLabel = document.querySelector(".wpm");

var timer = [0,0,0,0];
var interval;
var wpmInterval;
var timerRunning = false;
var errors = 0;
var timeElapsed = 0;
var randomParagraph = 0;
var wpm;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

    timeElapsed = timer[0]*60 + timer[1];
}

// Finds words per minute
function wordsPerMinute() {
  if (timeElapsed > 0) {
    var grossWpm = Math.floor((testArea.value.length/5) / (timeElapsed/60));
    console.log(grossWpm);
    wpm = Math.floor(((testArea.value.length/5) - errors)/(timeElapsed/60));
    console.log(wpm);
    if (wpm < 0) {
      wordsPerMinuteLabel.innerHTML = 0 + " WPM";
    } else {
      wordsPerMinuteLabel.innerHTML = wpm + " WPM";
    }
    accuracy(grossWpm);
  }
}

// Finds the accuracy
function accuracy(grossWpm) {
  let accuracy = Math.floor(wpm/grossWpm*100);
  if (accuracy < 0) {
    accuracyLabel.innerHTML = 0+"%";
  } else {
    accuracyLabel.innerHTML = accuracy+"%";
  }
  console.log(accuracy);
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);


    if (textEntered == originText) {
        clearInterval(interval);
        clearInterval(wpmInterval);
        testWrapper.style.borderColor = "#429890"; //Green
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3"; //Blue
        } else {
            errors++;
            if (!(event.keyCode === 8)) {
              testWrapper.style.borderColor = "#E95D0F"; //Orange
            } else {
              errors--;
            }
        }
    }
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
        wpmInterval = setInterval(wordsPerMinute, 1000);
    }
}

//Generates a new paragraph:
function randomParagraphGenerator() {
    let par1 = "The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own. It gets its light from the Sun. The Moo keeps changing its shape as it moves round the Earth. It spins on its axis in 27.3 days stars were named after the Edwin Aldrin were the first ones to set their foot on the Moon on 21 July 1969 They reached the Moon in their space craft named Apollo II.";
    let par2 = "The Solar System consists of the Sun Moon and Planets. It also consists of comets, meteoroids and asteroids. The Sun is the largest member of the Solar System. In order of distance from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto; the dwarf planet. The Sun is at the centre of the Solar System and the planets, asteroids, comets and meteoroids revolve around it.";
    let par3 = "The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas. The surface of the Sun is known as the photosphere. The photosphere is surrounded by a thin layer of gas known as the chromospheres. Without the Sun, there would be no life on Earth. There would be no plants, no animals and no human beings. As, all the living things on Earth get their energy from the Sun for their survival.";
    let par4 = "A hawker is a person who moves from one place to another and sell their goods, by shouting on the streets. They work hard throughout the day. They move on the street on their bicycle and sometimes on foot and sell their products. We can see hawkers everywhere. They move everywhere selling their goods without caring about the weather. There is a hawker who sells vegetables on his bicycle in our locality. His name is Manoj. He brings fresh vegetables at a very reasonable price. He is a nice and an honest hawker.";
    let par5 = "A snake charmer is a person who moves the streets with different types of the banks of the river Yamuna. It is snakes in his basket. He goes from one place to another to show various types of snakes and their tricks. He carries a pipe with which he plays music and snakes dance to his tune. He usually wears a colourful dress. The job of a snake charmer is quite dangerous. Some snakes are quite poisonous and can even bite him. It is not an easy task to catch and train them for the shows.";
    let par6 = "A teacher's professional duties may extend beyond formal teaching. Outside of the classroom teachers may accompany students on field trips, supervise study halls, help with the organization of school functions, and serve as supervisors for extracurricular activities. In some education systems, teachers may have responsibility for student discipline.";
    let par7 = "A late 20th century trend in typing, primarily used with devices with small keyboards (such as PDAs and Smartphones), is thumbing or thumb typing. This can be accomplished using one or both thumbs. Similar to desktop keyboards and input devices, if a user overuses keys which need hard presses and/or have small and unergonomic layouts, it could cause thumb tendonitis or other repetitive strain injury. (Wikipedia)";
    let par8 = "Two common terms used to describe a salesperson are 'Farmer' and 'Hunter'. The reality is that most professional salespeople have a little of both. A hunter is often associated with aggressive personalities who use aggressive sales technique. In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals. This process is called 'sales capturing'. An example is a commodity sale such as a long distance salesperson, shoe salesperson and to a degree a car salesperson. Their job is to find and convert buyers. A sales farmer is someone who creates sales demand through activities that directly influence and alter the buying process.";
    let par9 = "Trying to make a wise, good choice when thinking about what kinds of careers might be best for you is a hard thing to do. Your future may very well depend on the ways you go about finding the best job openings for you in the world of work. Some people will feel that there is one and only one job in the world for them. Hard thinking and a lot of hard work will help them find the one job that is best for them. Jobs are there for those with skills and a good work ethic. Many new young artists in the upper New England states are famous around the world as leaders in new American art. These fine artists are very good in their chosen fields and are willing to share their many talents by teaching others. The students have had the chance to learn and use skills in oil painting, sketching with chalk, sculpting, and weaving. Learning to typewrite is a skill that will help all of us in our work today. The development of the computer will open doors for people with the keyboarding skills and will make typing a necessity. Managers, as well as secretaries, will need skill at the keyboard to input data and process words. Therefore, good keyboarding skills may be important to you.";
    let par10 = "India is an agricultural country. Most of the people live in villages and are farmers. They grow cereals, pulses, vegetables and fruits. The farmers lead a tough life. They get up early in the morning and go to the fields. They stay and work on the farm late till evening. The farmers usually live in kuchcha houses. Though, they work hard they remain poor. Farmers eat simple food; wear simple clothes and rear animals like cows, buffaloes and oxen. Without them there would be no cereals for us to eat. They play an important role in the growth and economy of a country.";

    switch (Math.floor(Math.random() * 10)) {
      case 0:
        originText = par1;
        document.querySelector("#origin-text p").innerHTML = par1;
        break;
      case 1:
        originText = par2;
        document.querySelector("#origin-text p").innerHTML = par2;
        break;
      case 2:
        originText = par3;
        document.querySelector("#origin-text p").innerHTML = par3;
        break;
      case 3:
        originText = par4;
        document.querySelector("#origin-text p").innerHTML = par4;
        break;
      case 4:
        originText = par5;
        document.querySelector("#origin-text p").innerHTML = par5;
        break;
      case 5:
        originText = par6;
        document.querySelector("#origin-text p").innerHTML = par6;
        break;
      case 6:
        originText = par7;
        document.querySelector("#origin-text p").innerHTML = par7;
        break;
      case 7:
        originText = par8;
        document.querySelector("#origin-text p").innerHTML = par8;
        break;
      case 8:
        originText = par9;
        document.querySelector("#origin-text p").innerHTML = par9;
        break;
      case 9:
        originText = par10;
        document.querySelector("#origin-text p").innerHTML = par10;
        break;
    }

}

// Reset everything:
function reset() {
    clearInterval(interval);
    clearInterval(wpmInterval);
    interval = null;
    wpmInterval = null;
    timer = [0,0,0,0];
    timerRunning = false;
    wpm = 0 + " WPM";
    timeElapsed = 0;
    errors = 0;

    testArea.value = "";
    testArea.disabled = false;
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    accuracyLabel.innerHTML = "100%";
    wordsPerMinuteLabel.innerHTML = wpm;
    randomParagraphGenerator();
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
