import mulheres from '../services/dados'

const Lista = () => {
    return (
        <div>
            {mulheres.map(mulheres =>
                <div key={mulheres.id}>
                    <img width={150} src={mulheres.imagem} alt="Foto de mulheres" />
                    <h1>{mulheres.nome}</h1>
                    <p>{mulheres.descricao}</p>
                </div>
            )}
        </div>
    )
}

export default Lista