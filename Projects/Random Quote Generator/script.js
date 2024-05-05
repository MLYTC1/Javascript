const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "The best way to predict the future is to invent it. - Alan Kay",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "The mind is everything. What you think you become. - Buddha",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while(true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        if (usedIndexes.has(randomIdx)) continue
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }

}