let walletCount = 1;
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


function addWallet(){
    let walletContainer = document.getElementsByClassName('wallet-container')[0];
    walletContainer.appendChild(createWallet("Wallet "+(walletCount),generateRandomString(44)));
    walletCount += 1;
}

function copyKey(){
    let walletAddress = this.previousElementSibling.innerText;
    navigator.clipboard.writeText(walletAddress).then(()=>{
        console.log("Text copied to clipboard");
    }).catch(err=>{
        console.log("Could not copy to clipboard");
    })
}

function deleteWallet(){
    this.parentElement.remove();
}

function createWallet(walletName,key){
    let wallet = document.createElement('div');
    wallet.classList.add('wallet-name');
    wallet.innerText = walletName;

    let walletKey = document.createElement('div');
    walletKey.classList.add('public-key');
    walletKey.innerText = key;

    let copyButton = document.createElement('button');
    copyButton.classList.add('copy-button');
    copyButton.innerText = 'Copy';
    copyButton.addEventListener('click',copyKey);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click',deleteWallet);

    let walletWrapper = document.createElement('div');
    walletWrapper.classList.add('wallet-wrapper');

    walletWrapper.appendChild(wallet);
    walletWrapper.appendChild(walletKey);
    walletWrapper.appendChild(copyButton);
    walletWrapper.appendChild(deleteBtn);
    return walletWrapper;
}


