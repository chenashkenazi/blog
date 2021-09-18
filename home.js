// projects elements variables
const projectBoxDiv = document.getElementsByClassName('project-box');
const projectTitle = document.getElementsByClassName('project-title');

// add event listener to projects boxes and pull project title
for (var i = 0; i < projectBoxDiv.length; i++) {
    let title;
        switch(i) {
            case 0:
                title = 'SimonGame';
                break;
            case 1:
                title = 'MusicPlayer';
                break;
            case 2:
                title = 'EasyEvent';
                break;
            case 3:
                title = 'PizzaDelivery';
                break;
            default:
              title = 'None';
        }
    projectBoxDiv[i].addEventListener('click', (e) => {
        projectTitle.innerHTML = title;
        location.assign(`/project.html#${title}`);
    }); 
}

