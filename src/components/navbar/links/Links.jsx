"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const Links =  ({ session }) => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const isAdmin = true;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink key={index} item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>

            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Links;
