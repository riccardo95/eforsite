function check_firstLoad(){
    if(!localStorage.getItem("first")) {
            localStorage.setItem("first",true);
        } else 
            {
                localStorage.setItem("first",false);
        }
};

function func(){
    document.writeln("cazzo");
};
