"use client"

import Link from "next/link";

export default function Footer(){
    return(
        <footer className="footer p-10 bg-neutral text-neutral-content pl-96">
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link href={"/products"}>
                    <p className="link link-hover">Products</p>
                </Link>
            </nav> 
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link href={"/aboutus"}>
                    <p className="link link-hover">About us</p>
                </Link>
                
            </nav> 
        </footer>
    )
}