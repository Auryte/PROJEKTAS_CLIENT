import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import PopUp from '../PopUp';

const PageNotFound = () => {
  const navigate = useNavigate();
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);
  const handleClose = () => {
    setIsPopUpOpen(false);
    navigate('/');
  };
  const handlecloseCancel = () => {
    setIsPopUpOpen(false);
    navigate('/');
  };
  return (
    <div>
      { isPopUpOpen
        ? <PopUp
          content={
            <>
              <h2> Puslapis nerastas </h2>
              <p>Panašu, kad bandote patekti į eksterjerą. Pasitikslinkite adresą arba grįžkite į interjerą.</p>
              <Button onClick={() => handleClose()} className='btnOutlinedBlackText' text='Gerai'/>
            </>
          }
          handleCloseCancel={() => handlecloseCancel()}
        />
        : null }
    </div>
  );
};

export default PageNotFound;
