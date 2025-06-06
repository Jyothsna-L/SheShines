const tips = [
    "Take a 10-minute walk in nature 🌿",
    "Drink a glass of water and take a deep breath 💧",
    "Write down three things you’re grateful for 🙏",
    "Stretch your body and relax your muscles 🧘‍♀️",
    "Listen to your favorite song and dance it out 🎶",
    "Take a break from screens for 30 minutes 📵",
    "Read a chapter from a book you love 📚",
    "Treat yourself with kindness today 💖",
    "Say no to something that drains your energy ❌",
    "Light a candle and enjoy a few minutes of silence 🕯️",
    "Step outside and get 5 minutes of sunlight ☀️",
    "Smile at yourself in the mirror — it boosts mood 😄",
    "Put your phone away and observe the world for 2 minutes 👀",
    "Take 5 deep belly breaths to reset your nervous system 🌬️",
    "Cuddle a pet or soft pillow for comfort 🐾🧸",
    "Write a kind note to your future self 💌",
    "Do a quick 1-minute body scan meditation 🧠",
    "Call or text someone you care about 📱❤️",
    "Clean one small area — a tidy space calms the brain 🧼",
    "Name one emotion you're feeling and let it be 🧘",
    "Play a calming sound or nature track for 5 minutes 🎧🌊",
    "Write one sentence about what went well today ✍️✨",
    "Do 10 jumping jacks to energize your body 💥",
    "Unclench your jaw and drop your shoulders 🧎‍♀️",
    "Place your hand over your heart and breathe slowly ❤️‍🩹"
];


let savedMoods = [];
let savedJournals = [];
let savedTips = [];

function generateTip() {
    const tipBox = document.getElementById('tipBox');
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tip = tips[randomIndex];
    tipBox.textContent = tip;

    savedTips.push({
        tip,
        date: new Date().toLocaleString()
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function saveMood() {
    const moodSelect = document.getElementById('moodSelect');
    const mood = moodSelect.value;
    const result = document.getElementById('moodResult');

    if (mood) {
        result.textContent = `Mood saved: "${mood}" 😊`;
        savedMoods.push({
            mood,
            date: new Date().toLocaleString()
        });
        moodSelect.value = ""; 
    } else {
        result.textContent = "Please select a mood first.";
    }
}

function saveJournal() {
    const journalEntry = document.getElementById('journalEntry');
    const journal = journalEntry.value.trim();
    const result = document.getElementById('journalResult');

    if (journal) {
        result.textContent = "Journal entry saved 💖";
        savedJournals.push({
            journal,
            date: new Date().toLocaleString()
        });
        journalEntry.value = "";
    } else {
        result.textContent = "Please write something first.";
    }
}


function stripEmojis(text) {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g, '');
}

async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("SheShines - Your Self Care Log", 13, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    let y = 30;

    if(savedMoods.length === 0 && savedJournals.length === 0 && savedTips.length === 0) {
        alert("No saved entries to generate PDF.");
        return;
    }

    if(savedMoods.length) {
        doc.setFont("helvetica", "bold");
        doc.text("Saved Moods", 12, y);
        y += 10;
        doc.setFont("helvetica", "normal");
        savedMoods.forEach((entry, i) => {
            const text = `${i + 1}. [${entry.date}] Mood: ${stripEmojis(entry.mood)}`;
            doc.text(text, 12, y);
            y += 8;
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });
        y += 10;
    }

    if(savedTips.length) {
        doc.setFont("helvetica", "bold");
        doc.text("Generated Tips", 12, y);
        y += 10;
        doc.setFont("helvetica", "normal");
        savedTips.forEach((entry, i) => {
            const text = `${i + 1}. [${entry.date}] Tip: ${stripEmojis(entry.tip)}`;
            doc.text(text, 12, y);
            y += 8;
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });
        y += 10;
    }

    if(savedJournals.length) {
        doc.setFont("helvetica", "bold");
        doc.text("Journal Entries", 12, y);
        y += 10;
        doc.setFont("helvetica", "normal");
        savedJournals.forEach((entry, i) => {
            const header = `${i + 1}. [${entry.date}]`;
            doc.text(header, 15, y);
            y += 8;

            const lines = doc.splitTextToSize(stripEmojis(entry.journal), 180);
            doc.text(lines, 12, y);
            y += lines.length * 8 + 5;

            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });
    }

    doc.save(`SheShines_SelfCareLog_${new Date().toISOString().slice(0,10)}.pdf`);

}
function showMessage() {
    const messages = [
    "You are stronger than you think 💪",
    "Your presence matters 💖",
    "Rest is productive too 🛌",
    "You are enough, exactly as you are 🌼",
    "Take up space. Your voice matters 🎤",
    "Keep blooming in your own way 🌷",
    "Small steps still move you forward 🚶‍♀️",
    "You deserve peace and happiness 🕊️",
    "Celebrate yourself today — you’re doing great 🎉",
    "You don’t have to do it all. Breathe 💫",
    "Your softness is your strength 🌸",
    "You’re allowed to grow at your own pace 🍃",
    "Be proud of how far you’ve come 📈",
    "You light up the world in ways you don’t even realize ✨",
    "Progress, not perfection 🌱",
    "Honor your feelings — they are valid 💗",
    "You are doing better than you think 🪷",
    "Healing isn’t linear — take your time 💞",
    "Your story is still unfolding — and it’s beautiful 📖",
    "Nurture yourself like someone you deeply love 💐",
    "You radiate a quiet power that inspires 💡",
    "You deserve the same care you give to others 💕",
    "Even your slow days are meaningful 🌙",
    "You’re a work of art — not a to-do list 🎨",
    "Peace begins with giving yourself permission to pause 🧘‍♀️"
];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const modal = document.getElementById('messageModal');
    const messageText = document.getElementById('modalMessage');
    messageText.textContent = messages[randomIndex];
    modal.style.display = "block";
}

function closeMessageModal() {
    const modal = document.getElementById('messageModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
const affirmations = [
    "I am becoming the woman I’ve always wanted to be 🌼",
    "I carry strength, beauty, and purpose within me every day ✨",
    "I trust my journey — even when I don't have all the answers 🛤️",
    "I am a radiant source of light and calm 💡",
    "I wake up each day with courage in my heart and clarity in my soul 🌅",
    "I speak to myself with love and compassion today 💬💕",
    "I am not behind in life. I am right on time ⏰",
    "I am proud of my quiet victories and unseen growth 🌿",
    "Every breath I take is a step toward healing 🕊️",
    "I honor my needs without guilt or apology 🌸",
    "Even when I struggle, I still shine ✨",
    "I choose to nourish my mind, body, and spirit today 🍵🧘‍♀️",
    "I am not alone — I am deeply connected to love and support 🤝",
    "I deserve joy without earning it 💛",
    "My future is full of beautiful possibilities 🌈"
];


function showAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];

    const modal = document.getElementById('messageModal');
    const messageText = document.getElementById('modalMessage');
    messageText.textContent = affirmation;
    modal.style.display = "block";
}
