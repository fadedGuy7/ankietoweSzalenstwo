import React, { useEffect } from 'react'
import { openInNewTab } from '../../functions/openInNewTab'
import { NavLink } from 'react-router-dom';


const DisplayInfo = () => {
    return (
        <div className='container'>
            <div className='dashboard margin'>
                <div className="container px-2 has-text-centered window margin py-5">
                    <h1 className="title companiesTop has-text-black-ter">
                        <p>Rejestracja do firm</p>
                    </h1>
                    <p id='description' className="">
                        Za chwilę zostaniesz przeprowadzony przez proces rejestracji w około dwudziestu panelach badawczych. Liczba wydaje się duża, zajmie Ci to jednak dużo mniejsz czasu niż mogłoby się wydawać. <strong>Zostaniesz poproszony o rejestrację tylko w sprawdzonych i w 100% wypłacalnych firmach</strong>, aby cieszyć się jak najwyższymi zarobkami konieczne jest zapisanie się do jak największej ilości z nich. <br />Rejestracje możesz przerwać po zapisaniu się do dowolnej z firm i wrócić do całego procesu po krótkiej przerwie czy też na następny dzień - nasz serwis zapamięta Twoje ostatnie położenie i wróci do niego kiedy ponownie wejdziesz w zakładkę "Pierwsze kroki". Ilość paneli  jest tak duża ze wględu na to, że pewne z firm robią od czasu do czasu przerwy w badaniach, spowodowane są one czy to brakiem zamówień czy też przerwą techniczną w ich działaniach, w tym czasie bedziemy zarabiali na innych panelach - w skali roku zliczając wszystkie wypłaty zarobimy znacznie większą kwotę.<br />
                        <strong>Wytrwałość jest kluczem do sukcesu</strong>
                    </p>
                    <p className='companiesTop'>
                        <NavLink to='/rejestracjadofirm/1'>
                            <button className='button is-link mt-4' id='next'>
                                Przejdź do pierwszej firmy
                            </button>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DisplayInfo
