// when file starts with lower case r, exports small function
// when exporting a class, upper case letter at start of file
module.exports = (req, res, next) => {
    //next --> function that is called when middleware finishes running
    // next passes off request to (next) middleware in the chain
    if (!req.user) {
        return res.status(401).send({ error: 'You must be logged in' })
    }

    next()
}