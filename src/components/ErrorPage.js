import React from 'react'

const ErrorPage = () => {
    return (
        <div className="container has-text-centered window p-5 py-5">
            <p className="title companiesTop has-text-black-ter">
                Podana strona nie istnieje .. :(

            </p>
            <p id='description' className="">
                .. lub nie masz uprawnień aby ją zobaczyc. <br/>Jeśli zostałeś przekierowany tytaj automatycznie, proszę abyś opisał problem w formularzu zgłaszania błędu.<br />
                Z góry dzięki za pomoc :)
            </p>
        </div>
    )
}

export default ErrorPage
