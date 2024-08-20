const addZero = (i) => (i < 10 ? '0' + i : i);

module.exports = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1); // Months are zero-indexed
    const day = addZero(date.getDate());

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};