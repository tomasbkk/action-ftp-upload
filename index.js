const core = require('@actions/core')
const ftp = require("basic-ftp") 

async function main() {
    try {
        const user = core.getInput('user')
        const password = core.getInput('password')
        const host = core.getInput('host')
        const port = core.getInput('port') || '21'
        const secure = core.getInput('secure') || false
        const src = core.getInput('src')
        const dest = core.getInput('dest') || './'
        const verbose = core.getInput('verbose') || false
        
        const client = new ftp.Client()
        client.ftp.verbose = verbose
        client..ftp.log = core.debug;

        await client.access({
            host: host,
            port: port,
            user: user,
            password: password,
            secure: secure
        })

        await client.uploadFrom(src, dest)

        client.close()
        
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
