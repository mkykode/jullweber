import Link from 'next/link';
function Footer() {
  return (
    <footer className="z-50 relative text-center">
      <ul className="grid grid-cols-3 gap-3 font-sm">
        <li className="pr-4 block">
          <Link href="mailto:jull@monkeykodeagency.com">email me </Link>
        </li>{' '}
        <li className="pr-8 block">
          <Link href="http://www.monkeykode.com" target="_blank">
            Monkey Kode
          </Link>
        </li>{' '}
        <li className="pr-8 block">
          <Link href="https://github.com/mkykode" target="_blank">
            github
          </Link>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
