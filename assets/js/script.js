const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}
// toast Bootstarp End

// for input number  field
document.querySelector(".your_class").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});