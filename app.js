window.addEventListener('DOMContentLoaded', ()=> {

    // Drop down menu which is settings menu in this project
    const settingsMenu = document.querySelector('.settings_menu');
    const onlineImage = document.querySelector('.online');
    const darkbtn = document.getElementById('dark_btn');
    onlineImage.addEventListener('click', ()=> {
        settingsMenuToggle();
    })

    function settingsMenuToggle(){
         settingsMenu.classList.toggle('menu_settings_height');
    }
     // //Drop down menu which is settings menu in this project


  


  //  Dark mode button
    // darkbtn.addEventListener('click', ()=> {
    //     darkBtnMode();
    // })

    darkbtn.onclick = function(){
        darkbtn.classList.toggle('darkBtn_on')
        document.body.classList.toggle('dark-theme');

        if(localStorage.getItem('theme') === 'light'){
            localStorage.setItem('theme', 'dark');
        }else{
            localStorage.setItem('theme', 'light');
        }
    }


    if(localStorage.getItem('theme') === 'light'){
        darkbtn.classList.toggle.remove('darkBtn_on');
        document.body.classList.remove('dark-theme');
    }else if (localStorage.getItem('theme') === 'dark'){
        darkbtn.classList.add('darkBtn_on')
        document.body.classList.add('dark-theme');
    }else{
        localStorage.setItem('theme', 'light');
    }
  //  //Dark mode button
})