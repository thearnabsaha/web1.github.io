//?######################################## humburger menu ###############################################3
document.querySelector(".humburger").addEventListener('click',function () {
    document.querySelector(".mobileNav").classList.toggle('open')
})
document.querySelector(".humburger").addEventListener('blur',function () {
    document.querySelector(".mobileNav").classList.remove('open')
})