export default function createGame(screen) {
    const state = {
        player: {
            x: 0,
            y: 0,
            color: 'blue',
            width: 1,
            height: 1
        },
        enemies: {
        },
        objectives: {
        },
        screen: {
            width: screen.width,
            height: screen.height
        }
    }

    function addEnemy(command) {
        const enemyId = command.enemyId
        const enemyX = command.enemyX
        const enemyY = command.enemyY
        const enemyColor = command.color

        state.enemies[enemyId] = {
            x: enemyX,
            y: enemyY,
            color: enemyColor,
            width: 1,
            height: 1
        }
    }

    function removeEnemy(command) {
        const enemyId = command.enemyId

        delete state.enemies[enemyId]
    }

    function movePlayer(command) {
        console.log(`> TODO: Implement movePlayer`)
    }

    function chechColision() {
        console.log(`> TODO: Implement checkColision`)
    }

    return {
        addEnemy,
        movePlayer,
        removeEnemy,
        state
    }
}