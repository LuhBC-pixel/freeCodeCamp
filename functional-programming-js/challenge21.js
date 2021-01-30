function urlSlug(title) {
    const arr = title.trim().toLowerCase().split(' ');
    
    const array = arr.filter(elem => elem !== '');

    const string = array.join('-');

    return string;
}