const status = document.getElementById('status');
const button = document.querySelector('button');
const local_complete = localStorage.getItem('complete');

if(local_complete) {
    status.textContent = 'Complete';
    status.style.color = '#00d500';
}

button.addEventListener('click', function(event) {
    status.textContent = 'Complete';
    status.style.color = '#00d500';
    localStorage.setItem('complete', true);
});
