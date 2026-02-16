class Parquimetro {
    constructor() {}

    #time
    time(value) {
        if (value == 1) {
            return 30;
        } else if (value == 1.75) {
            return 60;
        } else if (value == 3) {
            return 120;
        } else {
            return 0;
        }
    }

    pay(value) {
        let time;
        let tip;

        if (value >= 1 && value < 1.75) {
            time = this.time(1);
            tip = value - 1;

        } else if (value >= 1.75 && value < 3) {
            time = this.time(1.75);
            tip = value - 1.75;

        } else if (value >= 3) {
            time = this.time(3);
            tip = value - 3;

        } else {
            time = null;
            tip = 0;
        }

        return {time, tip};
    }
}

const parquimetro = new Parquimetro();

function pay() {
    const value = parseFloat(document.getElementById('value').value.replace(',', '.'));

    if (value < 1 || isNaN(value)) {
        document.getElementById('message').innerHTML = 'Valor inserido não é suficiente para comprar tempo. Por favor, insira um valor válido.';
        return;
    } 

    const result =parquimetro.pay(value);

    document.getElementById('message').innerHTML = `<b>Tempo comprado:</b> ${result.time} minutos.`;

    if (result.tip > 0) {
        document.getElementById('message').innerHTML += `</br><b>Troco:</b> R$ ${result.tip.toFixed(2).replace('.', ',')}`;
    }
}