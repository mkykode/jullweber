import Logo from '../components/Logo';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main className="bg-[rgba(0,0,0,.25)] h-auto text-sm lg:text-base rounded-xl lg:min-w-[80%] m-0 p-0 font-light lg:tracking-wide flex justify-center flex-col items-center lg:p-24 lg:m-24">
        <div className="z-50 relative">
          <Logo />
        </div>
        <div className="mb-32 text-center lg:mb-0 relative z-50">
          <Link href="https://monkeykode.com" target="_blank">
            <h1 className="text-4xl uppercase leading-loose">
              Monkey <span className="text-orange-600">Kode</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-light">Jull Weber</h2>
          <section className="pt-24">
            <div className="text-left relative -translate-x-4 transform lg:translate-x-0">
              <h4 className="text-center pl-4 font-extralight uppercase tracking-widest text-sm absolute top-1/2 transform -rotate-90">
                Talks
              </h4>{' '}
              <ul className="list-[circle] pl-16">
                <li>
                  <a href="https://mkykode.github.io/http2" target="_blank">
                    Moving towards performance with HTTP/2
                  </a>
                </li>{' '}
                <li>
                  <a href="https://mkykode.github.io/devtools" target="_blank">
                    Deep Dive into Chrome Dev Tools
                  </a>
                </li>{' '}
                <li>
                  <a href="https://mkykode.github.io/cssgrids" target="_blank">
                    Deep Dive into CSS Grid Layouts{' '}
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
