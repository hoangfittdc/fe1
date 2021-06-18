const mainPhoto = document.querySelector('#main-photo');
const thumbnails = document.querySelectorAll('.thumbnail img');
thumbnails.forEach(element => {
    element.addEventListener('click', function () {
        // Lấy ra giá trị của thuộc tính src của hình nhỏ bị clicked:
        const src = this.getAttribute('src');
        //Gán giá trị cho thuộc tính src của hình lớn main-photo
        mainPhoto.setAttribute('src', src);
        //Properties
        // mainPhoto.src = src;
    });
});