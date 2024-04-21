import styles from './Contact.module.css';
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';

const Contact = ({ contactData }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const changeModalIsOpen = () => {
    setDeleteModalIsOpen(prevState => !prevState);
  };

  return (
    <>
      <li className={styles.userItem}>
        <div>
          <div className={styles.nameContainer}>{contactData.name}</div>
          <div className={styles.phoneContainer}>{contactData.number}</div>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => {
              changeModalIsOpen();
            }}
          >
            Delete
          </button>
        </div>
      </li>
      {deleteModalIsOpen && (
        <DeleteModal
          openState={deleteModalIsOpen}
          id={contactData.id}
          modalClose={changeModalIsOpen}
        />
      )}
    </>
  );
};

export default Contact;
