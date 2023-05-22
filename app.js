let btnsNode = document.querySelectorAll('.btn');
let tabsNode = document.querySelectorAll('.tabs');

btnsNode.forEach(function (item) {
    item.addEventListener('click',() =>{
        let currentBtn = item;
        let tabId = '#'+(currentBtn.getAttribute('data-tab'));
        let currentTabs = document.querySelector(tabId);
       
        btnsNode.forEach(function (item) {
            item.classList.remove('active')
        })
        tabsNode.forEach(function (item) {
            item.classList.remove('active')
        })

        currentBtn.classList.add('active');
        currentTabs.classList.add('active');
    });

});