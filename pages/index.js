import Head from 'next/head'
import Results from '../components/Results.js'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utilities/requests.js'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Netflix 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* navbar */}
      <Nav />
      {/* content  */}
      <Results results={results} />
      
      </div>
  )
}

export async function getServerSideProps(context) { 
  const genre = context.query.genre;
  // console.log('this is genre',genre)
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json())

  console.log(Response)
  return {
    props : {
      results : request.results,
    }
  }
}
