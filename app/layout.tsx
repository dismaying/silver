import './../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-gray-100 min-h-screen flex flex-col'>
        <div className="bg-[url('/pattern.svg')] bg-cover bg-center flex-grow">
          <header className='flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur-sm'>
            {/* Silver Dagger as a clickable button */}
            <Link href='/'>Silver Dagger</Link>
            <nav>
              <ul className='flex space-x-4'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <a
                    href='/application'
                    className='text-gray-300 hover:text-purple-400 transition'
                  >
                    Application
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main className='px-8 py-16'>{children}</main>
        </div>
        {/* Footer Section */}
        <footer className='flex justify-center items-center py-4 bg-black/70 backdrop-blur-sm'>
          <a
            href='/privacy'
            className='text-gray-300 hover:text-purple-400 transition'
          >
            Privacy Policy
          </a>
        </footer>
      </body>
    </html>
  );
}
