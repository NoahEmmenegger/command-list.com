import { useRouter } from 'next/router'

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

    return {
        props: { list: data[params.name].name}
    }
}