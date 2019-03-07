const letterObj = require('./loadDictionary');

//at start, load in everything
//separate file for each letter's substitutions

//fopen(), fread(), fwrite()

//write to commands/system log for everything done (i.e. restarting, adding symbol, word, command)

//utilize trie for banned words?

/*for every lines of chat:
1. check if user is banned;
2. check if they used a banned word
3. check if a command was used

*/

//when banned word, timeout for x-minutes. Write to log of people who been timed out. If more than y previous times, ban longer/perma? Allow to be adjustable x y

var bannedUsers = [];
var bannedWords = [];
var commands = {};

function startup() {
    //load banned words, symbols/substitues, commands, and banned users at start
    //rebansusers at the start if they were unbanned
    for (var i = 0; i < 4; i++) {
        loadItem(i);
    }
    for (var i = 0; i < length(bannedUsers); i++){
        //rebans users here
        message.out("/ban " + bannedUsers[i]);
    }
}

/*function loadItem(item) {
    //how I load banned words, symbols, commands, and banned users
    switch(item) {
        case 0: 
            //fread + write bannedUsers
            WHATEVER READ COMMAND IS
            while (!EOF) {
                let tempTxt = txt.split(",");
                bannedUsers.append(txt[0]);
            }
            break;
        case 1: 
            //fread + write letterDict
            for (var i = 0; i < 26; i++) {
                let x = String.fromCharCode(97 + i); 
                WHATEVER READ COMMAND IS
                while (!EOF) {
                    letterDict[x].append(txt);
                }
                break;
            }
        case 2: 
            //fread + write bannedWords
            WHATEVER READ COMMAND IS
            while (!EOF) {
                bannedWords.append(txt);
            }
            break;
        case 3:
            WHATEVER READ COMMAND IS
            while (!EOF) {
                let commandArray = txt.split(",");
                commands[commandArray[0]] = commandArray[1] //can't write as CSV as command might contain ,,,,,,
            }
            break;
    }
}*/

function isSubstitute() {
    //Add function
    //checks if the 

    //if word[i] == dict[key].value; set variableName += dict[key]

    
}

function addSymbol(letter, symbol) {
    //Add function
    letterDict[letter] += symbol;
    //letterDict.append(letter, symbol);

    //fwrite to file

    
    //If username = Kyruski (or other defined), allow function to occur
    //reload symbols (or write to both external file + temporary)
}

function addBannedWord(word) {
    //Add Function
    //reload banned words (or just write to both external file and temproary)
}

function banUser(username, reason, link, whoBanned) {
    //Add function 
    //make it write to external 
    bannedUsers.append(name);

    message.out("/ban " + username);
    //write to file: named, reason, link, whobanned;
    //reload banned users (or just write to both external file and temproary)
}

function addCommand(command, action) {
    //Add function
    //If username = Kyruski (or other defined), allow function to occur
    
    commands[command] = action;
    //Write command to external CSV/file
    //reload commands (or just write to both external file and temproary)
}