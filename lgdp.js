let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';
let lgpdhtml = `
<div class="lgpd">
<div class="lgpd--left">
    Nós utilizamos cookies para melhorar sua experiência do usuário.
    Para conferir detalhadamente todos os cookies utilizados, leia nossa <a href="">politíca de privacidade</a>
</div>
<div class="lgpd--right">
    <button>Ok</button>
</div>
</div>
<link rel="stylesheet" href="CSS/index.css" />
`;

let lsContent = localStorage.getItem('lgpd');
if (!lsContent) {
    document.body.innerHTML += lgpdhtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async () => {
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if (json.error != '') {
            let id = '123'; // json.id;
            localStorage.setItem('lgpd', id);
        }
    });
}
