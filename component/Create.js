import Link from "next/link"

export default function Create({onclick}) {
    let title = ''
    let description = ''

    return (
        <div className="flex flex-col">
            <Link href="/">Back</Link>
            <div className="m-1">
                <p>Project Title</p>
                <input type="text" className="border-2" onChange={e => {
                    title = e.target.value
                }}/>
            </div>
            <div className="m-1">
                <p>Description</p>
                <textarea type="text" className="border-2" onChange={e => {
                    description = e.target.value
                }}/>
            </div>
            
            <input className="m-1 btn" type="submit" onClick={() => {onclick({title, description})}} />
        </div>
    )
}