import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetData from '../../../hooks/useGetData';
import APIget from '../../../API/get';
import API from '../../../API/delete';
import TitleItem from '../../../components/ManageTitleForm';
import Button from '../../../components/Button';
import PopUp from '../../../components/PopUp';
import styles from './styles.module.css';

const ManageArticle = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [title, setTitle] = useState('');

  const [articles] = useGetData(APIget.getArticles(), isDeleted);

  const handleClick = (id, title) => {
    setIsPopUpOpen(id);
    setTitle(title);
  };
  const handlePopupClose = (id) => {
    API.deleteArticle(id);
    setIsPopUpOpen(false);
    setIsDeleted(!isDeleted);
  };
  return (
    <div className={styles.MainContainer}>
      <div className={styles.BtnContainer}>
        <h2>Straipsniai</h2>
        <Link to='/create-article'>
          <Button text='Kurti naują' className='btnOutlinedBlackText'/>
        </Link>
      </div>
      <table className={styles.Table}>
        <thead className={styles.Thead}>
          <tr>
            <th>Pavadinimas</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(item =>
            <TitleItem
              key={item._id}
              item={item}
              onClick={() => handleClick(item._id, item.title)}
              linkUpdate={`/update-article/${item.seoUrl}`}
              linkView={`../interjero-patarimai/${item.seoUrl}`}
            />)}
        </tbody>
      </table>
      { isPopUpOpen &&
        <PopUp
          content={
            <>
              <div>Straipsnis pavadinimu <b> &quot;{title }&quot; </b> bus ištrintas. Ar jūs tikrai to norite?</div>
              <Button onClick={() => handlePopupClose(isPopUpOpen)} className='btnOutlinedBlackText' text='Taip'/>
            </>
          }
          handleCloseCancel={() => setIsPopUpOpen(false)}
        />
      }
    </div>
  );
};

export default ManageArticle;
