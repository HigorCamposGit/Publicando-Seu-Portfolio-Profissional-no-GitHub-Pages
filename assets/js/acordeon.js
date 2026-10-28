const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        // 1. Fecha TODOS os acordeons da página
        acordeonTriggers.forEach((otherTrigger) => {
            otherTrigger.parentElement.classList.remove('open')
        })

        // 2. Se o que foi clicado NÃO estava aberto, abre ele
        if (!isOpen) {
            acordeon.classList.add('open')
        }
    })
})