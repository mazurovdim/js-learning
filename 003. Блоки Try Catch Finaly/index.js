const fs = require('fs')
function getFile(fileName){
    try{
        const text = fs.readFileSync(fileName)
        return text
    }
    catch(err){
        return 'File not found'
    }
}

module.exports = {getFile}