const notFound = (req, res) => {
    res.status(404).send('<h1>404 <br> Route does not exist</h1>');
}
module.exports = notFound;