let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let tot = document.getElementById("tot");
let tot_serv = document.getElementById("tot_serv");

function calculo_area() {
    let comprimento = Number(inp1.value) || 0;
    let largura = Number(inp2.value) || 0;

    let soma = comprimento * largura;
    tot.textContent = `${soma.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    })} m²`;
    return soma;
}

inp1.addEventListener("input", calculo_area);
inp2.addEventListener("input", calculo_area);

let btn = document.getElementById("fix");
let esco = document.getElementById("esco");

let btn_ret = document.getElementById("ret");
let esco_ret = document.getElementById("esco_ret");

function menu_cob_fix() {
    esco.classList.toggle("escondido");
}

btn.addEventListener("click", menu_cob_fix);

function menu_cob_ret(){
    esco_ret.classList.toggle("escondido_ret");
}

btn_ret.addEventListener("click", menu_cob_ret);
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

let  busca = document.getElementById("busca");

function buscar_item(){
    let itens = document.getElementsByClassName("servico");
    let item_map = []; 

    for(let item of itens){
        item_map.push({
            elemento: item,
            texto: item.textContent.trim()
        });
    }   
    let texto_busca = busca.value.toLowerCase()
    let resultados = item_map.filter(item => item.texto.toLowerCase().includes(texto_busca)).slice(0,5);

    console.log(resultados);
    let resultado;
    let ul_busca = document.getElementById("ul_busca");
    ul_busca.innerHTML = "";
    for(resultado of resultados)
    {
        let clone = resultado.elemento.cloneNode(true);
        clone.addEventListener("click", () =>{
            calculo_serv(Number(clone.dataset.valor));
            ul_busca = innerHTML = "";
            busca.value =clone.textContent.trim();
        });
        ul_busca.appendChild(clone);
        
    }
    
}

busca.addEventListener("input", buscar_item);