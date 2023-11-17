window.alert = function(message,timeout=null){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerText= 'confirm';
    alert.classList.add('alert');
    alert.setAttribute('style',
        'position:fixed';
        'top: 100px';
        'left: 50px';
        'padding: 20px';
        'border-radius: 10px';
        'box-shadow: 0 10px 5px 0 #00000022';
        'display: flex';
        'flex-direction:column';
    )
    alertButton
    alert.innerHTML = '<span style="padding:10px">${message}</span>';
    alert.appendChild(alertButton);
    alertButton.addEventListener(click, (e)=>{
        alert.remove();
    });
    if (timeout != null) {
        setTimeout(()=>{
            alert.remove();
        }, Number(timeout))
    }
    document.body.appendChild(alert);
} 