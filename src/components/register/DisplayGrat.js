import React, { useEffect } from 'react'
import { openInNewTab } from '../../functions/openInNewTab'
import { NavLink } from 'react-router-dom';


const DisplayGrat = () => {
    return (
        <div className="container has-text-centered window p-5 py-5">

                    <p className="title companiesTop has-text-black-ter">
                        Gratulacje przebrnąłeś przez proces rejestracji!

                    </p>
                    <p id='description' className="">
                        Gratulujemy zacięcia i wytrwałości, teraz juz będzie z górki!<br/>
                        Najźmudniejsza część pracy już za Tobą, będąc na tym etapie z pewnością masz juz conajmniej kilka ankiet do wypełnienia. Nie zrażaj się jeśli czasami w trakcie trwania ankiety zostaniesz z niej odrzucony. Zdarza się, że firmy zlecające badania celują tylko w konkretną grupę społeczna (np. kobiety w wieku 22-35 lat zamieszkujące tereny wiejskie), wytrwale ruszaj po kolejną ankietę a już nie długo będziesz się mógł cieszyć pierwszymi wypłaconymi środkami. W między czasie zapraszam Cię również do czytelni gdzie staramy sie odpowiedzieć na większość pytań, jeśli jednak coś wciąż jest dla Ciebie nie jasne śmiało korzystaj z formularza kontaktowego!<br className='mb-2'/> <strong>Teraz pozostaje mi już tylko życzyć wysokich zarobków i wytrwałości! <br/>Powodzenia!</strong>
                    </p>
                    <p className='companiesTop'>
                        Blabla
                    </p>
                </div>
    )
}

export default DisplayGrat
