import { envs } from './config/environments/environments.js'
import { authenticate, syncUp } from './config/database/database.js'
import app from './app.js'

async function main() {
    try {
        await authenticate()
        await syncUp()
    } catch (error) {
        console.log(error)
    }
}

main()

app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`)
})