const development = 'development'
const production = 'production'

const mode = development
let base_URL = ''

if(mode === production){
    base_URL = ''
}
else{
    base_URL = 'http://localhost:5000/'
}

export {base_URL}
