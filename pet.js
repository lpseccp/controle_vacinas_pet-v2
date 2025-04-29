<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Detalhes do Pet</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1 id="petTitle">Detalhes do Pet</h1>

    <div class="info-section">
      <h2>Vacinas</h2>
      <div class="input-group">
        <input type="text" id="vaccineInput" placeholder="Adicionar vacina" />
        <button onclick="addInfo('vacinas')">Salvar Vacina</button>
      </div>
      <ul id="vacinasList"></ul>
    </div>

    <div class="info-section">
      <h2>Remédios</h2>
      <div class="input-group">
        <input type="text" id="medicineInput" placeholder="Adicionar remédio" />
        <button onclick="addInfo('remedios')">Salvar Remédio</button>
      </div>
      <ul id="remediosList"></ul>
    </div>

    <div class="info-section">
      <h2>Consultas</h2>
      <div class="input-group">
        <input type="text" id="consultationInput" placeholder="Adicionar consulta" />
        <button onclick="addInfo('consultas')">Salvar Consulta</button>
      </div>
      <ul id="consultasList"></ul>
    </div>

    <button onclick="voltarInicio()">Voltar</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
