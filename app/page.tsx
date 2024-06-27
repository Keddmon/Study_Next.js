import Link from "next/link"
import "./globals.css"

interface Topic {
  id: number;
  title: string;
  body: string;
}

export default async function Page() {

  try {
    const resp = await fetch('http://localhost:9999/topics');
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`)
    }
    const topics: Topic[] = await resp.json();

    console.log("Fetched topics: ", topics)

    return (
      <div>
        <h4 className="title">Study Next.js</h4>
        <p className="title-sub">Keddmon</p>
        <ol>
          {
            topics.map((topic) => {
              return (
                <li key={topic.id}>
                  <Link href={`/read/${topic.id}`}>{topic.title}</Link>
                </li>
              )
            })
          }
        </ol>
        <p className="title-sub"><Link href="/create">Create</Link></p>
        <p className="title-sub"><Link href="/create">Update</Link></p>
        <input type="button" value="delete"></input>
      </div>
    )
  } catch (error) {
    console.error("Error fetching topics:", error);
    return <div>Fetching Error</div>
  }
}