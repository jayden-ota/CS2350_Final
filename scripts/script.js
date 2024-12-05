const add_task = document.getElementById('task');
const t_form = document.querySelector('form');
const t_list = document.getElementById('tasks');

add_task.addEventListener('click', function(event) {
    const t_disp = t_form.style.display;
    if (t_disp === 'block') {
        const name = document.getElementById('name').value;
        const prio = document.getElementById('prio_sel').value;
        const date = document.getElementById('t_date').value;
        const loc = document.getElementById('loc_sel').value;
        const li = document.createElement('li');
        const link = document.createElement('a');
        const name_div = document.createElement('div');
        const prio_div = document.createElement('div');
        const prio_label = document.createElement('span');
        name_div.textContent = name;
        prio_div.textContent = 'Priority: ';
        switch(prio) {
            case 'prio_high':
                prio_label.textContent = 'High';
            break;
            case 'prio_mod':
                prio_label.textContent = 'Moderate';
            break;
            case 'prio_low':
                prio_label.textContent = 'Low';
            break;
        }
        prio_label.classList.add(prio);
        prio_div.appendChild(prio_label);
        link.appendChild(name_div);
        link.appendChild(prio_div);
        li.appendChild(link);
        t_list.appendChild(li);
        t_form.style.display = 'none';
    } else {
        t_form.style.display = 'block';
    }
});
