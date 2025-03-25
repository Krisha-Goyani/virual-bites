import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import strings from '@/config/strings.json';
import styles from './header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/image/logo.png"
            alt={strings.HEADER.LOGO_ALT}
            title={strings.HEADER.LOGO_TITLE}
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className={styles.desktopNav}>
          {strings.HEADER.NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.rightSection}>
          <button className={styles.searchButton} aria-label="Search">
            <Image
              src="/image/search.png"
              alt="search"
              title='search'
              width={24}
              height={24}
            />
          </button>
          <button className={styles.notificationButton} aria-label="Notification">
            <Image
              src="/image/notification.png"
              alt="notification"
              title='notification'
              width={24}
              height={24}
            />
            <span className={styles.notificationCount}>1</span>
          </button>
          <Link href="/login" className={styles.loginButton}>
            {strings.HEADER.LOGIN_SIGNUP}
          </Link>
        </div>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          {strings.HEADER.NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={styles.mobileNavLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;