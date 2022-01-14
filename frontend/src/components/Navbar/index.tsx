import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css';
function Navbar() {
    return (
        //container - classe container é uma classe do bootstraper e delimita a largura do conteúdo
        //dentro do <nav> no caso.
        <header>
            <nav className="container">
                <div className="mykamovie-nav-content">
                    <h1>MykaMovie</h1>
                    <a href="https://github.com/mykadias">
                        <div className="mykamovie-contact-container">
                            <GitHubIcon />
                            <p className="mykamovie-contact-link">/mykadias</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;