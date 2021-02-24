import { useState } from "react";
import styles from './escolha-de-turma.module.css';

export default function EscolhaDeTurma() {

    const [notaDaAvaliacao, setNotaDaAvaliacao] = useState(-1);
    const [formacao, setFormacao] = useState(-1);
    const [assiduidade, setAssiduidade] = useState(-1)
    const [pontualidade, setPontualidade] = useState(-1)
    const [tempoDeRede, setTempoDeRede] = useState(-1)
    const [tempoDeInstituicao, setTempoDeInstituicao] = useState(-1)
    const [pontuacao, setPontuacao] = useState(0);

    function calculaPontuacao() {
        if(notaDaAvaliacao != -1 && 
            formacao != -1 &&
            assiduidade != -1 && 
            pontualidade != -1 &&
            tempoDeRede != -1 && 
            tempoDeInstituicao != -1){
              
                const pontuacao = parseFloat(notaDaAvaliacao + formacao + assiduidade + pontualidade + tempoDeRede + tempoDeInstituicao) / 2;
                setPontuacao(pontuacao);
            }else{
                return;
            }
    }

    function notaAvaliacao(e){
        setNotaDaAvaliacao(parseFloat((e.target.value > -1) && (e.target.value < 101) ? e.target.value : 0));
    }
    return (
        <div className={styles.container}>
            
            <div>
            <h4>Calculo para escolha de turma</h4>
                <h5>Sua nota é</h5>
                <h1 className={styles.nota}>{pontuacao}</h1>
           
                <label>Nota da última avaliação da prátiva</label><br/>
                <input type="number" max={100} min={0} decimal="1" onChange={notaAvaliacao}name="notaAv" />
            </div>
            <div>

            <label>Formação</label><br/>
            <select onChange={(e) => { setFormacao(parseFloat(e.target.value )) }}>
                <option value="-1">SELECIONE</option>
                <option value="3.5">Doutorado ou mestrado 3,5</option>
                <option value="3">Especialização 3</option>
                <option value="2.5">Graduação na área de educação 2,5</option>
                <option value="1.5">Magistério 1,5</option>
            </select>
            </div>
            <div>

            <label>Assiduidade</label><br/>
            <select onChange={(e) => { setAssiduidade(parseFloat(e.target.value )) }}>
                <option value="-1">SELECIONE</option>
                <option value="2">Nenhuma falta 2</option>
                <option value="1">1 falta 1</option>
                <option value="0.5">2 faltas 0,5</option>
                <option value="0">3 faltas ou mais 0</option>
            </select>
            </div>
            <div>

            <label>Pontualidade</label><br/>
            <select onChange={(e) => { setPontualidade(parseFloat(e.target.value )) }}>
                <option value="-1">SELECIONE</option>
                <option value="2">Nenhum atraso ou saída antecipada 2</option>
                <option value="1">1 atraso ou saída antecipada 1</option>
                <option value="0.5">2 atraso ou saída antecipada 0,5</option>
                <option value="0">3 ou mais atrasos ou saídas antecipadas 0</option>
            </select>
            </div>
            <div>

            <label>Tempo de rede</label><br/>
            <select onChange={(e) => { setTempoDeRede(parseFloat(e.target.value )) }}>
                <option value="-1">SELECIONE</option>
                <option value="1.5">MAIOR QUE 20 ANOS - 1,5 PONTOS</option>
                <option value="1.4">DE 18 ANOS E 1 DIA A 20 ANOS - 1,4 PONTOS</option>
                <option value="1.3">DE 16 ANOS E 1 DIA A 18 ANOS - 1,3 PONTOS</option>
                <option value="1.2">DE 14 ANOS E 1 DIA A 16 ANOS - 1,2 PONTOS</option>
                <option value="1.1">DE 12 ANOS E 1 DIA A 14 ANOS - 1,1 PONTOS</option>
                <option value="1">DE 10 ANOS E 1 DIA A 12 ANOS - 1,0 PONTO</option>
                <option value="0.9">DE 8 ANOS E 1 DIA A 10 ANOS - 0,9 PONTOS</option>
                <option value="0.8">DE 6 ANOS E 1 DIA A 8 ANOS - 0,8 PONTOS</option>
                <option value="0.7">DE 4 ANOS E 1 DIA A 6 ANOS - 0,7 PONTOS</option>
                <option value="0.6">DE 2 ANOS E 1 DIA A 4 ANOS - 0,6 PONTOS</option>
                <option value="0.5">1 ANOS A 2 ANOS - 0,5 PONTOS</option>
                <option value="0">MENOS DE 1 ANO - 0,0 PONTO</option>
            </select>
            </div>
            <div>

            <label>Tempo de instituição</label><br/>
            <select onChange={(e) => { setTempoDeInstituicao(parseFloat(e.target.value )) }}>
                <option value="-1">SELECIONE</option>
                <option value="1">MAIS DE 18 ANOS - 1,0 PONTO</option>
                <option value="0.9">DE 16 ANOS E 1 DIA A 18 ANOS - 0,9 PONTOS</option>
                <option value="0.8">DE 14 ANOS E 1 DIA A 16 ANOS - 0,8 PONTOS</option>
                <option value="0.7">DE 12 ANOS E 1 DIA A 14 ANOS - 0,7 PONTOS</option>
                <option value="0.6">DE 10 ANOS E 1 DIA A 12 ANOS - 0,6 PONTOS</option>
                <option value="0.5">DE 08 ANOS E 1 DIA A 10 ANOS - 0,5 PONTOS</option>
                <option value="0.4">DE 06 ANOS E 1 DIA A 08 ANOS - 0,4 PONTOS</option>
                <option value="0.3">DE 04 ANOS E 1 DIA A 06 ANOS - 0,3 PONTOS</option>
                <option value="0.2">DE 02 ANOS E 1 DIA A 04 ANOS - 0,2 PONTOS</option>
                <option value="0.1">DE 01 ANOS A 2 ANOS - 0,1 PONTOS</option>
                <option value="0">MENOS DE 1 ANO - 0,0 PONTO</option>
            </select>
            </div>

            <button type="button" onClick={calculaPontuacao} className={styles.button}>Calcular</button>
            <div className={styles.footer}>
                By Deni / Alex
            </div>
        </div>
    )
}
