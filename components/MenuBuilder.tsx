"use client";

import { Check, Minus, Plus, Share2, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const sizes = [
  { id: "300ml", label: "300 ml", price: 14.9 },
  { id: "500ml", label: "500 ml", price: 17.9 },
  { id: "1l", label: "1 litro", price: 34.9 },
];

type Extra = {
  id: string;
  label: string;
  price: number;
  image?: string;
};

const extras: Extra[] = [
  { id: "nutella", label: "Nutella", price: 7 },
  { id: "mousse-morango", label: "Mousse de morango", price: 4, image: "/images/menu/morango.png" },
  { id: "mousse-maracuja", label: "Mousse de maracujá", price: 4, image: "/images/menu/maracuja.png" },
  { id: "ovomaltine", label: "Ovomaltine", price: 4 },
  { id: "ouro-branco", label: "Ouro Branco", price: 3.5 },
  { id: "morango", label: "Morango", price: 3.5, image: "/images/menu/morango.png" },
  { id: "granola", label: "Granola", price: 3.5 },
  { id: "leite-po", label: "Leite em pó", price: 3 },
  { id: "leite-condensado", label: "Leite condensado", price: 3 },
  { id: "bis", label: "Bis", price: 3 },
  { id: "banana", label: "Banana", price: 3, image: "/images/menu/banana.png" },
];

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function MenuBuilder() {
  const [sizeId, setSizeId] = useState(sizes[0].id);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [feedback, setFeedback] = useState("");

  const size = sizes.find((item) => item.id === sizeId) ?? sizes[0];
  const chosenExtras = extras.filter((item) => selectedExtras.includes(item.id));
  const unitPrice = size.price + chosenExtras.reduce((sum, item) => sum + item.price, 0);
  const total = unitPrice * quantity;

  function toggleExtra(id: string) {
    setSelectedExtras((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setFeedback("");
  }

  async function shareOrder() {
    const extraText = chosenExtras.length ? chosenExtras.map((item) => item.label).join(", ") : "sem adicionais";
    const text = `Meu pedido Açaí Raiz: ${quantity}x ${size.label}, ${extraText}. Total estimado: ${money.format(total)}.`;

    try {
      if (navigator.share) {
        await navigator.share({ title: "Meu pedido Açaí Raiz", text });
        setFeedback("Pedido pronto para compartilhar.");
        return;
      }

      await navigator.clipboard.writeText(text);
      setFeedback("Pedido copiado. Agora é só enviar no seu canal de contato.");
    } catch {
      setFeedback("Seu pedido está montado e pronto para continuar.");
    }
  }

  return <div className="menu-builder">
    <div className="menu-controls">
      <div className="menu-step-heading"><span>01</span><div><b>Escolha o tamanho</b><small>Selecione uma opção</small></div></div>
      <div className="size-options" role="radiogroup" aria-label="Tamanho do açaí">
        {sizes.map((item) => <button key={item.id} type="button" role="radio" aria-checked={sizeId === item.id} className={sizeId === item.id ? "selected" : ""} onClick={() => setSizeId(item.id)}><span>{item.label}</span><b>{money.format(item.price)}</b><Check size={17} /></button>)}
      </div>

      <div className="menu-step-heading extras-heading"><span>02</span><div><b>Adicione seus favoritos</b><small>Opcional · escolha quantos quiser</small></div></div>
      <div className="extra-options">
        {extras.map((item) => {
          const selected = selectedExtras.includes(item.id);
          return <button key={item.id} type="button" aria-pressed={selected} className={selected ? "selected" : ""} onClick={() => toggleExtra(item.id)}>
            <span className={`extra-thumb${item.image ? " has-image" : ""}`} aria-hidden="true">
              {item.image ? <Image src={item.image} alt="" width={46} height={46} /> : <Sparkles size={15} />}
            </span>
            <span className="extra-name">{item.label}</span>
            <b>+ {money.format(item.price)}</b>
            <span className="extra-check"><Check size={14} /></span>
          </button>;
        })}
      </div>
    </div>

    <aside className="order-summary" aria-label="Resumo do pedido">
      <div className="summary-top"><span><ShoppingBag size={19} /> SEU PEDIDO</span><Sparkles size={20} /></div>
      <div className="summary-product"><small>AÇAÍ RAIZ</small><h3>{size.label}</h3><p>{chosenExtras.length ? `${chosenExtras.length} adicional${chosenExtras.length > 1 ? "is" : ""} selecionado${chosenExtras.length > 1 ? "s" : ""}` : "Cremoso e puro, sem adicionais"}</p></div>
      <div className="summary-extras">
        {chosenExtras.length ? chosenExtras.map((item) => <div key={item.id}><span>{item.label}</span><b>{money.format(item.price)}</b></div>) : <p>Escolha os adicionais ao lado para personalizar.</p>}
      </div>
      <div className="quantity-row"><span>Quantidade</span><div><button type="button" aria-label="Diminuir quantidade" onClick={() => setQuantity((value) => Math.max(1, value - 1))}><Minus size={16} /></button><b>{quantity}</b><button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantity((value) => Math.min(10, value + 1))}><Plus size={16} /></button></div></div>
      <div className="summary-total"><span>Total estimado</span><strong>{money.format(total)}</strong></div>
      <button type="button" className="menu-share" onClick={shareOrder}>Continuar pedido <Share2 size={18} /></button>
      <a className="menu-location" href="#onde">Prefere retirar na fábrica?</a>
      <p className="menu-feedback" aria-live="polite">{feedback}</p>
    </aside>
  </div>;
}
