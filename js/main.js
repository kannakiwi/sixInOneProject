(function(){

    var filterBG_lg , filterBG_md;

    function Resetbackground()
    {
        if(window.innerWidth >= 768)
        {
            filterBG_md.style.display = 'none';
            filterBG_lg.style.display = 'block';
        }
        else
        {
            filterBG_lg.style.display = 'none';
            filterBG_md.style.display = 'block';
        }
    }

    function init()
    {
        filterBG_lg = document.getElementById('filter_bg_lg');
        filterBG_md = document.getElementById('filter_bg_md');

        Resetbackground();

        window.addEventListener( 'resize' , Resetbackground , false );
    }

    window.addEventListener( 'load' , init , false );
    

})();
