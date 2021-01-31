var conductor = require('./conductor');
var { ExitCommand, CreateCommand } = require('./command');

var { createInterface } = require('readline');
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

var instruction = 'Please enter one of the following commands:';
instruction += '\n    ・ Create file: create <fileName> <text>';
instruction += '\n    ・ Undo commnad: undo';
instruction += '\n    ・ Redo command: redo';
instruction += '\n    ・ Show history: history';
instruction += '\n    ・ End process: exit';

console.log(instruction);
rl.prompt();

rl.on('line', input => {

    var [ commandText, ...remaining ] = input.split(' ');
    var [ fileName, ...fileText ] = remaining;
    var text = fileText.join(' ');

    switch(commandText) {

        case "create":
            conductor.run(new CreateCommand(fileName, text));
            break;

        case "undo":
            conductor.undoCommand();
            break;

        case "redo":
            conductor.redoCommand();
            break;

        case "history":
            conductor.printHistory();
            break;    

        case "exit":
            conductor.run(new ExitCommand());
            break;

        default:
            console.log(`"${commandText}" is not a valid command.`);

    }

    rl.prompt();

});