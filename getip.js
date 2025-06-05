fetch('https://api.vore.top/api/IPdata')
    .then(response => response.json())
    .then(data => {
        const ip = data.ipinfo.text;
        const province = data.ipdata.info1;
        const city = data.ipdata.info2;
        const isp = data.ipdata.isp;
        const area_code = data.ipinfo.cnip;
        const nation = data.ipdata.info1;
        let welcomeMessage;
        if (area_code) {
            welcomeMessage = `你的IP: ${ip}来自${province}${city}${isp}`;
        } else {
            welcomeMessage = `你的IP: ${ip}来自${nation}${isp}`;
        }
        document.getElementById('welcome').textContent = welcomeMessage;
    })
    .catch(error => console.error(error));