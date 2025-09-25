import { useEffect, useState } from 'react';
import type { User } from '../../types/user';
import styles from './UserModal.module.css';

interface Props {
  user: User | null;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (user) setIsVisible(true);
  }, [user]);

  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300); 
  };

  if (!user) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={`${styles.modal} ${isVisible ? styles.modalOpen : styles.modalClose}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className={styles.closeButton}>
          ×
        </button>

        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name}</p>
        <p>
          Address: {user.address.street}, {user.address.suite},{' '}
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}


