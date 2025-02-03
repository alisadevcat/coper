import React from 'react'

export const Cards = () => {
  return (
    <section class="screen ultra-dark">
      <div class="container">
        <div class="row screen-container">
          <div class="col-sm-12 col-md-6 col-lg-4 card">
            <span class="material-symbols-outlined primary">handshake</span>
            <div class="card-right">
              <h4 class="card-title">
                Not just about monetary profit—it's about human cooperation
              </h4>
              <p class="p">
                Just imagine: with your investments, you can change someone's
                life, business, and contribute to truly significant endeavours
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 card">
            <span class="material-symbols-outlined warning">currency_exchange</span>
            <div class="card-right">
              <h4 class="card-title">
                Invest with us: Empower change, support ventures
              </h4>
              <p class="p">
                There are no limits, regardless of race, skin colour, location,
                or socioeconomic status. Coper is a place for everyone
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 card">
            <span class="material-symbols-outlined error">favorite</span>
            <div class="card-right">
              <h4 class="card-title">
                Your reputation: the currency of success in Coper
              </h4>
              <p class="p">
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
