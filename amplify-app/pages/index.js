import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Let's Go Users Page</h1>
      <Link href={`/users`}>
        <a>Users Page</a>
      </Link>
      <h1>Let's Go Edit Page</h1>
      <Link href={`/edit`}>
        <a>Edit Page</a>
      </Link>
      <h1>Let's Go Login Page</h1>
      <Link href={`/login`}>
        <a>Login Page</a>
      </Link>
      <h1>Let's Go Preview Page</h1>
      <Link href={`/preview`}>
        <a>Preview Page</a>
      </Link>
      <h1>Let's Go Pricing Page</h1>
      <Link href={`/pricing`}>
        <a>Pricing Page</a>
      </Link>
      <h1>Let's Go Template Page</h1>
      <Link href={`/template`}>
        <a>Template Page</a>
      </Link>
      <h1>Let's Go NotFound Page</h1>
      <Link href={`/Not-Found`}>
        <a>NotFound Page</a>
      </Link>
      <h1>Let's Go Internal Server Error Page</h1>
      <Link href={`/internal-server-error`}>
        <a>Internal Server Error Page</a>
      </Link>
      <h1>Let's Peek Higashi Kota Sketch Page</h1>
      <Link href={`/sketch/higashi-kota`}>
        <a>Higashi Kota Page</a>
      </Link>
      <h1>Let's Peek Kudo Kai Sketch Page</h1>
      <Link href={`/sketch/kudo-kai`}>
        <a>Kudo Kai Page</a>
      </Link>
      <h1>Let's Peek Nakata Yuta Sketch Page</h1>
      <Link href={`/sketch/nakata-yuta`}>
        <a>Nakata Yuta Page</a>
      </Link>
      <h1>Let's Peek Okumoto Sho Sketch Page</h1>
      <Link href={`/sketch/okumoto-sho`}>
        <a>Okumoto Sho Page</a>
      </Link>
      <h1>Let's Peek Toya Naoko Sketch Page</h1>
      <Link href={`/sketch/toya-naoko`}>
        <a>Toya Naoko Page</a>
      </Link>
    </div>
  )
}

export default Home