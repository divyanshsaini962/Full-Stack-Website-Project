import Link from "next/link";
import Image from "next/image";
import Logo from '../public/logoDark.png';

export default function Footer(){
    return<>
      <div className="footer">
         <div className="container flex flex-sb flex-wrap flex-left">
            <div className="footer_logo">
            <Link href={"/"}><Image src={Logo} className="logoimg" width={150} alt="logo"/></Link>

               <h4>&copy; 2024 All Rights Reserved. </h4>
               <h3>Coded By <span>@tech</span> </h3>
            </div>
            <div className="q_links">
               <h3>Quick Links</h3>
               <ul>
                 <li><Link href="/">Advertise with us </Link></li>
                 <li><Link href="/abouy">About us</Link></li>
                 <li><Link href="/contact">Contact us</Link></li>
               </ul>
            </div>
            <div className="q_links">
               <h3>Legal Staff Link</h3>
               <ul>
                 <li><Link href="/">Privacy Notice</Link></li>
                 <li><Link href="/">Cookie Policy</Link></li>
                 <li><Link href="/">Terms of Use</Link></li>
               </ul>
            </div>
            <div className="q_links">
               <h3>Social Media</h3>
               <ul>
                 <li><Link href="/">Git hub</Link></li>
                 <li><Link href="/">X</Link></li>
                 <li><Link href="/">Instagram</Link></li>
               </ul>
            </div>

         </div>
      </div>
    </>
}