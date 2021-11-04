import { useRouter } from 'next/router'
import { func } from 'prop-types'
import { async } from 'regenerator-runtime'

export default function List({ list }) {
    const router = useRouter()

    const { name } = router.query

    return (
        <div>
            <p>list {list}</p>
            name {name}
        </div>
    )
}

export async function getServerSideProps({ params }) {
    console.log(params)
    const data = {
        'epic': {
            name: 'epicfreegames'
        }, 
        'test': {
            name: 'epicfreegames'
        },
        'asdf': {
            name: 'epicfreegames'
        }
    }


    console.log(data[params.name])
    return {
        props: { list: data[params.name].name}
    }
}