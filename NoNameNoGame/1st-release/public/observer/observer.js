export default class Observer {
    constructor(subject) {
        subject.attach(this)
    }
}