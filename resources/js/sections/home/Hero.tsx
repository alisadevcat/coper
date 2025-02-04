import img from "../../../assets/phone_splash.svg";

export const Hero = () => {
    return (
        <div className="main-screen">
            <section className="main-screen-wrapper">
                <div className="phone">
                    <img src={img} alt="" />
                </div>
                <div className="right-side">
                    <div className="logo"></div>
                    <h2 className="h2 slogan">
                        We assist people in challenging financial situations
                    </h2>
                    <p className="h3 description">
                        Coper P2P fintech project means co-operation between
                        people all over the planet
                    </p>
                    <section className="buttons">
                        <a href="#borrow" className="button primary">
                            To borrow money
                        </a>
                        <a href="#lend" className="button error">
                            To lend money
                        </a>
                    </section>
                </div>
            </section>
        </div>
    );
};
