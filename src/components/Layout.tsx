import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-purple-50 ring-1 ring-purple-100 dark:bg-purple-900 dark:ring-purple-700/30" />
        </div>
      </div>
      <div className="relative flex w-full flex-col bg-purple-50 dark:bg-purple-900">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
