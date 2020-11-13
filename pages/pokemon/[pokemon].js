import Head from 'next/head'
import pokemon from 'pokemon'

function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        Welcome, {pokemon?.name}!
        <img src={pokemon?.sprites.front_default} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = pokemon.all().map((p) => {
    return `/pokemon/${p.toLowerCase().replace(/[ ']/g, '').replace('.', '-')}`
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
  const pokemon = await res.json()

  return {
    props: {
      pokemon,
    },
  }
}

export default Pokemon
