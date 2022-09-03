export default function createGameListener(functionObserved, subject) {
    const observer = {
        type: 'gameListener',
        update: function (command) {
            functionObserved(command)
        }
    }

    subject.attach(observer)
}