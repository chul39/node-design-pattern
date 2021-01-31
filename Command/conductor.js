class Conductor {

    constructor() {
        this.history = [];
        this.undone = [];
    }

    run(command) {
        console.log(`> Executing: ${command.name}`);
        command.execute();
        this.history.push(command);
        this.undone = [];
    }

    printHistory() {
        this.history.forEach(command => console.log(`   ・ "${command.name}"`))
    }

    undoCommand() {
        if (this.history.length > 0) {
            var command = this.history.pop();
            console.log(`   ・ Undo ${command.name}`);
            command.undo();
            this.undone.push(command);
        } else {
            console.log('No previous command');
        }
    }

    redoCommand() {
        if (this.undone.length > 0) {
            var command = this.undone.pop();
            console.log(`   ・ Redo ${command.name}`);
            command.execute();
            this.history.push(command);
        } else {
            console.log('No undone command');
        }
    }

}

module.exports = new Conductor();