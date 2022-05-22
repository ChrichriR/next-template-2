import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

export default function TermsOfUse() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const onPressagreeing = () => {
    checked
      ? alert("Bon choix, profitez bien de votre cookie !")
      : alert("Dommage, pas de cookie pour vous ...");
  };
  return (
    <Layout link pageTitle="Terms of use">
      <div>Venez du côté obscur, on a des cookies !</div>
      <br />
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Cochez ici pour un cookie.
      </label>
      <br />
      <br />
      <button onClick={onPressagreeing}>Ok</button>
    </Layout>
  );
}