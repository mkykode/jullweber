import Logo from '../components/Logo';
import Link from 'next/link';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
          <section className="text-left mt-18">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2>Bio +</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 text-ellipsis">
                    <div>
                      <p>
                        I have over 20 years of experience in web and web app
                        development, specializing in transforming abstract ideas
                        into innovative solutions. I aim to create engaging,
                        user-friendly applications and online experiences that
                        solve real-world problems.
                      </p>
                      <p>
                        My technical and software design skills were honed
                        through a combination of computer science and
                        engineering programs at Purdue University and a Bachelor
                        of Science degree from MIT, which I began pursuing at
                        the young age of 11.
                      </p>
                      <p>
                        I further developed my expertise by working as a Tech
                        Lead at various advertising agencies in Los Angeles,
                        where I created numerous online user experiences for
                        high-profile clients such as Disney, ESPN, Honda,
                        Turbotax, Dole, Nestlé, Lenovo laptops, Qantas, Suzuki,
                        Wachovia, and Wells Fargo.
                      </p>
                      <p>
                        I am the owner of Monkey Kode, a web development agency
                        specializing in E-commerce, Headless sites, Custom CMSs,
                        and complex API integrations. My team and I strive to
                        deliver innovative solutions that exceed clients&apos;
                        expectations.I have over 20 years of experience in web
                        and web app development, specializing in transforming
                        abstract ideas into innovative solutions. I aim to
                        create engaging, user-friendly applications and online
                        experiences that solve real-world problems. My technical
                        and software design skills were honed through a
                        combination of computer science and engineering programs
                        at Purdue University and a Bachelor of Science degree
                        from MIT, which I began pursuing at the young age of 11.
                        I further developed my expertise by working as a Tech
                        Lead at various advertising agencies in Los Angeles,
                        where I created numerous online user experiences for
                        high-profile clients such as Disney, ESPN, Honda,
                        Turbotax, Dole, Nestlé, Lenovo laptops, Qantas, Suzuki,
                        Wachovia, and Wells Fargo. I am the owner of Monkey
                        Kode, a web development agency specializing in
                        E-commerce, Headless sites, Custom CMSs, and complex API
                        integrations. My team and I strive to deliver innovative
                        solutions that exceed clients&apos; expectations.
                      </p>
                    </div>
                    <div
                      style={
                        {
                          //   position: 'relative',
                          //   width: '100%',
                          //   height: '100%',
                          //   minHeight: '572px',
                        }
                      }
                    >
                      <Image
                        src={'/Jull-B2.png'}
                        alt="Jull Weber"
                        width={512}
                        height={572}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          <section></section>
        </div>
      </main>
    </>
  );
}
