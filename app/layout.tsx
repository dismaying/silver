import './../styles/globals.css';
import Link from 'next/link';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </head>

      {/* Google Ads Script */}
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8198927067197530'
        crossOrigin='anonymous'
        strategy='lazyOnload'
      />

      <body className='bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-gray-100 min-h-screen flex flex-col'>
        <div className="bg-[url('/silver.svg')] bg-cover bg-center flex-grow">
          {/* Header */}
          <header className='flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur-sm'>
            <Link href='/' className='text-lg font-bold'>
              Silver Dagger
            </Link>
            <nav aria-label='Main navigation'>
              <ul className='flex space-x-4'>
                <li>
                  <Link
                    href='/'
                    className='text-gray-300 hover:text-purple-400 transition'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/application'
                    className='text-gray-300 hover:text-purple-400 transition'
                  >
                    Application
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className='px-8 py-16'>{children}</main>
        </div>

        {/* Footer */}
        <footer className='flex flex-col justify-center items-center py-6 bg-black/70 backdrop-blur-sm'>
          <div className='text-center'>
            <p className='text-sm text-gray-400'>
              © {new Date().getFullYear()} Silver Dagger. All rights reserved.
            </p>
            <div className='mt-4'>
              <Link
                href='/privacy'
                className='text-gray-300 hover:text-purple-400 transition'
              >
                Privacy Policy
              </Link>
              <span className='mx-2 text-gray-400'>|</span>
              <Link
                href='/terms'
                className='text-gray-300 hover:text-purple-400 transition'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
