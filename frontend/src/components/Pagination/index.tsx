import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination () {
    return (
        <div className="mykamovie-pagination-container">
        <div className="mykamovie-pagination-box">
            <button className="mykamovie-pagination-button" disabled={true} >
                <Arrow />
            </button>
            <p>{`${1} de ${3}`}</p>
            <button className="mykamovie-pagination-button" disabled={false} >
                <Arrow className="mykamovie-flip-horizontal" />
            </button>
        </div>
    </div>
    );
}
export default Pagination;