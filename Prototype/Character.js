class Character {

    constructor(name) {
        this._name = name || 'Unnamed';
        this._skillList = [];
    }

    set name(n) {
        this._name = n;
    }

    get name() {
        return this._name;
    }

    get skillList() {
        return this._skillList;
    }

    addSkill(s) {
        this._skillList.push(s);
    }

    clone() {
        var prototype = Object.getPrototypeOf(this);
        var cloned = Object.create(prototype);
        cloned._name = this._name;
        cloned._skillList  = [...this._skillList];
        return cloned;
    }

}

module.exports = Character;