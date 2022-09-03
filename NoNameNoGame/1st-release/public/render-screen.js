export default function renderScreen(screen, game, requestAnimationFrame) {
    const context = screen.getContext('2d')
    context.clearRect(0, 0, screen.width, screen.height)
    
    context.fillStyle = 'blue' // adicionar variavel color para o PLAYER
    context.fillRect(game.state.player.x, game.state.player.y, 1, 1) // adicionar variavel width/height to player

    context.fillStyle = 'yellow' // adicionar variavel color para o PLAYER
    context.fillRect(game.state.objectives.x, game.state.objectives.y, 1, 1) // adicionar variavel width/height to objectives

    for (const enemyId in game.state.enemies) {
        if (Object.hasOwnProperty.call(game.state.enemies, enemyId)) {
            const enemy = game.state.enemies[enemyId];
            context.fillStyle = enemy.color
            context.fillRect(enemy.x, enemy.y, 1, 1) // adicionar variavel width/height to enemy
        }
    }

    requestAnimationFrame(() => {
        renderScreen(screen, game, requestAnimationFrame)
    })
}