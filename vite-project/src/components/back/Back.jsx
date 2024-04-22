import './back.css';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='updated-footer'>
            <button className="updated-footer-btn" onClick={scrollToTop}>
                <h2 className="updated-footer-section__title">Go to Top</h2>
            </button>
        </footer>
    );
}

export default Footer;

