// customVisual.js
// Função para criar a tabela
function createTable(data) {
    // Seleciona o elemento body e adiciona uma tabela
    var table = d3.select("body").append("table").attr("class", "fund-facts-table");

    // Adiciona o cabeçalho
    table.append("thead").append("tr")
        .selectAll("th")
        .data(["Metric", "Value"])
        .enter()
        .append("th")
        .text(function(d) { return d; });

    // Adiciona as linhas da tabela
    var rows = table.append("tbody")
        .selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // Adiciona as células
    rows.selectAll("td")
        .data(function(d) { return [d.Metric, d.Value]; })
        .enter()
        .append("td")
        .text(function(d) { return d; });

    // Adiciona estilo básico
    d3.select("head").append("style").text(`
        .fund-facts-table {
            width: 100%;
            border-collapse: collapse;
        }
        .fund-facts-table th, .fund-facts-table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .fund-facts-table th {
            background-color: #f2f2f2;
            text-align: left;
        }
    `);
}

// Dados de exemplo
var exampleData = [
    {Metric: "Benchmark", Value: "MSCI Emerging Markets Index (USD)"},
    {Metric: "Inception Date", Value: "Apr 2018"},
    {Metric: "Share Class", Value: "Early II"},
    {Metric: "Firm AUM ($M)", Value: "$7,274"},
    {Metric: "Emerging Markets AUM ($M)", Value: "$3,349"},
    {Metric: "Fund AUM ($M)", Value: "$204"}
];

// Chama a função com os dados de exemplo
createTable(exampleData);
