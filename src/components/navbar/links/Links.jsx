"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const Links = (session)  => {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const [open, setOpen] = useState(false);

  //TEMPORARY

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user  ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/login" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button className={styles.menuButton}>
        <img
          src="/menu.png"
          alt="menu"
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        />
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Links;
