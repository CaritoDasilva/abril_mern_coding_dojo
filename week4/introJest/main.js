const soldTikets = (money, movie) => {
    const availableMovies = ['Batman', 'The Avengers', 'Spiderman', 'Blackwidow', 'Enter the void'];
    const ticketValue = 9000;
    if(availableMovies.includes(movie) && money >= ticketValue) {
        return true;
    } else {
        return false;
    }
};

module.exports = soldTikets;

