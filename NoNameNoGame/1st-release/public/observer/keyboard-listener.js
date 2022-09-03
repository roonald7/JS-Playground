export default function createKeyboardListener(document, subject) {
    const observer = {
        type: 'keyboardListener',
        update: function (command) {
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