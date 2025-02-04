import React from 'react'

export const Cards = () => {
  return (
    <section className="screen ultra-dark">
      <div className="container">
        <div className="row screen-container">
          <div className="col-sm-12 col-md-6 col-lg-4 card">
            <span className="material-symbols-outlined primary">handshake</span>
            <div className="card-right">
              <h4 className="card-title">
                Not just about monetary profit—it's about human cooperation
              </h4>
              <p className="p">
                Just imagine: with your investments, you can change someone's
                life, business, and contribute to truly significant endeavours
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 card">
            <span className="material-symbols-outlined warning">currency_exchange</span>
            <div className="card-right">
              <h4 className="card-title">
                Invest with us: Empower change, support ventures
              </h4>
              <p className="p">
                There are no limits, regardless of race, skin colour, location,
                or socioeconomic status. Coper is a place for everyone
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 card">
            <span className="material-symbols-outlined error">favorite</span>
            <div className="card-right">
              <h4 className="card-title">
                Your reputation: the currency of success in Coper
              </h4>
              <p className="p">
                No longer do you need to feel ashamed to ask your loved ones for
                money before receiving your salary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
