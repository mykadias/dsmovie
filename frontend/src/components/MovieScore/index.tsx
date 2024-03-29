import MovieStars from "components/MovieStars";
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {
 
    return (
        <div className="mykamovie-score-container">
            <p className="mykamovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars  score = {score}/>
            <p className="mykamovie-score-count">{count} avaliações</p>
        </div>
    );
}

/* ? - Condicional ternário, no exemplo citado, o ? (Se) vai fazer: ser o score for maior que 0,
o interrogação vai mostrar essa nota "score.toFixed(1), esse toFixed é para arredondar com uma casa
decimal só


: -  e tem o : (se não) caso a primeira condição for falsa, ele só vai mostrar o "-"
*/

export default MovieScore;