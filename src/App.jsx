import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions.jsx";
import * as s from "./styles/globalStyles.jsx";
import styled from "styled-components";

import "./App.css";
import Hero from "./components/hero/hero.jsx";
import WalletConnection from "./components/walletConnection/walletConnection.jsx";





export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;



export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;



function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [showSite, setshowSite] = useState(false);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "'A Capuzzella",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: "0.00",
    GAS_LIMIT: 0,
    MARKETPLACE: "opensea",
    MARKETPLACE_LINK: "https://opensea.io/collection/e-capuzzelle",
    SHOW_BACKGROUND: false,
  });


  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  const show = () => {
    document.body.style.overflow = "auto";
    document.getElementById('contenitoreGenerale').style.overflow = "auto";
    // document
    //   .getElementById("progettoegallery")
    //   .scrollIntoView({ behavior: "smooth" });
    $("#progettoegallery").velocity("scroll", { 
      container: $("#contenitoreGenerale"),
      duration: 4000
    });
    setshowSite(true);
  };
  useEffect(() => {
    getConfig();
    
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
    setshowSite(false);
    setTimeout(() => {
      
      document.body.style.overflow = "hidden";
      document.getElementById('contenitoreGenerale').style.overflow = "hidden";
    }, 100);
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <>
    <div id="contenitoreGenerale">

  
      <Hero showSite={showSite} setShowSite={() => show()}></Hero>
      <s.SpacerSmall />
      <section id="crypta"></section>
      {
        <div id="containerShow" className={showSite ? "show" : "hide"}>
          <section id="progettoegallery">
            <WalletConnection></WalletConnection>
            <div id="containerProgettoeGallery">
              <section id="progetto">
                <div className="">
                  <h1>💀Che cos’è Crypta Capuzzelle?💀</h1>
                </div>
                <div className="">
                  <p>
                    {" "}
                    Il progetto <b>“Crypta Capuzzelle”</b> rappresenta la
                    trasformazione di uno dei luoghi più suggestivi e misteriosi
                    di Napoli in un’opera digitale unica. Le capuzzelle del
                    cimitero delle fontanelle sono teschi posti sulla superficie
                    delle pareti antropizzate con l’obiettivo di liberare le
                    anime dei defunti che, altrimenti, sarebbero rimaste in
                    eterno in balia del limbo. Con gli NFT, queste capuzzelle
                    diventano oggetti digitali dotati di una nuova vita, grazie
                    alla tecnologia blockchain che ne garantisce l’autenticità e
                    l’unicità. La collezione rappresenta un omaggio alla cultura
                    e alla tradizione napoletana, ma anche un esempio di come
                    l’arte digitale possa rielaborare e arricchire il patrimonio
                    culturale del nostro paese.
                  </p>
                </div>
              </section>
              <section id="gallery">
              <img className="one" src="config/images/gallery_one.png"  alt="" />
                <img className="two" src="config/images/gallery_two.png" alt="" />
                <a href="https://opensea.io/collection/e-capuzzelle" target="_blank" id="collection">SCOPRI LA COLLEZIONE SU OPENSEA</a>
              </section>
            </div>
          </section>
          <section id="roadmap">
            <div id="roadmapContainer">
              <div id="title">Roadmap</div>
              <div id="description">
                Il progetto “Crypta Capuzzelle” rappresenta la trasformazione di
                uno dei luoghi più suggestivi e misteriosi di Napoli in un’opera
                digitale unica.
              </div>
              <div className="boxroad">
              <label className="roadmapItem checkbox stroked">
              <input type="checkbox" disabled checked/><span>
                Lancio adozione 50 capuzzelle</span>
              </label>
              <label className="roadmapItem checkbox stroked">
              <input type="checkbox" disabled checked/><span>
                Creazione canale Discord</span>
              </label>
              <label className="roadmapItem checkbox">
              <input type="checkbox" disabled /><span>
                Fine adozione 50 capuzzelle</span>
              </label>
              <label className="roadmapItem checkbox">
              <input type="checkbox" disabled /><span>
                Merch esclusivo</span>
              </label>
              <label className="roadmapItem checkbox">
              <input type="checkbox" disabled/><span>
                Drop nuove capuzzelle</span>
              </label>
              <label className="roadmapItem checkbox">
              <input type="checkbox" disabled/><span>
                Collaborazioni</span>
              </label>
              <label className="roadmapItem checkbox">
              <input type="checkbox" disabled/><span>
                Fase 3</span>
              </label>
              </div>
            </div>
            <div id="social">
              <a href="https://discord.com/invite/cnDefkn74b
              " target="_blank">
              <div className="follow discord">
                <img className="imgfollow" src="config/images/discordlogo.svg" alt="" />
              </div></a><a href="https://rarible.com/collection/polygon/0x304dbda4452f3e1337c8b95f1dc5087c0c96cbdd/items
              " target="_blank">
              <div className="follow rarible">
                <img className="imgfollow" src="config/images/rarible.svg" alt="" />
              </div></a><a href="https://www.instagram.com/crypta_capuzzelle/
              " target="_blank">
              <div className="follow instagram">
                <img className="imgfollow" src="config/images/instagramlogo.svg" alt="" />
              </div></a>
              {/* <a href="https://www.instagram.com/crypta_capuzzelle/">
                <img src="config/images/instagram.svg" alt="instagram" />
              </a> */}
              {/* <iframe
                src="https://discord.com/widget?id=1110284316640038922&theme=dark"
                height="250"
                allowtransparency="true"
                frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe> */}
              {/* <img src="config/images/discord.svg" alt="discord" /> */}
            </div>
          </section>
          <section id="lecape">
            <div id="title">Le cape</div>
            <div id="description">
              Il progetto “Crypta Capuzzelle” rappresenta la trasformazione di
              uno dei luoghi più suggestivi e misteriosi di Napoli in un’opera
              digitale unica.
            </div>
            <div id="containerCape">
              <div className="capa">
                <div className="img">
                  <img
                    src="https://dl.openseauserdata.com/cache/originImage/files/6e53bf68f67357991cb8652c28c5b5ee.png"
                    alt="lorenzo gravina"
                  />
                </div>
                <div className="name">Lorenzo Gravina</div>
                <div className="role">Artist</div>
              </div>
              <div className="capa">
                <div className="img">
                  <img src="https://dl.openseauserdata.com/cache/originImage/files/3b0463d5fab754ccda02375f63816ee9.png" alt="Antonio Ferrarioli" />
                </div>
                <div className="name">Antonio Ferraioli</div>
                <div className="role">Head of Stuff</div>
              </div>
              <div className="capa">
                <div className="img">
                  <img src="https://dl.openseauserdata.com/cache/originImage/files/ab392901b19050cfc626840fe4f972ec.png" alt="Costantino Sorrentino" />
                </div>
                <div className="name">Costantino Sorrentino</div>
                <div className="role">Dev</div>
              </div>
            </div>
          </section>
          {/* <section id="team">
            <div>
              <h1>Team</h1>
            </div>
            <div className="card-group">
              <div className="card">
                <img src="config/images/1.png" alt="" />
                <h3>Antonio Ferraioli</h3>
                <p>Head of Stuff</p>
              </div>
              <div className="card">
                <img src="config/images/lorenzo_gravina.png" alt="" />
                <h3>Lorenzo Gravina</h3>
                <p>Artist</p>
              </div>
            </div>
        </section> */}
          <section id="faq">
            <div className="container-faq">
              <h1>FAQ</h1>
              <div className="accordion">
                <details>
                  <summary>Cos'è una NFT?</summary>
                  <p>
                  Una NFT (Non-Fungible Token) è un tipo di token crittografico unico che rappresenta la proprietà o la provenienza di un bene digitale, come un'opera d'arte, un video, un'animazione o un altro tipo di contenuto digitale. A differenza delle criptovalute tradizionali, le NFT sono uniche e non intercambiabili.
                  </p>
                </details>
                
                
                
              <details>
                  <summary>Come posso acquistare una NFT su Crypto Capuzzelle?</summary>
                  <div>
                  Per acquistare una NFT su Crypto Capuzzelle, segui questi semplici passaggi:
                  <ul>
                    <li>
                    Crea un account su Wallet Mask, se non ne hai già uno.
                    </li>
                    <li>
                      Accedi al sito Crypta Capuzzelle attraverso il browser di Meta Mask
                    </li>
                    <li>
                      Clicca sul bottone "adotta una capuzzella"
                    </li>
                    <li>
                    Segui le istruzioni per completare il pagamento utilizzando la criptovaluta accettata dalla piattaforma.

                    </li>
                    <li>
                    Una volta completato il pagamento, la NFT sarà trasferita nel tuo wallet o dovrai importala manualmente

                    </li>
                  </ul>


                  </div>
                </details>

                <details>
                  <summary>
                  Quali criptovalute accetta Crypto Capuzzelle per l'acquisto delle NFT?
                  </summary>

                  <p>
                  Attualmente, Crypto Capuzzelle accetta il MATIC
                  </p>
                </details>
                <details>
                  <summary>Come posso pagare le NFT su Crypto Capuzzelle?</summary>

                  <p>
                  Puoi pagare le NFT su Crypto Capuzzelle utilizzando la criptovaluta accettata dalla piattaforma. Durante il processo di acquisto, verrai guidato per effettuare il pagamento utilizzando il tuo portafoglio digitale. Assicurati di avere abbastanza fondi nella tua criptovaluta scelta per completare l'acquisto.
                  </p>
                </details>
                <details>
                  <summary>Cosa succede dopo aver acquistato una NFT?</summary>

                  <p>
                  Dopo aver completato l'acquisto di una NFT su Crypto Capuzzelle, la NFT sarà visualizzabile sulla pagina Openasea di capuzzelle e potrai importala manualmente sul tuo wallet. Da lì, sarai in grado di visualizzare, gestire e scambiare le tue NFT. Potrai anche mostrarle ad altri utenti o esporle sul mercato della piattaforma, se lo desideri.
                  </p>
                </details>
                <details>
                  <summary>Posso rivendere le NFT acquistate su Crypto Capuzzelle?</summary>

                  <p>
                  Sì, se possiedi una NFT acquistata su Crypto Capuzzelle, sei libero di rivenderla. La rivendita delle NFT può essere effettuata sulla piattaforma stessa o su altri mercati di NFT. Tieni presente che le condizioni e le commissioni possono variare a seconda della piattaforma scelta per la rivendita.
                  </p>
                </details>
             
              </div>
            </div>
          </section>
          <section id="footer">
            <img src="config/images/crypta_logo.jpg" alt="" />
            <div className="logosocial">
              <a href="https://www.instagram.com/crypta_capuzzelle/" target="_blank">
            <img className="social" src="config/images/Instagram - Negative.svg" alt="" /></a>
            <a href="https://discord.com/invite/cnDefkn74b" target="_blank">
            <img className="social" src="config/images/Discord - Negative.svg" alt="" /></a>
            </div>
            <p>
              Copyrights – 2023 CRYPTA CAPUZZELLE by <a href="https://www.linkedin.com/in/lorenzo-gravina-a4175037/" target="_blank"> Lorenzo Gravina</a> - <a href="https://www.linkedin.com/in/antonioferraioli/" target="_blank">Antonio
              Ferraioli</a> & <a href="https://www.linkedin.com/in/costantino-sorrentino/" target="_blank">Costantino Sorrentino</a> . All rights reserved
            </p>
          </section>
        </div>
      }
      {/* </s.Container>
      </s.Screen> */} 
       </div>
    </>
  );
}

export default App;
