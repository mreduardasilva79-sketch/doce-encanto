const { useState } = React;
function Form() {
  const [f, setF] = useState({ nome: "", prod: "", qtd: "1", data: "" });
  const [e, setE] = useState({});
  const [sent, setSent] = useState(false);
  const up = (k, v) => setF((p) => ({ ...p, [k]: v }));
  function submit(ev) {
    ev.preventDefault();
    const n = {};
    if (!f.nome.trim()) n.nome = "Informe seu nome.";
    if (!f.prod) n.prod = "Escolha um produto.";
    if (!(Number(f.qtd) > 0)) n.qtd = "Quantidade inválida.";
    if (!f.data) n.data = "Escolha a data de retirada.";
    setE(n);
    if (Object.keys(n).length) return setSent(false);
    window.open(
      wa(
        `Olá! Sou ${f.nome}. Gostaria de encomendar ${f.qtd}x ${f.prod} para retirada em ${f.data}.`,
      ),
      "_blank",
      "noopener",
    );
    setSent(true);
  }
  return (
    <form onSubmit={submit} noValidate>
      <div>
        <label htmlFor="n">Nome</label>
        <input
          id="n"
          value={f.nome}
          onChange={(x) => up("nome", x.target.value)}
        />
        {e.nome && <div className="err">{e.nome}</div>}
      </div>
      <div>
        <label htmlFor="p">Produto</label>
        <select
          id="p"
          value={f.prod}
          onChange={(x) => up("prod", x.target.value)}
        >
          <option value="">Selecione</option>
          {P.map((x) => (
            <option key={x[0]}>{x[0]}</option>
          ))}
        </select>
        {e.prod && <div className="err">{e.prod}</div>}
      </div>
      <div>
        <label htmlFor="q">Quantidade</label>
        <input
          id="q"
          type="number"
          min="1"
          value={f.qtd}
          onChange={(x) => up("qtd", x.target.value)}
        />
        {e.qtd && <div className="err">{e.qtd}</div>}
      </div>
      <div>
        <label htmlFor="d">Data de retirada</label>
        <input
          id="d"
          type="date"
          value={f.data}
          onChange={(x) => up("data", x.target.value)}
        />
        {e.data && <div className="err">{e.data}</div>}
      </div>
      <button className="btn" type="submit">
        Enviar pedido pelo WhatsApp
      </button>
      {sent && (
        <div className="ok">
          Pedido montado — confirme o envio na aba do WhatsApp.
        </div>
      )}
    </form>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Form />);
