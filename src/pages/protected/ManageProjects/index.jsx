import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetData from '../../../hooks/useGetData';
import APIget from '../../../API/get';
import API from '../../../API/delete';
import TitleItem from '../../../components/ManageTitleForm';
import Button from '../../../components/Button';
import PopUp from '../../../components/PopUp';
import styles from './styles.module.css';

const ManageProject = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [title, setTitle] = useState('');

  const [projects] = useGetData(APIget.getProjects(), isDeleted);

  const handleClick = (id, title) => {
    setIsPopUpOpen(id);
    setTitle(title);
  };
  const handlePopupClose = (id) => {
    API.deleteProject(id);
    setIsPopUpOpen(false);
    setIsDeleted(!isDeleted);
  };
  return (
    <div className={styles.MainContainer} >
      <div className={styles.BtnContainer}>
        <h2>Projektai</h2>
        <Link to='/create-project'>
          <Button text='Kurti naują' className='btnOutlinedBlackText' />
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
          {projects.map(item => (
            <TitleItem
              key={item._id}
              item={item}
              onClick={() => handleClick(item._id, item.title)}
              linkUpdate={`/update-project/${item.seoUrl}`}
              linkView={`../interjero-dizainas/${item.seoUrl}`}
            />
          ))}
        </tbody>
      </table>
      { isPopUpOpen &&
        <PopUp
          content={
            <>
              <div>Projektas pavadinimu <b> &quot;{ title }&quot; </b> bus ištrintas. Ar jūs tikrai to norite?</div>
              <Button onClick={() => handlePopupClose(isPopUpOpen)} className='btnOutlinedBlackText' text='Taip'/>
            </>
          }
          handleCloseCancel={() => setIsPopUpOpen(false)}
        />
      }
    </div>
  );
};

export default ManageProject;
