import Cards from "components/Cards";
import Main from "components/Main";

const title = 'Um lugar para guardar seus vídeos e filmes!'

export default function Home() {
    return (
        <>
            <Main title={title}>
                <Cards/>
            </Main>
        </>
    )
}
