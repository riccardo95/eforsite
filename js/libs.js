function check_firstLoad(){
    var data = new Date();
    if(!localStorage.getItem("first")) {
            localStorage.setItem("first",true);
            localStorage.setItem("data",data.toLocaleString());
            localStorage.setItem("os",window.navigator.platform);
            localStorage.setItem("lang",window.navigator.language);
            //window.navigator.oscpu
        } else 
            {
                localStorage.setItem("first",false);
        }
};

function func(){
    document.writeln(window.navigator.language);
};
