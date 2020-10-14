const thanks = document.getElementById('thanks');
const noThanks = document.getElementById('no-thanks');
const submitSubscribe = document.forms.subscribe;
const submitReject = document.forms.reject;
const openPopup = function(popup){
    popup.classList.add("popup_is-opened");}

submitSubscribe.addEventListener('submit', function (event){
    event.preventDefault();
    openPopup(thanks)
})

submitReject.addEventListener('submit', function (event){
    event.preventDefault();
    openPopup(noThanks)
})