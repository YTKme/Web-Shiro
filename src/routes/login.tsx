import { createFileRoute } from '@tanstack/react-router'
import { Shield } from 'lucide-react'
import { LoginForm } from '~/components/login-form'
import { ThemeToggle } from '~/components/theme-toggle'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Shield className="size-4" />
          </div>
          Shiro
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
