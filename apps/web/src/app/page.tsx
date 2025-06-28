'use client'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const sendPrompt = async () => {
    const res = await fetch('http://localhost:8000/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })
    const data = await res.json()
    setResponse(data.response)
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Codomo Chat</h1>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something..."
        className="border p-2 mr-2"
      />
      <button onClick={sendPrompt} className="bg-black text-white px-4 py-2">Send</button>
      <div className="mt-4">{response}</div>
    </main>
  )
}
