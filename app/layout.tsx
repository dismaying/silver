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
        {/* Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </head>

      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8198927067197530'
        crossOrigin='anonymous'
        strategy='lazyOnload'
      />
      <body className='bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-gray-100 min-h-screen flex flex-col font-overlock'>
        {/* Decorative Background */}
        <div className="bg-[url('https://cdn.silverdagger.vip/silver-icon.png')] bg-cover bg-center flex-grow overflow-hidden">
          {/* Header Section */}
          <header className='flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur-sm'>
            {/* Logo or Brand Name as a clickable link */}
            <Link
              href='/'
              className='text-xl font-bold text-purple-400 hover:text-purple-500 transition'
            >
              Silver Dagger
            </Link>
            <nav>
              <ul className='flex space-x-6'>
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

        {/* Footer Section */}
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
