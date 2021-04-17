import { Notifier } from './Notifier.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

const notify = Notifier.notifier({
    title: 'Lembre-se',
    body: 'Não se esqueça'
})

const App = {
    async start() {
        try {
            await Notifier.init()

            Emitter.on('countdown-start', notify)
            Emitter.on('countdown-end', Timer.init)


            //Timer.init()

        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }