import { dbConnection } from './db/dbConnection.js'
import {app} from './app.js'
const port = process.env.PORT || 3000

dbConnection().then(
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    }),

    console.log('Database connected')
)

