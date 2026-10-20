import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Shiro</h1>
    </main>
  )
}
