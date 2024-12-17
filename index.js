let quotes;
let randomNum;
let max = 1;
let min = 100;

document.getElementById(`quoteBtn`).onclick = function(){

randomNum = Math.floor(Math.random()*(max - min) + min );

randomNum = Number(randomNum);

switch(randomNum){

case 1:
        quote.textContent = "The best way to predict the future is to create it. – Abraham Lincoln";
        break;
    case 2:
        quote.textContent = "Do one thing every day that scares you. – Eleanor Roosevelt";
        break;
    case 3:
        quote.textContent = "It always seems impossible until it’s done. – Nelson Mandela";
        break;
    case 4:
        quote.textContent = "Don’t wait for opportunity. Create it. – Unknown";
        break;
    case 5:
        quote.textContent = "You miss 100% of the shots you don’t take. – Wayne Gretzky";
        break;
    case 6:
        quote.textContent = "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill";
        break;
    case 7:
        quote.textContent = "Believe you can, and you're halfway there. – Theodore Roosevelt";
        break;
    case 8:
        quote.textContent = "Happiness is not something ready made. It comes from your own actions. – Dalai Lama";
        break;
    case 9:
        quote.textContent = "Start where you are. Use what you have. Do what you can. – Arthur Ashe";
        break;
    case 10:
        quote.textContent = "Dream big, work hard, stay focused, and surround yourself with good people. – Unknown";
        break;
    case 11:
        quote.textContent = "The secret of getting ahead is getting started. – Mark Twain";
        break;
    case 12:
        quote.textContent = "Arise, awake, and stop not till the goal is reached. – Swami Vivekananda";
        break;
    case 13:
        quote.textContent = "Be the change that you wish to see in the world. – Mahatma Gandhi";
        break;
    case 14:
        quote.textContent = "A dream is not that which you see while sleeping, it is something that does not let you sleep. – Dr. A.P.J. Abdul Kalam";
        break;
    case 15:
        quote.textContent = "Life is what happens when you’re busy making other plans. – John Lennon";
        break;
    case 16:
        quote.textContent = "In the middle of every difficulty lies opportunity. – Albert Einstein";
        break;
    case 17:
        quote.textContent = "The only way to do great work is to love what you do. – Steve Jobs";
        break;
    case 18:
        quote.textContent = "Don’t watch the clock; do what it does. Keep going. – Sam Levenson";
        break;
    case 19:
        quote.textContent = "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau";
        break;
    case 20:
        quote.textContent = "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown";
        break;
    case 21:
        quote.textContent = "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson";
        break;
    case 22:
        quote.textContent = "The future depends on what we do in the present. – Mahatma Gandhi";
        break;
    case 23:
        quote.textContent = "You are never too old to set another goal or to dream a new dream. – C.S. Lewis";
        break;
    case 24:
        quote.textContent = "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson";
        break;
    case 25:
        quote.textContent = "It does not matter how slowly you go as long as you do not stop. – Confucius";
        break;
    case 26:
        quote.textContent = "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson";
        break;
    case 27:
        quote.textContent = "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein";
        break;
    case 28:
        quote.textContent = "You must be the change you wish to see in the world. – Mahatma Gandhi";
        break;
    case 29:
        quote.textContent = "Don’t cry because it’s over, smile because it happened. – Dr. Seuss";
        break;
    case 30:
        quote.textContent = "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success. – James Cameron";
        break;
    case 31:
        quote.textContent = "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Unknown";
        break;
    case 32:
        quote.textContent = "The journey of a thousand miles begins with one step. – Lao Tzu";
        break;
    case 33:
        quote.textContent = "Nothing is impossible, the word itself says ‘I’m possible’! – Audrey Hepburn";
        break;
    case 34:
        quote.textContent = "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill";
        break;
    case 35:
        quote.textContent = "The best way to get started is to quit talking and begin doing. – Walt Disney";
        break;
    case 36:
        quote.textContent = "Don’t let yesterday take up too much of today. – Will Rogers";
        break;
    case 37:
        quote.textContent = "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt";
        break;
    case 38:
        quote.textContent = "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll";
        break;
    case 39:
        quote.textContent = "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar";
        break;
    case 40:
        quote.textContent = "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs";
        break;
    case 41:
        quote.textContent = "The only way to do great work is to love what you do. – Steve Jobs";
        break;
    case 42:
        quote.textContent = "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi";
        break;
    case 43:
        quote.textContent = "We may encounter many defeats, but we must not be defeated. – Maya Angelou";
        break;
    case 44:
        quote.textContent = "Life is really simple, but we insist on making it complicated. – Confucius";
        break;
    case 45:
        quote.textContent = "To live a creative life, we must lose our fear of being wrong. – Joseph Chilton Pearce";
        break;
    case 46:
        quote.textContent = "It always seems impossible until it’s done. – Nelson Mandela";
        break;
    case 47:
        quote.textContent = "Everything you can imagine is real. – Pablo Picasso";
        break;
    case 48:
        quote.textContent = "Do what you can, with what you have, where you are. – Theodore Roosevelt";
        break;
    case 49:
        quote.textContent = "Life isn’t about finding yourself. It’s about creating yourself. – George Bernard Shaw";
        break;
    case 50:
        quote.textContent = "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson";
        break;
    case 51:
        quote.textContent = "You will face many defeats in life, but never let yourself be defeated. – Maya Angelou";
        break;
    case 52:
        quote.textContent = "The mind is everything. What you think you become. – Buddha";
        break;
    case 53:
        quote.textContent = "Happiness depends upon ourselves. – Aristotle";
        break;
    case 54:
        quote.textContent = "We do not remember days, we remember moments. – Cesare Pavese";
        break;
    case 55:
        quote.textContent = "Be yourself; everyone else is already taken. – Oscar Wilde";
        break;
    case 56:
        quote.textContent = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. – Albert Einstein";
        break;
    case 57:
        quote.textContent = "So many books, so little time. – Frank Zappa";
        break;
    case 58:
        quote.textContent = "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost";
        break;
    case 59:
        quote.textContent = "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany";
        break;
    case 60:
        quote.textContent = "Success is how high you bounce when you hit bottom. – George S. Patton";
        break;
    case 61:
        quote.textContent = "Failure is simply the opportunity to begin again, this time more intelligently. – Henry Ford";
        break;
    case 62:
        quote.textContent = "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson";
        break;
    case 63:
        quote.textContent = "You must do the things you think you cannot do. – Eleanor Roosevelt";
        break;
    case 64:
        quote.textContent = "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi";
        break;
    case 65:
        quote.textContent = "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Unknown";
        break;
    case 66:
        quote.textContent = "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt";
        break;
    case 67:
        quote.textContent = "It does not matter how slowly you go as long as you do not stop. – Confucius";
        break;
    case 68:
        quote.textContent = "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill";
        break;
    case 69:
        quote.textContent = "The secret of getting ahead is getting started. – Mark Twain";
        break;
    case 70:
        quote.textContent = "You are never too old to set another goal or to dream a new dream. – C.S. Lewis";
        break;
    case 71:
        quote.textContent = "You only live once, but if you do it right, once is enough. – Mae West";
        break;
    case 72:
        quote.textContent = "Life is what happens when you’re busy making other plans. – John Lennon";
        break;
    case 73:
        quote.textContent = "Good friends, good books, and a sleepy conscience: this is the ideal life. – Mark Twain";
        break;
    case 74:
        quote.textContent = "Let your dreams be bigger than your fears, and your actions louder than your words. – Unknown";
        break;
    case 75:
        quote.textContent = "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar";
        break;
    case 76:
        quote.textContent = "Nothing will work unless you do. – Maya Angelou";
        break;
    case 77:
        quote.textContent = "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Unknown";
        break;
    case 78:
        quote.textContent = "The only way to do great work is to love what you do. – Steve Jobs";
        break;
    case 79:
        quote.textContent = "Life is really simple, but we insist on making it complicated. – Confucius";
        break;
    case 80:
        quote.textContent = "We can do no great things; only small things with great love. – Mother Teresa";
        break;
    case 81:
        quote.textContent = "Everything has beauty, but not everyone sees it. – Confucius";
        break;
    case 82:
        quote.textContent = "Success is not in what you have, but who you are. – Bo Bennett";
        break;
    case 83:
        quote.textContent = "Success is the sum of small efforts, repeated day in and day out. – Robert Collier";
        break;
    case 84:
        quote.textContent = "The best revenge is massive success. – Frank Sinatra";
        break;
    case 85:
        quote.textContent = "Life is a journey that must be traveled no matter how bad the roads and accommodations. – Oliver Goldsmith";
        break;
    case 86:
        quote.textContent = "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett";
        break;
    case 87:
        quote.textContent = "Success is the ability to go from one failure to another with no loss of enthusiasm. – Winston Churchill";
        break;
    case 88:
        quote.textContent = "The way to get started is to quit talking and begin doing. – Walt Disney";
        break;
    case 89:
        quote.textContent = "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt";
        break;
    case 90:
        quote.textContent = "Success is the sum of small efforts, repeated day in and day out. – Robert Collier";
        break;
    case 91:
        quote.textContent = "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama";
        break;
    case 92:
        quote.textContent = "Act as if what you do makes a difference. It does. – William James";
        break;
    case 93:
        quote.textContent = "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau";
        break;
    case 94:
        quote.textContent = "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar";
        break;
    case 95:
        quote.textContent = "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson";
        break;
    case 96:
        quote.textContent = "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany";
        break;
    case 97:
        quote.textContent = "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown";
        break;
    case 98:
        quote.textContent = "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt";
        break;
    case 99:
        quote.textContent = "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi";
        break;
    case 100:
        quote.textContent = "You must be the change you wish to see in the world. – Mahatma Gandhi";
        break;    
    }
}