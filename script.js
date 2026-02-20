let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let tot = document.getElementById("tot");
let tot_serv = document.getElementById("tot_serv");

function calculo_area() {
    let comprimento = Number(inp1.value) || 0;
    let largura = Number(inp2.value) || 0;

    let soma = comprimento * largura;
    tot.textContent = `${soma} m²`;
    return soma;
}

inp1.addEventListener("input", calculo_area);
inp2.addEventListener("input", calculo_area);

let btn = document.getElementById("fix");
let esco = document.getElementById("esco");

function menu_cob_fix() {
    esco.classList.toggle("escondido");
}

btn.addEventListener("click", menu_cob_fix);

let valor_tot = 0;

document.querySelectorAll(".servico").forEach(element => {
    element.addEventListener("click", () => {
        calculo_serv(Number(element.dataset.valor));
    });
});

function calculo_serv(valor_m2) {
    let area = calculo_area();
    valor_tot = valor_m2 * area;

    tot_serv.textContent = `R$ ${valor_tot.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}