document.querySelector('.forgive-button').addEventListener('click', function() {
    this.textContent = "THANK YOU, पापा!";
    this.style.backgroundColor = '#28a745';
    document.querySelector('.message').textContent = "पापा, आप सबसे अच्छे हैं!";
    this.classList.add('bounce');
});

