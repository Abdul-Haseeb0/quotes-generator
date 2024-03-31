var quotes = [
    "And whoever puts their trust in Allah, then He will suffice him.",
    "Worship Allah as if you see Him, for if you don't see Him, He sees you.",
    "The best of you are those who learn the Quran and teach it.",
    "Do good to others, and goodness will come back to you.",
    "He who seeks knowledge, Allah will make his path to Paradise easy.",
    "Allah does not burden a soul beyond that it can bear",
    "Be patient. Indeed, the promise of Allah is truth.",
    "Whoever is not grateful to people is not grateful to Allah.",
    "And remember, with gratitude, Allah will increase you.",
    "The believer is kind and gentle, for there is no goodness in one who is neither kind nor gentle",
    "The best of people are those who are best in character.",
    "He who does not show mercy to others will not be shown mercy.",
    "The strongest among you is the one who controls his anger.",
    "Show forgiveness, enjoin what is good, and turn away from the ignorant.",
    "Those who forgive and overlook are rewarded by Allah.",
    "The best among you are those who strive for the betterment of society.",
    "Believe in yourself and in the power of Allah, and you will achieve greatness.",
    "Muslims are brothers and sisters, so make peace between your brothers and sisters",
    "The believers are like a single body; if one part suffers, the whole body suffers"
    
]
 
function generate() {
    var randindex = Math.floor(Math.random()*quotes.length);
    console.log(randindex);
    var randquote = quotes[randindex];
    console.log(randquote);
    var chnage = document.getElementById("quote");
    chnage.innerText = `"${randquote}"`
    
}