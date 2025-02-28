"use client";

import styles from "../styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation(){
    const [count, setCount] = useState(0);
    const path = usePathname();
    console.log(path)
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link> {path === "/" && "🔥"}</li>
                <li><Link href="/about-us">About</Link> {path === "/about-us" && "🔥"}</li>
                <li><button onClick={() => setCount(c => c+ 1)}>{count}</button></li>
            </ul>
        </nav>
    )
}
