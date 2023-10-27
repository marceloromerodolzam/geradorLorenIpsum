let InputParagrafosLorem = document.getElementById('InputParagrafosLorem');
let btnLorem = document.getElementById('btnLorem');
let saidaLoremIpsum = document.getElementById('saidaLoremIpsum');
let minimoPalavraParagrafo = document.getElementById('minimoParagrafo');

btnLorem.addEventListener('click', function(){

    var numParagrafos = InputParagrafosLorem.value;
    var minimopalavraParagrafo = minimoPalavraParagrafo.value;
    let loremIpsumParagrafo = '';
    const textoLoremIpsum = [
        ' lorem', ' ipsum', ' dolor', ' sit', ' amet', ' consectetur', ' adipiscing', ' elit', ' Sed', ' do', ' eiusmod',
        ' tempor', ' incididunt', ' ut', ' labore', ' et', ' dolore', ' magna', ' aliqua', ' Ut', ' enim', ' ad', ' minim',
        ' veniam', ' quis', ' nostrud', ' exercitation', ' ullamco', ' laboris', ' nisi', ' ut', ' aliquip', ' ex', ' ea',
        ' commodo', ' consequat', ' Duis', ' aute', ' irure', ' dolor', ' in', ' reprehenderit', ' in', ' voluptate',
        ' velit', ' esse', ' cillum', ' dolore', ' eu', ' fugiat', ' nulla', ' pariatur', ' Excepteur', ' sint', ' occaecat',
        ' cupidatat', ' non', ' proident', ' sunt', ' in', ' culpa', ' qui', ' officia', ' deserunt', ' mollit', ' anim',
        ' id', ' est', ' laborum'
    ];

    if(numParagrafos <= 0 || minimopalavraParagrafo <= 0){

        alert('Por favor, preencha os campos!');

    }else if(numParagrafos > 0 &&minimopalavraParagrafo > 0){

        let frase = '';
        for(let i = 0; i < numParagrafos; i++){

            for(let i = 0; i < minimopalavraParagrafo; i++){

                frase += `${textoLoremIpsum[Math.floor(Math.random() * textoLoremIpsum.length)]}`;

            }

            loremIpsumParagrafo += `<p>${frase.trim()}</p>`;

        }

    }
    saidaLoremIpsum.innerHTML = loremIpsumParagrafo;

});