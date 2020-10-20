import React from 'react'

const Test = () => {
    return (
        <div className="container px-2 has-text-centered">
        <h1 className="title companiesTop has-text-black-ter" onClick={() => {
                document.getElementById('next').disabled=false}
            }>
            {/* <p>{company.name}</p> */}
            <p>Surveyo24</p>
            <button className='button is-success'>REJESTRACJA</button>
        </h1>
        <p id='description' className="">
            Kolejny ciekawy panel ze stosunkowo dużą liczbą ankiet przesyłanych wprost na nasz adres email, nie musimy więc zaprzątać sobie głowy wchodzeniem na ich stronę. Dodatkowo posiadają oni bardzo niski <strong>limit wypłaty 5$</strong>. To zapewne od nich dostaniecie pierwsze zarobione na ankietach pieniądze :)

3            Kolejny panel który wysyła nam ankiety na email, widełki jeżeli chodzi o płatności są bardzo jasno podane na ich stronie. Zależą one od czasu jaki wyliczą, że  będzie potrzebny na wypełnienie danego badania od 40 gr za bardzo krótkie do 5,20 zł za dłuższe ankiety. Po rejestracji musimy uzupełnić nasz profil aby dostawać ankiety dostosowane konkretnie pod nas, dzięki temu bedziemy u nich mieli stosunkowo mało odrzuceń.

11            Firma działająca na rynku od 2014 roku. Co ciekawe wymagają ukończonych jedynie 13 lat aby móc z nimi zarabiać.

4           Firma która mimo upływu lat wciąż cieszy się świetną opinią wśród swoich panelistów (czyli nas :)). Aby brać udział w ich badaniach odwiedzamy firmową stronę raz dziennie, to w zupełności wystarczy. Ostatnimi czasy skupili się na poszukiwaniu ludzi ze wsi, jednak każdy znajdzie tu badanie dla siebie.

            Strona ze zdecydowanie najniższym progiem wyplat. Musimy uzbierać jedynie 2 euro! Za ankiete otrzymujemy od 5 do 250 punktow. Po uzbieraniu 340 punktów czyli równowartości wspomnianych 2 euro możemy zlecić pierwszy przelew. 1700 punktów warte jest 10 euro czyli ok 45 złotych. Panel zazwyczaj informuje nas o nowych ankietach, musimy jednak zalogować się na stronie aby je wypełnić.

            Bardzo dobry panel oferujące uczciwe i przyzwoite stawki(<strong>minimalnie 1 zł</strong>, a zdażają się bardzo krótkie ankiety), nawet kiedy nie zakwalifikujemy się do danego badania dostajemy symboliczną nagrodę w postaci kilku- kilkunastu puntków. Minimalny próg wypłaty to 50 zł(1000 punktów). Strona poza ankietami daje nam możliwość wzięcia udziału w badaniach typu <i>„wywiady indywidualne, fokusowe, tajemniczy klient”.</i><br/>
            Aby brać udział w badaniach musimy rególarnie odwiedzać stronę

            Anglojęzyczny serwis, dla osób nie znających języka angielskiego polecam korzystanie z przeglądarki google chrome która na bierząco tłumaczy nam całe witryny. Więcej na ten temat w czytelni. Jedena z wiekszych firm pozwalająca nam zarabiać zarówno na ankietach jak i oglądaniu reklam, filmów czy wykonywaniu zadań. Serwis typu ySense jednak znacznie bardziej rozbudowany. Poradnik na temat tego jak na nim zarabiać znajduje się w naszej czytelni, narazie skupmy się na rejestracji aby mieć tą najnudniejszą część pracy z głowy.

            W panelu tym możemy zarabiać już od 15 roku życia. Aby zaczęli przyznawać nam ankiety musimy najpierw uzupełnić nasz profil. Bardzo warto jest brać czynny udział w ich badaniach ponieważ zapraszają wybrane osoby do znacznie bardziej złożonych i opłacalnych zadań za które możemy otrzymać nawet kilkadziesiąt złotych!

            Tej firmy chyba nikomu nie musze przedstawiać, często można usłyszeć tą nazwe czy to przy wyborach politycznych, czy programach telewizyjnych, jedyną niespodzianką dla Ciebie może być fakt, że ankietowani wcale nie udzielają odpowiedzi za darmo :) Badania wysyłają na email więc nie musimy zaprzątać sobie głowy odwiedzaniem ich strony(chyba, że przyjdzie czas wypłaty ;))

            Panel istniejący juz od wielu lat, jeden z nabardziej doświadczonych graczy na naszym rynku. Minimalny wiek 16 lat.

            Firma obecna na rynku od 2018 roku, przewiduje nieco inny system nagradzania swoich panelistów. Zebrane punkty wymienić możemy na fizyczne nagrody miedzy innymi kosmetyki, książki, artykuły gospodarstwa domowego, gadżety motoryzacyjne czy ogrodnicze. Zalecamy odwiedzić stronę zapoznać się z ofertą i zadecydować o rejestracji ewentualnie przejść do następnej firmy.

            Panel będzie wymagał od nas podania numeru telefonu w celu ograniczenia zakładania multi kont. Zadzwonią do Ciebie tylko raz w celu weryfikacji

            Ciekawy panel istniejący od 2000 roku. Poza wypełnianiem ankiet możemy sie również stać częścią ich społeczności by aktywnie brać udział w dyskusjach na dane tematy oraz testować produkty. Posiadają w swojej ofercie bardzo wiele nagród.

            Firma przesyła padania na naszą skrzynkę email, posiadając zgodę rodzica możemy przyłaczyć sie do panelu juz w wieku 13 lat.

            Firma zazwyczaj przesyła nam ankiety na adres email warto jednak zajrzeć tam co 2 dni upewnić się, że niczego nie przeoczyliśmy

            Zarobki odpojedynczego badania w tej firmie wachać się będą od 20 groszy za niezakwalifikowanie się do ankiety do kilku złotych za jej poprawne wypełnienie
</p>
        <p className='companiesTop'>
                <button className='button is-link mt-4' id='next' disabled={true}>
                    Przejdź do następnej firmy
                </button>
        </p>
    </div>
    )
}

export default Test
