const fs = require('fs')
function getFile(fileName){
    try{
        const text = fs.readFileSync(fileName, 'utf-8')
        return text
    }
    catch(err){
        return 'File not found'
    }
}

module.exports = {getFile}