// Function to call Agify API and retrieve age based on name
async function getAgeFromAgify(name) {
    try {
        const response = await fetch(`https://api.agify.io/?name=${name}`);
        const data = await response.json();
        return data.age;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Function to generate and display a random fun fact
function displayRandomFunFact() {
    const funFacts = [
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "The shortest war in history lasted only 38 minutes.",
        "Bananas are berries, but strawberries are not.",
        "A group of flamingos is called a flamboyance.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted only 38 minutes.",
        "A single cloud can weigh more than 1 million pounds.",
        "The first oranges weren't orange; they were green.",
        "Octopuses have three hearts.",
        "Scotland has 421 words for 'snow.'",
        "The unicorn is the national animal of Scotland.",
        "The shortest distance between two points on the Earth is called a 'geodesic' and corresponds to a segment of a great circle.",
        "There are more atoms in a single glass of water than glasses of water in all the oceans of the Earth combined.",
        "The word 'listen' contains the same letters as the word 'silent.'",
        "The longest wedding veil was the same length as 63.5 football fields.",
        "A giraffe can clean its ears with its 21-inch tongue.",
        "The average person spends six months of their lifetime waiting for a red light to turn green.",
        "The planet Mars appears red because of its iron oxide (rust) surface.",
        "If you could fold a piece of paper 42 times, it would reach the moon.",
        "A group of cats is called a 'clowder.'",
        "The tongue is the strongest muscle in the human body relative to its size.",
        "The dots on a die are called 'pips.'",
        "Alaska is simultaneously the easternmost and westernmost state in the United States, depending on whether you measure from its easternmost point or its westernmost point.",
        "The Great Wall of China is not visible from space without aid, contrary to popular belief.",
        "Maine is the closest U.S. state to Africa.",
        "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
        "The tallest tree ever was an Australian eucalyptus – in 1872, it was measured at 435 feet tall.",
        "The Amazon rainforest produces more than 20% of the world's oxygen supply.",
        "The electric chair was invented by a dentist.",
        "The human brain stops growing at around age 18.",
        "A snail can sleep for three years.",
        "A teaspoon of neutron star material would weigh about 6 billion tons.",
        "Bees can recognize human faces.",
        "Cows have best friends.",
        "The longest time between two twins being born is 87 days.",
        "Some cats are allergic to humans.",
        "The northern leopard frog swallows its prey using its eyes – it uses them to help push food down its throat by retracting them into its head.",
        "The world's largest snowflake was 15 inches wide and 8 inches thick.",
        "A group of crows is called a 'murder.'",
        "Sea otters hold hands while sleeping to keep from drifting apart.",
        "Koalas sleep up to 22 hours a day.",
        "The microwave was invented after a researcher walked by a radar tube and a chocolate bar melted in his pocket.",
        "The longest English word without a vowel is 'rhythms.'",
        "The original name of Bank of America was Bank of Italy.",
        "The first email was sent by Ray Tomlinson to himself in 1971.",
        "The fingerprints of koala bears are so indistinguishable from humans that they have on occasion been confused at a crime scene.",
    ];

    const randomFunFact = funFacts[Math.floor(Math.random() / funFacts.length)];
    document.getElementById("ageFunFact").textContent = randomFunFact;
}

// handling form submission
document
    .querySelector("form")
    .addEventListener("submit", async function (event) {
        event.preventDefault();
        const name = document.getElementById("enterName").value;
        const age = await getAgeFromAgify(name);
        if (age !== null) {
            document.getElementById("showResult").textContent = age;
            displayRandomFunFact();
        } else {
            document.getElementById("showResult").textContent = "Error";
            document.getElementById("ageFunFact").textContent =
                "Failed to get age";
        }
    });
