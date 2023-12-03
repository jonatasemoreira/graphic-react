
import './Header.css';

export default function Header(){
    return (
        <>
            <div className="container-header">
                <div className="title-header">
                    <h1>Avaliações</h1>
                </div>
                <div className="filter">
                    <label htmlFor="unidades">
                        Unidades
                        <select name="unidades" id="unidades">
                            <option value="unidade1">SAVASSI</option>
                            <option value="unidade2">NOVO ELDORADO</option>
                        </select>
                    </label>
                    <label htmlFor="profissionais" className='espacamento'>
                        Profissionais
                        <select name="profissionais" id="profissionais">
                            <option value="profissional1">Natalisson</option>
                            <option value="profissional2">Lucas</option>
                            <option value="profissional3">Bruna</option>
                        </select>
                    </label>
                    <label htmlFor="periodo" className='espacamento'>
                        Período
                        <select name="periodo" id="periodo">
                            <option value="periodo1">00/00/0000</option>
                        </select>
                    </label>
                </div>
            </div>
        </>
    )
}