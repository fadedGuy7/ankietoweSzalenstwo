import React from 'react'
import Svg001Recruitment from '../../Icons/001Recruitment'
import Svg006Contract from '../../Icons/006Contract'
import Stat from '../../Icons/002Statistics'
import Presentation from '../../Icons/003Presentation'
import Wallet from '../../Icons/008Wallet'
import Bar from '../../Icons/009Bar'
import Leader from '../../Icons/007Leader'
import OpenMail from '../../Icons/011OpenEmail'
import Shield from '../../Icons/012Shield'
import TimeIsMoney from '../../Icons/013TimeIsMoney'
import WorkTime from '../../Icons/010WorkTime'


const PierwszeKroki = (props) => {
    const handleClick = () => {
        props.history.push('/rejestracjadofirm/');
    }
    return(
        <div className='container is-max-desktop window margin'>
            <div className='mx-2 has-text-centered '>
                    <p className='mt-4 mb-1'>
                            <Svg001Recruitment width='8em' height='8em'/>
                        </p>
                <p className='has-text-grey-dark title'>Dzień dobry!</p>

                <article className="media mediaWelcome">
                    <figure className="media-left welcomeIcon is-hidden-touch">       
                        <Svg006Contract width='8em' height='8em'/>
                    </figure>
                    <div className="media-content has-text-centered m-auto">
                            
                    Bardzo cieszę się, że zastanawiasz się nad dołączeniem do grona panelistów, właśnie tak nazywają się ludzie którzy aktywnie biorą udział w ankietach organizowanych przez firmy zajmujące się badaniem rynku.<br/>
Wiele osób dziwi to, że można w ten sposób dorobic. Dorobić to słowo klucz, raczej nie spodziewałbym sie wyplat pozwalających na samodzielne opłacenie czynszu oraz wyżywienie choćby samego siebie. Jeśli jednak z zacięciem przyłożymy się do tego zadania może nam to pomóc odłożyć trochę grosza na wakacje czy inne przyjemności. Wiele osób jest zaskoczonych faktem, że po drugiej stronie znajduje się ktoś kto jest w stanie płacić za tego typu pracę. Pozwól, że troszkę rozjaśnię sytuacje. <br/>
                            <p className='my-4 is-hidden-desktop'>
                                <Svg006Contract width='6em' height='6em'/>
                            </p>
                    </div>
                </article>
                <article className="media mediaWelcome">
                    <div className="media-content has-text-centered m-auto">
                        Poczynając od największych korporacji przez małe i średnia firmy a na uczelniach, Wspólnocie Europejskiej i partiach politycznych kończąc, wszyscy oni przeprowadzają badania czy to na temat oferowanych przez nich produktów, usług czy też planowanych inwestycji i inicjatyw społecznych (miedzy innymi opinii na temat rożnego typu elektrowni czy to jądrowych czy energii odnawialnych w Waszym regionie). Inwestują przepotężne środki na to aby ich produkt/ usługa jak najlepiej wpisywała się w gusta ich klientów(czytaj nas <i className="far fa-smile-beam"></i>) Jeśli produkt zostanie dobrze ztargetowany przyniesie im dużo większe korzyści niż środki zainwestowane w badania rynku, do tego jednak czasu pojawia się tutaj szansa dla Ciebie na w miarę przyjemny i prosty zarobek. 
                        <p className='my-4 is-hidden-desktop'>
                            <Stat width='6em' height='6em'/>
                        </p>
                    </div>
                    <figure className="media-right welcomeIcon is-hidden-touch">       
                        <Stat width='9em' height='9em'/>
                    </figure>
                </article>

                <article className="media mediaWelcome">
                    <figure className="media-left welcomeIcon is-hidden-touch">       
                        <Presentation width='9em' height='9em'/>
                    </figure>
                    <div className="media-content has-text-centered m-auto">
                        W ankietach będziesz pytany/a o ulubione marki soków, chipsów czy mrożonek warzywnych. O to czy palisz, czy zamierzasz rzucić, o ulubione trunki, antyperspiranty, szczoteczki do zębów oraz wiele innych rzeczy. Najwiekszą zaletą tego typu dorobku są nienormowane godziny w których będziesz poświęcać czas na powierzone badania. Ankiety możesz wypelniac w drodze do pracy/ szkoły, czy samej pracy/ szkole <i className="far fa-smile-beam"></i> czekając w poczekalni u lekarza czy po prostu oglądając telewizje. 
                        <p className='my-4 is-hidden-desktop'>
                            <Presentation width='6em' height='6em'/>
                        </p>
                    </div>
                </article>   
                    
                <article className="media mediaWelcome">
                    <div className="media-content has-text-centered m-auto">
                        Jest jednak coś co niewątpliwie przybliży nas do wspomnianych wakacji czy jakiej kolwiek innej sprawy na którą zbieramy, jest to systematyczność. Im skurpulatniej będziesz podchodził dostępnych badań, tym lepszym zarobkiem będziesz się mógł cieszyć pod koniec miesiąca. Cała zabawa polega na tym, że rejestrujemy się do możliwie dużej ilości wypłacalnych firm. Wiele z nich wysyła ankity dość sporadycznie powiedzmy 4-8 w skali miesiąca co przeciąga wypłatę o kolejne tygodnie. W pewnej chwili jednak kiedy kilka firm zazębi się z wypłatami możemy wyciągnąć nawet kilka set złotych miesięcznie.
                    <p className='my-4 is-hidden-desktop'>
                            <Wallet width='6em' height='6em'/>
                        </p>
                    </div>
                    <figure className="media-right welcomeIcon is-hidden-touch">       
                        <Wallet width='7em' height='7em'/>
                    </figure>
                </article>

                <article className="media mediaWelcome">
                    <figure className="media-left welcomeIcon is-hidden-touch">       
                        <Shield width='8em' height='8em'/>
                    </figure>
                    <div className="media-content has-text-centered m-auto">
                        Nie musisz się jednak obawiać nie ma żadnych kar za odstąpienie od współpracy. Jeśli zdecydujesz, że to zajęcie nie jest dla Ciebie możesz w każdej chwili wypisać się ze wspomnianych programów lub po prostu przestać wchodzić w przesyłane przez firmy ankiety a z czasem przestaniesz dostawać od nich wiadomości.
                        Praca z nami jest w 100% bezpieczna, możesz jedynie zyskać.
                        <p className='my-4 is-hidden-desktop'>
                            <Shield width='6em' height='6em'/>
                        </p>
                    </div>
                </article>

                <article className="media mediaWelcome">
                    <div className="media-content has-text-centered m-auto">
                        Dodatkowe pieniądze przydadzą się szczególnie teraz kiedy w erze pandemii wszyscy zastanawiamy się nad niepewnym jutrem.
                        Dlaczego więc nie spróbować?
                        Jeśli napotkasz jakiekolwiek trudności, śmiało korzystaj z formularza kontaktowego.
                        <p className='my-4 is-hidden-desktop'>
                            <OpenMail width='5em' height='5em'/>
                        </p>
                    </div>
                    <figure className="media-right welcomeIcon is-hidden-touch">       
                        <OpenMail width='8em' height='8em'/>
                    </figure>
                </article>

                <article className="media mediaWelcome">
                    <figure className="media-left welcomeIcon is-hidden-touch">       
                        <Leader width='8em' height='8em'/>
                    </figure>
                    <div className="media-content has-text-centered m-auto">
                        Część z proponowanych przez nas firm po przejściu procesu rejestracji będzie wysyłać ankiety na wskazany przez Ciebie adres email, na część stron jednak będzie trzeba codziennie zaglądać. Aby ułatwić Ci to zadanie po przeprowadzeniu Cię przez proces rejestracji (możesz przerwać go rejestracji w dowolnej liczbie firm, nasza witryna zapamięta punkt w ktorym rejestracja do firm została przerwana i wróci do niego po kolejnym logowaniu) oddamy w Twoje ręce naszą autorską aplikacje internetową dzięki której na bieżąco będziesz mógł monitorować wszystkie strony sponsorów, tak aby niczego nie pominąć i móc maksymalizować zyski.
                        <p className='my-4 is-hidden-desktop'>
                            <Leader width='6em' height='6em'/>
                        </p>
                    </div>
                </article>

                <article className="media mediaWelcome">
                    <div className="media-content has-text-centered m-auto">
                        Osoby które wytrwale współpracują z podanymi przez nas firmami po nabraniu wprawy zarabiają ok 300 – 500 zł na rękę miesięcznie poświęcając nie więcej niż 45 minut dziennie. Daje to średnio <strong>4800 złotych w ciągu roku</strong>, jest to na prawde niezła sumka. Pieniądz leży w internecie trzeba tylko odpowiednio poklikać <i className="far fa-smile-beam"></i>&nbsp;
                        Osoby najaktywniej biorące udział w zadaniach z biegiem czasu mogą liczyć również na darmowe próbki produktów za przetestowanie których również zostaną wynagrodzone! Większość stron posiada minimum które trzeba zebrać aby zrealizować wypłatę, zazwyczaj jest to od 20 do 50 złotych.
                        <p className='my-4 is-hidden-desktop'>
                            <TimeIsMoney width='6em' height='6em'/>
                        </p>
                    </div>
                    <figure className="media-right welcomeIcon is-hidden-touch">       
                        <TimeIsMoney width='8em' height='8em'/>
                    </figure>
                </article>

                <article className="media mediaWelcome">
                    <figure className="media-left welcomeIcon is-hidden-touch">       
                        <WorkTime width='8em' height='8em'/>
                    </figure>
                    <div className="media-content has-text-centered m-auto">
                        Nie masz nic do stracenia, nie ma więc na co czekać zabierajmy się do roboty, musimy zarejestrować się w ok 20 firmach. Uda Ci się zrobić to szybciej niż mogłoby Ci się wydawać.
                        Spróbuj a jestem przekonany, że zostaniesz z nami na dłużej.<br/>
                        <p className='has-text-weight-bold'>
                            Wytrwałość jest kluczem do sukcesu
                        </p>
                        <p className='my-4 is-hidden-desktop'>
                            <WorkTime width='6em' height='6em'/>
                        </p>
                    </div>
                </article>
                    <div className="field has-text-centered my-6">
                        <p className="control">
                                <button className="button is-large is-link" onClick={ handleClick }>
                                    Przejdzmy do rejestracji!
                                </button>
                            </p>
                        </div>
                </div>
        </div>
    )
}

export default (PierwszeKroki)
