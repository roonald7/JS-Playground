export default function createKeyboardListener(document, subject) {
    const observer = {
        type: 'keyboardListener',
        update: function (command) {
            console.log(`I'm a keyboardListener with ${command.keyPressed}`)
        }
    }

    subject.attach(observer)

    document.addEventListener('keydown', handleKeydown)

    function handleKeydown(event) {
        const keyPressed = event.key

        const command = {
            keyPressed
        }

        subject.notify(command)
    }
}