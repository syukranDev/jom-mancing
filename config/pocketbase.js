const POCKETBASE_URL = 'http://127.0.0.1:8090/'

import Pocketbase from 'pocketbase'

let pb = new Pocketbase(POCKETBASE_URL)

export default pb