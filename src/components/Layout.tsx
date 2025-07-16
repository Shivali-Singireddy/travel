import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// export function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <div className="fixed inset-0 flex justify-center sm:px-8">
//         <div className="flex w-full max-w-7xl lg:px-8">
//           <div className="w-full bg-purple-50 ring-1 ring-purple-100 dark:bg-purple-900 dark:ring-purple-700/30" />
//         </div>
//       </div>
//       <div className="relative flex w-full flex-col bg-purple-50 dark:bg-purple-900">
//         <Header />
//         <main className="flex-auto">{children}</main>
//         <Footer />
//       </div>
//     </>
//   )
// }
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Outer light yellow background */}
      <div className="fixed inset-0 bg-yellow-50 dark:bg-yellow-900" />

      {/* Centered white content container */}
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="w-full max-w-7xl bg-white ring-1 ring-yellow-100 dark:bg-zinc-900 dark:ring-yellow-700/30 lg:px-8 sm:px-4">
          <Header />
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}
