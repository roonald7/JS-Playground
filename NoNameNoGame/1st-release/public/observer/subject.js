export default function createSubject() {
    const observers = []

    function attach(observer) {
        console.log(`> Adding a new observer ${observer.type}`)
        observers.push(observer)
    }

    function detach(observer) {
        console.log(`> Removing the observer ${observer.type}`)
        delete observers[observer]
    }

    function notify(command) {
        console.log(`> Notifying ${observers.length} observers with this command ${command}`)

        for(const observer in observers) {
            observers[observer].update(command)
        }
    }

    return {
        attach,
        detach,
        notify
    }
}