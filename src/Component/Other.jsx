
export const Cards = ({children}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            {children}
        </div>
    )
    
}


export const Button = () => {
    return (
        <button className="rounded bg-indigo-500 text-white p-4 w-full">Pilih pokemon</button>
    )
}

export const ChosenChildren = ({children}) => {
    return (
        <div>
            <h2 className="font-bold text-xl mb-2 text-center">Sang Terpilih</h2>
            {children}
        </div>
    )
}

export const Image = ({url}) => {
    return (
        <div>
            <img src={url} className="my-4 mx-auto h-32" alt="/"/>
        </div>
    )
} 

export const Title = ({name}) => {
    return (
        <div>
            <p className="font-bold text-xl mb-2 text-center">{name}</p>
        </div>
    )
}


