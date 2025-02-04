export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section className="screen">
            <div className="container screen-container">
                <div className="row">
                    <div className="col-sm">
                        <footer className="footer">
                            <div>
                                <span id="currentYear"> {year}</span> Coper P2P fintech
                                project
                            </div>
                            <div>All rights reserved</div>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
};
