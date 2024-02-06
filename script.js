function tooggleMode() { /*nome função*/
    const html = document.documentElement /*variavel*/

    /*
    if(html.classList.contains('light')) { se essa condição for verdadeira
        html.classList.remove('light') remove o light
    } else {                          se não
        html.classList.add('light')   executa o light
    }
    */

     /**Resumindo */
    html.classList.toggle('light')
}