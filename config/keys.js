// check to see if in PROD || DEV env, return keys accordingly
if (process.env.NODE_ENV === 'production') {
    module.exports('./prod')
} else {
    module.exports('./dev')
}